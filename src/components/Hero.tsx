import Image from "next/image"
import banner from "@/images/main3.jpeg"

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative bg-black">
      <Image  src={banner} alt={"banner img"} className="w-full max-h-screen object-contain"/>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center items-center text-center">
  <h2 className="text-7xl text-yellow-600 lg:text-[150px] font-bold">
    Life Hacks
  </h2>
  <p className="text-xl md:text-2xl lg:text-5xl font-semibold text-yellow-600">
    Life, Health, Technology, Traveling, Nature
  </p>
</div>
 </div>
  )
}

export default Hero
