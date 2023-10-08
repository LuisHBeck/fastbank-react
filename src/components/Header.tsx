"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation'

import Logo from "@/assets/becks-logo.png";
import IconUser from "@/assets/icon-user.svg"

import { MenuItem } from "./MenuItem";
import { Search } from "./Search";

export function Header() {
	const router = useRouter();
	return (
		<header className="relative flex items-center w-full h-20 bg-primary-orange">

      <div className="absolute top-0 right-0 bg-primary-purple w-[19%] h-full z-0"></div>

			<div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
				<div className="flex flex-1 items-center justify-between">
					<div className="flex items-center gap-14">
						<Image src={Logo} alt="Logo" className="w-12 h-12"/>
						<ul className="flex items-center gap-12">
							<li>
								<MenuItem name="For You" />
							</li>
							<li>
								<MenuItem name="For Companies" />
							</li>
							<li>
								<MenuItem name="Services" />
							</li>
							<li>
								<MenuItem name="Help" />
							</li>
						</ul>
					</div>
          <Search />
				</div>
        <button onClick={() => router.push('/register')} className="flex items-center gap-4 bg-primary-purple h-20 pl-10 z-10">
          <Image src={IconUser} alt="userIcon"/>
          <span className="text-white font-bold"> Account Register </span>
        </button>
			</div>
      
		</header>
	);
}
