import Image from "next/image"

import IconSearch from "@/assets/icon-search.svg"

export function Search() {
  return (
    <div className="flex items-center gap-4">
      <Image src={IconSearch} alt="search"/>
      <input type="text" className="bg-transparent outline-none pr-5 text-white placeholder:txt-white" placeholder="Search"/>
    </div>
  )
}