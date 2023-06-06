import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name : yup.string().min(2).max(20).required("Please Enter valid Name"),
    email : Yup.string().email().required("Please enter Valid Email"),
    password : Yup.string().min(6).required
})