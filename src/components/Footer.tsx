import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import { BsYoutube , BsLinkedin, BsInstagram ,BsFacebook} from 'react-icons/bs';


const Footer = () => {
  return (
    <Container className="p-10 bg-white text-black  gap-7  duration-200 flex items-center justify-between"><Logo title=""/><div className='flex gap-3'><BsYoutube className='hover:text-red-500 '/><BsLinkedin className='hover:text-blue-500'/><BsFacebook className='hover:text-blue-500'/><BsInstagram className='hover:text-pink-500'/></div> <p className='hover:text-yellow-600'>2024 @ All rights reserved{""} <Link href="https://www.linkedin.com/in/bareerah-khanzada-1b5896227/" className="text-black font-semibold"> @linkedin</Link></p></Container>
  )
}

export default Footer
