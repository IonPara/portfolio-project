import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setTheme, setColor } from "../portfolioSlice";

const Theme = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  return (
    <div
      className={
        state
          ? "theme-container animate__fadeInRight"
          : " theme-container close-theme"
      }
    >
      <div className="themes d-flex justify-evenly">
        <div className="">
          <div
            onClick={() => {
              dispatch(setColor("#0275d8"));
              dispatch(setTheme("primary"));
            }}
            className="bg-primary theme mb-2 mt-4"
          />
          <div
            onClick={() => {
              dispatch(setColor("#d9534f"));
              dispatch(setTheme("danger"));
            }}
            className="bg-danger theme"
          />
        </div>
        <div>
          <div
            onClick={() => {
              dispatch(setColor("#5cb85c"));
              dispatch(setTheme("success"));
            }}
            className="bg-success theme mb-2 mt-4"
          />
          <div
            onClick={() => {
              dispatch(setColor("#f0ad4e"));
              dispatch(setTheme("warning"));
            }}
            className="bg-warning theme"
          />
        </div>
      </div>
      <h4
        onClick={() => {
          state ? setState(false) : setState(true);
        }}
      >
        Theme
      </h4>
    </div>
  );
};

export default Theme;
