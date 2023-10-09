import * as yup from "yup";

export const registerNaturalSchema = yup.object().shape({
	registerNumber: yup.string().matches(/^[0-9]+$/).min(11).max(11).required("Regitser Number is a required field"),
	name: yup.string().required("Name is a required field"),
	birthDate: yup.date().required("Birth date is a riquired field"),
	rg: yup.string().matches(/^[0-9]+$/).min(11).max(11).required('RG is a riquired field'),
	socialName: yup.string().required("Social name is a reuqired field"),
	password: yup.string().required("Password is a required field"),
});

export const registerLegalSchema = yup.object().shape({
	registerNumber: yup.number().min(14).max(14).required("Regitser Number is a required field"),
	// registerNumber: yup.string().matches(/^[0-9]+$/).min(14).max(14).required("Regitser Number is a required field")
	fantasyName: yup.string().required("Fantasy Name is a required field"),
	establishmentDate: yup.date().required("Establishment Date is a riquired field"),
	municipalRegistration: yup.string().matches(/^[0-9]+$/).min(11).max(11).required('Municipal Registration is a riquired field'),
	stateRegistration: yup.string().matches(/^[0-9]+$/).min(9).max(9).required('State Registration is a riquired field'),
	legalNature: yup.string().required("Legal Nature is a required field"),
	password: yup.string().required("Password is a required field"),
})

export const numberInput = yup.object().shape({
	number: yup.number().required("Regitser Number is a required field"),
})
