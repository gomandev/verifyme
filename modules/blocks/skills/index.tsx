import React from "react";
import { InputComponent } from "@modules/atom/input";
import { Label } from "@modules/atom/label";
import { useState } from "react";
import { FiX } from "react-icons/fi";

interface IProps {
  handleDelete: (index: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  skillsArray: Array<string>;
  text: string;
}

const Skills = ({
  handleDelete,
  handleChange,
  handleKeyPress,
  skillsArray,
  text,
}: IProps) => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex mb-5 flex-wrap">
          {skillsArray.map((e, index) => (
            <div
              className="flex justify-between items-center skill-chip text-accent bg-primary rounded px-2 mr-2 mb-2"
              style={{ fontSize: "13px" }}
              key={index}
            >
              {e}{" "}
              <FiX
                color="#ffffff"
                onClick={() => handleDelete(index)}
                size={10}
              />
            </div>
          ))}
        </div>
        <Label>Add Skills*</Label>
        <InputComponent
          variant="primary"
          line
          style={{ borderRadius: "0", paddingLeft: "0", paddingRight: "0" }}
          onChange={handleChange}
          onKeypress={(e) => handleKeyPress(e)}
          value={text}
          plain
        />
        <div className="mt-2">
          <p style={{ color: "#666" }} className="text-sixteen">
            Click enter key to add.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
