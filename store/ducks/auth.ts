import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@utils/firebaseConfig";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export interface Users {
  id: number;
  first_name: string;
  last_name: string;
  email_name: string;
  phone: string;
  email: string;
  photo: string;
  address: string;
  country: string;
  group: string;
  user: [];
}

export type UserState = {
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
  isLoggedIn: boolean;
};

const initialState: UserState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  isLoggedIn: false,
};

export const signInGoogle: any = createAsyncThunk(
  "users/signInGoogle",
  async ({}, thunkAPI) => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
        return user;
      }
    } catch (err) {
      console.error(err);
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const signInGithub: any = createAsyncThunk(
  "users/signInGithub",
  async ({}, thunkAPI) => {
    try {
      const res = await signInWithPopup(auth, githubProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "github",
          email: user.email,
        });
        return user;
      }
    } catch (err) {
      console.error(err);
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUser: any = createAsyncThunk(
  "users/login",
  async ({ email, password }: any, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const registerUser: any = createAsyncThunk(
  "users/register",
  async ({ email, password, firstName, lastName }: any, thunkAPI) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstName,
        lastName,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const forgotUser: any = createAsyncThunk(
  "users/forgot",
  async ({ email }: any, thunkAPI) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = () => {
  signOut(auth);
};

export const userSlice: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [signInGoogle.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
    },
    [signInGoogle.pending]: (state) => {
      state.isFetching = true;
    },
    [signInGoogle.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [signInGithub.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
    },
    [signInGithub.pending]: (state) => {
      state.isFetching = true;
    },
    [signInGithub.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [forgotUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isLoggedIn = true;
      state.isSuccess = true;
      return state;
    },
    [forgotUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [forgotUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state: any) => state.user;
