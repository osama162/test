import { Link, Navigate, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { CreateUserSchema } from "./schemas";
import axios from "axios";
const initialValues = {
  name: "",
  email: "",
  phone: "",
  status: "pending",
};
export default function Create() {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: CreateUserSchema,
      onSubmit: (values, action) => {
        axios
          .post("http://localhost:3000/users", {
            name: values.name,
            email: values.email,
            phone: values.phone,
            status: values.status,
          })
          .then((resp) => {
            // console.log(resp);
            console.log(values);
            alert("Data Saved SuccesFully");
            navigate("/");
          })
          .then((err) => {
            // console.log(err);
          });
        action.resetForm();
      },
    });
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formik.values);
  // };
  return (
    <div className="card mx-atuo w-70">
      <div className="card-title">
        <h2 className="text-center">Create Operation</h2>
      </div>
      <div className="card-body">
        <form className="form w-50 mx-auto" onSubmit={handleSubmit}>
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
            <label htmlfor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Enter Phone Number"
              autoComplete="off"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (
              <p className="error">{errors.phone}</p>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary my-5">
            Save
          </button>
          <Link to="/" className="ml-2">
            <button className="btn btn-info">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
