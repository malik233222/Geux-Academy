import Image from "next/image";
import logo from "../../public/images/logo.svg";
const Navbar = () => {
  return (
    <header className="bg-blue-custom ">
      <div className="max-w-7xl mx-auto h-20 text-white flex justify-between items-center">
        <div className="logo w-1/3">
          <Image  src={logo} alt="GEUX Design Academy Logo  " 
          width={180}
          height={24} />
        </div>
        <div className="nav-links font-normal flex justify-between w-1/3">
          <span>Təhsil sahələri</span>
          <span> Haqqımızda</span>
          <span> Əlaqə</span>
        </div>
        <div className="join-clases-wrapper flex justify-end gap-40 w-1/3">
          <button className="font-bold">AZE</button>
          <div className="bg-yellow-custom rounded-md ">
            <button
              type="button"
              className="rounded-md  text-black px-3 py-2  font-medium shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             Dərslərə yazıl
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
