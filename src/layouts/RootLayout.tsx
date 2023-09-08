import { Link, Outlet, useLocation } from "react-router-dom";

export const RootLayout = () => {
  return (
    <main className="relative">
      <div className="relative mt-28 flex items-center justify-center">
        {useLocation().pathname !== "/" && (
          <Link to={"/"} className="absolute left-36 top-1/2 block my-30 mx-auto w-[25px] h-[25px] border-t-2 border-l-2 border-red-edc rotate-[-45deg]">
          </Link>
        )}
        <Link to={"/"} className="flex w-1/2 items-center justify-center">
          <img src="/edc_logo.png" className="object-cover" />
        </Link>
      </div>
      <Outlet />
    </main>
  );
};
