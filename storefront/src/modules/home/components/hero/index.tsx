import { Heading, Button } from "@medusajs/ui"
import Link from "next/link"

const Hero = () => {
  return (
    <div 
      className="h-[75vh] w-full border-b border-gray-300 relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://bucket-production-51be.up.railway.app/assets/farmers-market.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay for readability */}
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-10 gap-6 text-white">
        <span>
          <Heading
            level="h1"
            className="text-4xl leading-tight font-semibold tracking-wide"
          >
            Welcome to Anara Market
          </Heading>
          <Heading
            level="h2"
            className="text-xl font-light max-w-lg"
          >
          Fund Raisers, Fresh produce, handcrafted goods, and local charm—right at your fingertips.
          </Heading>
        </span>
        <Link href="/store" passHref>
          <Button className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-800 transition-all">
            Browse the Market
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
