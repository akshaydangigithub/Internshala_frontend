import axios from "@/utills/axios";
import {
  addstudent,
  removestudent,
  iserror,
  addJobs,
  addInternships,
  removeerror,
} from "../Reducers/studentReducer";

export const asynccurrentstudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    dispatch(addstudent(data.student));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynsignupstudent = (newStudent) => async (dispatch, getState) => {
  try {
    const data = await axios.post("/student/signup", newStudent);
    asynccurrentstudent();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynsigninstudent = (student) => async (dispatch, getState) => {
  try {
    const data = await axios.post("/student/signin", student);
    asynccurrentstudent();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynsignoutstudent = () => async (dispatch, getState) => {
  try {
    const data = await axios.post("/student/signout");
    dispatch(removestudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynupdatestudent = (student) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/update/" + _id, student);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynavatarstudent = (avatar) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/avatar/" + _id, avatar);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncstudentresetpassword =
  (password) => async (dispatch, getState) => {
    try {
      const { _id } = getState().studentReducer.student;
      const { data } = await axios.post(
        "/student/reset-password/" + _id,
        password
      );
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncstudentforgetpassword =
  (email) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/student/send-mail/", email);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncstudentotppassword = (pwd) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/forget-link/", pwd);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asycalljobs = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/alljobs/");
    dispatch(addJobs(data.jobs));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asycallinternships = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/allinternships/");
    dispatch(addInternships(data.internships));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyjobstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/apply/job/" + id);
    dispatch(asynccurrentstudent());
    dispatch(asycalljobs());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyinternshipstudent =
  (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/student/apply/internship/" + id);
      dispatch(asynccurrentstudent());
      dispatch(asycallinternships());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

// --------------- Add Education -----------------

export const asyncaddedustudent = (edu) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-edu/", edu);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeletedustudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-edu/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyneditedustudent = (id, edu) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-edu/" + id, edu);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

// --------------- Add Jobs -----------------

export const asyncaddjobstudent = (job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-jobs/", job);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeletejobstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-jobs/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyneditjobstudent = (id, job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-jobs/" + id, job);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

// --------------- Add Internships -----------------

export const asyncaddinternshipstudent =
  (internship) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-internship/", internship);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncdeleteinternshipstudent =
  (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/delete-internship/" + id);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyneditinternshipstudent =
  (id, intern) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/resume/edit-internship/" + id,
        intern
      );
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

// --------------- Add responsibilities -----------------

export const asyncaddresponsibilitystudent =
  (responsibility) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/resume/add-responsibility/",
        responsibility
      );
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncdeleteresponsibilitystudent =
  (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/delete-responsibility/" + id);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyneditresponsibilitystudent =
  (id, res) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/resume/edit-responsibility/" + id,
        res
      );
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

// --------------- Add courses -----------------

export const asyncaddcoursestudent = (course) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-course/", course);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeletecoursestudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-course/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyneditcoursestudent =
  (id, course) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/edit-course/" + id, course);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

// --------------- Add skills -----------------

export const asyncaddskillstudent = (skill) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-skill/", skill);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleteskillstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-skill/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyneditskillstudent =
  (id, skill) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/edit-skill/" + id, skill);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

// --------------- Add projects -----------------

export const asyncaddprojectstudent =
  (project) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-project/", project);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncdeleteProstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-project/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyneditprojectstudent =
  (id, project) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/edit-project/" + id, project);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

// --------------- Add accomplishment -----------------

export const asyncaddaccomplishmentstudent =
  (accomplishment) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/resume/add-accomplishment/",
        accomplishment
      );
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncdeleteAccstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-accomplishment/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyneditaccomplishmentstudent =
  (id, accomplishment) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/resume/edit-accomplishment/" + id,
        accomplishment
      );
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };
