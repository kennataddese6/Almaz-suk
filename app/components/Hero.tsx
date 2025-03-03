import Image from "next/image"

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center px-16 text-black flex-wrap pt-28 md:pt-0">
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl my-3 text-black font-semibold text-center md:text-start">
          Discover the Finest Products <br /> in Ethiopia
        </h1>
        <p className="text-center md:text-start">
          Discover Ethiopias finest products, handpicked for quality and
          craftsmanship. Elevate your lifestyle with our exclusive selection.
        </p>
        <button className="px-12 py-2 bg-blue-500 my-3 text-white mx-auto block md:mx-0">
          Shop Now
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <Image src={"/bag.jpg"} alt="Hero Image" width={600} height={600} />
      </div>
    </div>
  )
}

export default Hero
