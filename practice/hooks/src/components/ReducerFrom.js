import { useEffect, useReducer } from "react";
function reducer(form, action) {
  // console.log(form);
  if (action.type === "changeName") {
    return { ...form, name: action.val };
  }
  if (action.type === "changeEmail") {
    // console.log("Email");
    return { ...form, email: action.val };
  }
  if (action.type === "changePassword") {
    return { ...form, password: action.val };
  }
  return form;
}
const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  passwordError: "",
  emailError: "",
};

function ReducerForm() {
  const [form, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (form.name.length < 5 || form.name === "") {
      form.nameError = "Your Name lenght is less than 5";
    } else {
      form.nameError = "";
    }
  }, [form.name]);
  useEffect(() => {
    if (form.email !== "" && validateEmail(form.email) === false) {
      form.emailError = "You Put An Invalid Email Address";
    } else {
      form.emailError = "";
    }
  }, [form.email]);
  useEffect(() => {
    if (form.password !== "" && form.password.length < 8) {
      form.passwordError = "Password lenght Must be greater than 8";
    } else {
      form.passwordError = "";
    }
  }, [form.password]);

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  return (
    <div className="container">
      <h2>Form Validation</h2>
      <form>
        <label>Name</label>
        <input
          type="name"
          className={form.nameError !== "" ? "error" : "success"}
          onChange={(e) =>
            dispatch({ type: "changeName", val: e.target.value })
          }
        />
        <p className="error">{form.nameError}</p>
        <label>Email</label>
        <input
          className={form.emailError !== "" ? "error" : "success"}
          type="email"
          onChange={(e) =>
            dispatch({ type: "changeEmail", val: e.target.value })
          }
        />
        <p className="error">{form.emailError}</p>
        <label>Passowrd</label>
        <input
          className={form.passwordError !== "" ? "error" : "success"}
          type="password"
          onChange={(e) =>
            dispatch({ type: "changePassword", val: e.target.value })
          }
        />
        <p className="error">{form.passwordError}</p>
        <button>Submit data</button>
      </form>
      <h1>YOUR ENTERED DATA:</h1>
      <h2>Name: {form.name}</h2>
      <h2>Email: {form.email}</h2>
      <h2>password: {form.password}</h2>
    </div>
  );
}
export default ReducerForm;
