import Image from "next/image"

const Hero = () => {
  return (
    <div className=" w-full h-screen flex items-center px-16 text-black">
      <div>
        <h1 className="text-5xl my-3 text-black font-semibold">
          Discover the Finest Products <br /> in Ethiopia
        </h1>
        <p>
          We are very reliable buisness service the most up to data products to
          our customers with the <br />
          greatest time etc
        </p>
        <button className="px-12 py-2 bg-blue-500 my-3 text-white">
          Shop Now
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image src={"/bag.jpg"} alt="Hero Image" width={600} height={600} />
      </div>
    </div>
  )
}

export default Hero
