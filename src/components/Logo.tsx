import Link from "next/link";

interface Props{
title?:string;
className?:string;
}

const Logo = ({title,className}:Props) => {
  return (
   <Link href="/"> <div>
    <h2 className={`text-3xl font-extrabold uppercase ${className}`}>{title ||'Blog-site'}</h2>  
    </div></Link>
  )
}

export default Logo
