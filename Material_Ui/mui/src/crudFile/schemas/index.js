import * as Yup from "yup";
export const CreateUserSchema = Yup.object({
  name: Yup.string().min(5).max(35).required("Enter Your Name"),
  email: Yup.string().email().required("Enter A valid Email"),
  phone: Yup.string().required("Phone is Required"),
});
