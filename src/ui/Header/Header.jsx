import { useLocation } from "react-router";
// import { newData } from "../../data/newData";
import User from "../../features/Authentication/User";
// import supabase from "../../services/supabase";
import { Logo } from "../../ui";
import DownloadTextFile from "../../utils/DownloadTextFile";
import DesktopNav from "./DeskTopNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname.startsWith(path)
      ? "text-blue-600 font-medium"
      : "text-gray-700 hover:text-blue-600";
  }
  // async function upload() {
  //   const { error } = await supabase.from("trains").insert("*");
  //   if (error) {
  //     console.log(error);
  //   }
  // const x = newData.map((item) => item.trainFrom);
  // const y = newData.map((item) => item.trainTo);
  // const set = [...new Set(x), ...new Set(y)];
  // const xx = set.map((item) => {
  //   return { name: item };
  // });
  // await supabase.from("stations").insert(xx);
  // }

  return (
    <header
      className={`sticky top-0 z-9999 w-full bg-white/80 shadow-md backdrop-blur-2xl transition-all duration-300`}
    >
      <div className="mx-auto px-6">
        {/* <DownloadTextFile /> */}

        {/* <button
          onClick={() => {
            upload();
          }}
          className="cursor-pointer bg-red-600 p-4"
        >
          click
        </button> */}
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopNav isActive={isActive} />
          <User />
        </div>

        <MobileMenu isActive={isActive} />
      </div>
    </header>
  );
}
