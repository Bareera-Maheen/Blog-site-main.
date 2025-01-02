import Logo from "./Logo";
import Link from "next/link";
//import { FiMenu } from "react-icons/fi";
import  MobileNav from "@/components/MobileNav"

const Navbar = () => {

    const navigation=[
        {title:"Home" ,href:"/"},
        {title:"contact" ,href:"/contact"},
        {title:" About me" , href:"/about"},
        
    ];
  return (
    <main className="w-full bg-black   h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors  z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full"><Logo title="Blog-site"  className="text-white  hover:text-yellow-600"/> <div className="text-white hidden md:inline-flex  items-center gap-7  hover:text-yellow-600 duration-200">
        {navigation.map((items)=>
        ( <Link key={items?.title } href={items?.href} className="text-sm uppercase font-semibold relative group overflow-hidden">{items.title} <span className="w-full h-[1px] bg-yellow-600 absolute inline-block left-0 bottom-0 -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-200"></span> </Link>

        ))}
      </div>
      <div className="md:hidden text-white">
        {/* <FiMenu className="text-2xl text-white" /> */}
        <MobileNav/>
        
        </div></div>
      
    </main>
  )
}

export default Navbar
