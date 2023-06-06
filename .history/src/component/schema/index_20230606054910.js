import * as Yup from "yup"
export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(20).required("Please Ent")
})