import "./styles/storefront.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <div className="top-0 w-full flex justify-center items-center pt-4  z-10">
          <Navbar />
        </div>
        <main className = "main-content">
          {children}</main>
      </div>
  );
}