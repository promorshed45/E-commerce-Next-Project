/* eslint-disable @typescript-eslint/no-explicit-any */
import SideBar from "./_components/SideBar";


const MainLayout = ({ children } : any) => {
  return (
    <div className="w-full h-screen flex items-start justify-start">
      <SideBar />
      <div className="w-full h-full flex-col flex px-3 bg-gray-100 dark:bg-transparent ">
        <div className="h-20 bg-green-400">
              <p>header</p>
        </div>
        <div className="h-full overflow-auto smoothBar ">
          {/* {user.role === 'admin' ? <AdminOverview /> : <UserOverview />} */}
          {children}
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
