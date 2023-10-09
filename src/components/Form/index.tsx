/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import { useCallback, useState} from "react";
import { NextPageContext } from "next";
import { useRouter} from "next/router";


import Input from "@/components/Input";

export const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:8056/api/v1/",
});

const Auth = () => {
	const router = useRouter();

	const [registerNumber, setRegisterNumber] = useState("");
	const [password, setPassword] = useState("");

	const [name, setName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [rg, setRg] = useState("");
	const [socialName, setSocialName] = useState("");

	const [fantasyName, setFantasyName] = useState("");
	const [establishmentDate, setEstablishmentDate] = useState("");
	const [municipalRegistration, setMunicipalRegistration] = useState("");
	const [stateRegistration, setStateRegistration] = useState("");
	const [legalNature, setLegalNature] = useState("");

	const [variant, setVariant] = useState("natural");

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant === "natural" ? "legal" : "natural"
		);
	}, []);


	const registerAccount = useCallback(async () => {
		
		try {
			const createUser = await axiosInstance.post("auth/users/", {
				register_number: registerNumber,
				picture: "a",
				password: password,
			});
			console.log(createUser.status);
			if (createUser.status === 201) {
				const userToken = await axiosInstance.post("auth/jwt/create/", {
					register_number: registerNumber,
					password: password,
				});
				console.log(userToken.data.access);
				if (variant === "natural") {
					console.log(birthDate)
					const createNatural = await axiosInstance.post(
						"natural-people/",
						{
							user: registerNumber,
							name: name,
							birth_date: birthDate,
							cpf: registerNumber,
							rg: rg,
							social_name: socialName
						},
						{
							headers: {
								Authorization: `Bearer ${userToken.data.access}`,
							},
						}
					);
					console.log(createNatural.status);
				}
				if (variant === "legal") {
					const createLegal = await axiosInstance.post("legal-people/",
						{
							user: registerNumber,
							fantasy_name: fantasyName,
							establishment_date: establishmentDate,
							cnpj: registerNumber,
							municipal_registration: municipalRegistration,
							state_registration: stateRegistration,
							legal_nature: legalNature,
						},
						{
							headers: {
								Authorization: `Bearer ${userToken.data.access}`,
							},
						}
					);
				}
			}
		} catch (error) {
			console.log(error);
		}
	}, [registerNumber, password, variant, name, birthDate, rg, socialName, fantasyName, establishmentDate, municipalRegistration, stateRegistration, legalNature]);

	return (
		<div className="relative h-full w-full bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<nav className="px-12 py-5">
					{/* <img src="/images/logo.png" className="h-12" alt="Logo" /> */}
				</nav>
				<div className="flex justify-center">
					<div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
						<h2 className="text-white text-4xl mb-8 font-semibold">
							{variant === "natural" ? "Natural Account" : "Legal Account"}
						</h2>
						<div className="flex flex-col gap-4">
							<Input
								id="registerNumber"
								type="text"
								label="Register Number"
								value={registerNumber}
								onChange={(e: any) => {if(/^\d+$/.test(e.target.value)){setRegisterNumber(e.target.value)}}}
								maxLength={14}
							/>
							
							<Input
								type="password"
								id="password"
								label="Password"
								value={password}
								onChange={(e: any) => setPassword(e.target.value)}
							/>
							{variant === "natural" && (
								<>
									<Input
										id="name"
										type="text"
										label="Full Name"
										value={name}
										onChange={(e: any) => setName(e.target.value)}
									/>
									<Input
										id="birth"
										type="date"
										label="Birth date"
										value={birthDate}
										onChange={(e: any) => setBirthDate(e.target.value)}
									/>
									<Input
										id="rg"
										type="text"
										label="RG"
										value={rg}
										onChange={(e: any) => {if(/^\d+$/.test(e.target.value)){setRg(e.target.value)}}}
										maxLength={9}
									/>
									<Input
										id="socialName"
										type="text"
										label="Social Name"
										value={socialName}
										onChange={(e: any) => setSocialName(e.target.value)}
									/>
								</>
							)}
							{variant === "legal" && (
								<>
									<Input
										id="fantasyName"
										type="text"
										label="Fantasy Name"
										value={fantasyName}
										onChange={(e: any) => setFantasyName(e.target.value)}
									/>
									<Input
										id="establishmenteDate"
										type="text"
										label="Establishment Date"
										value={establishmentDate}
										onChange={(e: any) => setEstablishmentDate(e.target.value)}
									/>
									<Input
										id="mucicipalRegistration"
										type="text"
										label="Municipal Registration"
										value={municipalRegistration}
										onChange={(e: any) => {if(/^\d+$/.test(e.target.value)){setMunicipalRegistration(e.target.value)}}}
										maxLength={11}
									/>
									<Input
										id="stateRegistration"
										type="text"
										label="State Registration"
										value={stateRegistration}
										onChange={(e: any) => {if(/^\d+$/.test(e.target.value)){setMunicipalRegistration(e.target.value)}}}
									/>
									<Input
										id="legalNature"
										type="text"
										label="Legal Nature"
										value={legalNature}
										onChange={(e: any) => setLegalNature(e.target.value)}
									/>
								</>
							)}
						</div>
						<button
							onClick={registerAccount}
							className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
						>
							Register
						</button>
						<p className="text-neutral-500 mt-12">
							{variant === "natural"
								? "You are a Legal Person?"
								: "You are a Natural Person?"}
							<span
								onClick={toggleVariant}
								className="text-white ml-1 hover:underline cursor-pointer"
							>
								{variant === "natural" ? "Legal account" : "Natural Account"}
							</span>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
