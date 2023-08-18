import { Password } from "@mui/icons-material";
import * as Yup from "yup";
export const signUpSchema = Yup.object({
  name: Yup.string().min(5).max(20).required("Name Is required"),
  email: Yup.string().email().required("Enter A Valid Email Address"),
  password: Yup.string().min(6).required("Enter Password"),
  confirm_password: Yup.string()
    .required("Confirm your Password")
    .oneOf([Yup.ref("password"), null], "Password Must Match"),
});
