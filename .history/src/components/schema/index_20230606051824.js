import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name : yup.string().min(2).max(20).required("Please Enter valid Name"),
    email : Y
})