import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Formik, useFormik } from "formik";
import { signUpSchema } from "./Schemas";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
function FormikForm() {
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <>
      <form className="form w-50 mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-center">Form Validation through Formik</h2>
        <div className="form-group ">
          <label htmlfor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            autoComplete="off"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlfor="exampleInputPassword1">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="error">{errors.email}</p>
          ) : null}
        </div>
        <div className="form-group ">
          <label htmlfor="password">Email Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="error">{errors.password}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlfor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            autoComplete="off"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="error">{errors.confirm_password}</p>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary my-5">
          Submit
        </button>
      </form>
    </>
  );
}

export default FormikForm;
