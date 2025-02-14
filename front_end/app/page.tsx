import { Button } from "@/components/ui/button";
import { NavigationBar } from "./components/NavigationBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="fixed top-0 w-full flex justify-center items-center pt-4 bg-white z-10">
      <NavigationBar />
    </div>
    <div className="w-7/12 mx-auto pt-40 flex flex-col justify-center text-center">
        <h1 className="text-4xl font-bold">Take Selling To The Next Level</h1>
        <div style={{ height: "15px" }}></div>
        <p className="text-lg">
        BlackMarket is a marketplace platform that's designed to connect buyers and sellers of physical and digital products. As a seller, you can easily create a store and list your products for sale. As a buyer, you can easily browse, search, purchase, and download products from various sellers. The intuitive Seller Dashboard allows sellers to manage their products, orders, and store settings.
        </p>
        <div style={{ height: "15px" }}></div>
        <div className="flex flex-row justify-center items-center gap-6">
          <Link href="/details">
            <Button>Learn More</Button>
          </Link>
          <Link href="/docs">
            <Button>Get Started &rarr;</Button>
          </Link>
          
        </div>
      </div>
      {/* Image */}
    </>
  );
}
