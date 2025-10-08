import React from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../../../../hook/userSlice";
//import PropTypes from 'prop-types';
import { message } from "antd";
import RegisterForm from "./RegisterForm";
import "./style.scss";



function Register() {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    try {
      //values.name = values.email;
      const actionResult = await dispatch(register(values));
      const user = unwrapResult(actionResult);

      messageApi.open({
        type: "success",
        content: "Register successfully",
      });

      console.log("New user", user);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Register failed. Please try again",
      });
      console.log("Failed to register", error);
    }
  };

  return (
    <>
      {contextHolder}
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
}

export default Register;
