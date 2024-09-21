/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";


const MainLayout = ({ children } : any) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 sticky bg-background/60 backdrop-blur-md top-0 left-0 right-0">
          <div className="container flex h-20 items-center shadow-sm justify-between py-6">
            <NavBar  />
          </div>
      </header>
      <Menu/>
      <main className="flex-1 pt-20 flex flex-col">{children}</main>
      <Footer/>
    </div>
  );
};
export default MainLayout;
