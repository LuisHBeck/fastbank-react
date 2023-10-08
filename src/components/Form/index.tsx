import Input from "@/components/Input";
import { registerSchema } from "@/schema/register";
import { useFormik } from "formik";
import Button from "../Button";

import { useState } from "react";

export default function Form() {
	const [showErrors, setShowErrors] = useState(false);

	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			name: "",
			registerNumber: "",
			password: "",
		},
		validationSchema: registerSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setShowErrors(true);
		handleSubmit(e);
	};

	return (
		<form onSubmit={onSubmit} className="p-5 rounded-sm shadow-xl bg-slate-800 w-2/3">
			<h1 className="text-center text-zinc-100 text-lg mb-5">
				{" "}
				User registry{" "}
			</h1>
			<div className="flex flex-col gap-6">
				<Input
					name="name"
					label="Name"
					value={values.name}
					onChange={handleChange}
					error={showErrors ? errors.name : ""}
				/>
				<Input
					name="resgiterNumber"
					label="ResgisterNumber"
					value={values.registerNumber}
					onChange={handleChange}
					error={showErrors ? errors.registerNumber : ""}
				/>
				<Input
          type="password"
					name="password"
					label="Password"
					value={values.password}
					onChange={handleChange}
					error={showErrors ? errors.password : ""}
				/>
				<Button type="submit"> Send </Button>
			</div>
		</form>
	);
}
