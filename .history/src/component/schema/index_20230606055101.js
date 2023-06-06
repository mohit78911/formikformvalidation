import * as Yup from "yup"
export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(20).required("Please Enter Valid Name"),
    email : Yup.string().email().required("Please Enter Valid Email"),
    password :Yup.string().min(6).required("Enter Valid Password"),
    confirm_password : Yup.string().required().oneOf([yup.ref("password"),null],"Password Must Match")
})