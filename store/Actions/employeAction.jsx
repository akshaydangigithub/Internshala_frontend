import axios from "@/utills/axios";
import {
  addemploye,
  removeemploye,
  iserror,
  addJobs,
  addInternships,
  removeerror,
} from "../Reducers/employeReducer";

export const asynccurrentemploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/current");
    dispatch(addemploye(data.employe));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynsignupemploye = (newemploye) => async (dispatch, getState) => {
  try {
    const data = await axios.post("/employe/signup", newemploye);
    asynccurrentemploye();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynsigninemploye = (employe) => async (dispatch, getState) => {
  try {
    const data = await axios.post("/employe/signin", employe);
    asynccurrentemploye();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynsignoutemploye = () => async (dispatch, getState) => {
  try {
    const data = await axios.post("/employe/signout");
    dispatch(removeemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynupdateemploye = (employe) => async (dispatch, getState) => {
  try {
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/update/" + _id, employe);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynavataremploye = (avatar) => async (dispatch, getState) => {
  try {
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/avatar/" + _id, avatar);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncemployeresetpassword =
  (password) => async (dispatch, getState) => {
    try {
      const { _id } = getState().employeReducer.employe;
      const { data } = await axios.post(
        "/employe/reset-password/" + _id,
        password
      );
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncemployeforgetpassword =
  (email) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/employe/send-mail/", email);
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncemployeotppassword = (pwd) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/forget-link/", pwd);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynccreatejobemploye = (job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/job/create/", job);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynccreateinternshipemploye =
  (internship) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/employe/internship/create/",
        internship
      );
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };
