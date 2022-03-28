import { Divider } from "@modules/atom/divider";
import { InputComponent } from "@modules/atom/input";
import { Label } from "@modules/atom/label";
import { Textarea } from "@modules/atom/textarea";
import { addToInfo, userSelector } from "@store/ducks/auth";
import React from "react";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

interface IProps {
  onAbout: ({ target: { value } }: { target: { value: string } }) => void;
  onTitle: ({ target: { value } }: { target: { value: string } }) => void;
  title: string;
  about: string;
}

const Info = ({ onAbout, onTitle, title, about }: IProps) => {
  return (
    <div className="info">
      <Label>Profile Photo</Label>
      <div className="flex mt-2">
        <div className="upload flex justify-center items-center flex-col">
          <FiUploadCloud color="#2b2b39" size={30} />
          <p className="text-secondary text-xl">Browse photo</p>
        </div>
        <div className="divider bg-gray"></div>
        <div className="avatar flex justify-center items-center flex-col">
          <p>M</p>
        </div>
      </div>
      <div className="mt-5">
        <Label>Title*</Label>
        <InputComponent
          variant="primary"
          value={title}
          onChange={(e) => onTitle(e)}
        />
        <Divider className="my-5" />
        <Label>About*</Label>
        <Textarea
          variant="primary"
          onChange={(e) => onAbout(e)}
          style={{ height: "200px" }}
          value={about}
        />
      </div>
    </div>
  );
};

export default Info;
