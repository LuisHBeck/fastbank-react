/* eslint-disable @next/next/no-img-element */
// import axios from 'axios';
import { useCallback, useState } from "react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";

import Input from "@/components/Input";

const Auth = () => {
	const router = useRouter();

	const [registerNumber, setRegisterNumber] = useState("");
	const [password, setPassword] = useState("");

	const [name, setName] = useState("");
	const [bithDate, setBirthDate] = useState("");
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

	// const login = useCallback(async () => {
	//   try {
	//     await signIn('credentials', {
	//       email,
	//       password,
	//       redirect: false,
	//       callbackUrl: '/'
	//     });

	//     router.push('/profiles');
	//   } catch (error) {
	//     console.log(error);
	//   }
	// }, [email, password, router]);

	// const register = useCallback(async () => {
	//   try {
	//     await axios.post('/api/register', {
	//       email,
	//       name,
	//       password
	//     });

	//     login();
	//   } catch (error) {
	//       console.log(error);
	//   }
	// }, [email, name, password, login]);

	return (
		<div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<nav className="px-12 py-5">
					<img src="/images/logo.png" className="h-12" alt="Logo" />
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
								onChange={(e: any) => setRegisterNumber(e.target.value)}
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
										type="text"
										label="Birth aa/mm/dd"
										value={bithDate}
										onChange={(e: any) => setBirthDate(e.target.value)}
									/>
									<Input
										id="rg"
										type="text"
										label="RG"
										value={rg}
										onChange={(e: any) => setRg(e.target.value)}
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
										onChange={(e: any) =>
											setMunicipalRegistration(e.target.value)
										}
									/>
									<Input
										id="stateRegistration"
										type="text"
										label="State Registration"
										value={stateRegistration}
										onChange={(e: any) => setStateRegistration(e.target.value)}
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
							onClick={() => {}}
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
