import * as yup from "yup";

export const registerSchema = yup.object().shape({
	name: yup.string().required("Name is a required field"),
	registerNumber: yup.string().required("Register Number is a required field"),
	password: yup.string().required("Password is a required field"),
});
