import { NavigationBar } from "../../components/NavigationBar";

export default function Home() {
  return (
    <>
    <div className="fixed top-0 w-full flex justify-center items-center pt-4 bg-white z-10">
      <NavigationBar />
    </div>
    <div className="w-7/12 mx-auto pt-40 flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Seller-Info</h1>
        <div style={{ height: "15px" }}></div>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>
    </>
  );
}