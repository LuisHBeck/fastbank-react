import Image from "next/image";

import Logo from "@/assets/logo.svg";
import IconUser from "@/assets/icon-user.svg"

import { MenuItem } from "./MenuItem";
import { Search } from "./Search";

export function Header() {
	return (
		<header className="relative flex items-center w-full h-20 bg-primary-orange">

      <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>

			<div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
				<div className="flex flex-1 items-center justify-between">
					<div className="flex items-center gap-14">
						<Image src={Logo} alt="Logo" />
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
        <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10">
          <Image src={IconUser} alt="userIcon"/>
          <span className="text-white font-bold"> Account access </span>
        </button>
			</div>
      
		</header>
	);
}