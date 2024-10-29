import Image from "next/image";
import React from "react";

const Footer = () => {
  const navigation = {
    merkezimiz: [
      { name: "FAQ", href: "#" },
      { name: "Tələbələrin fikirləri", href: "#" },
      { name: "Partnyorlar", href: "#" },
    ],
    temelDersler: [
      { name: "UX/UI dizayn", href: "#" },
      { name: "Qrafik dizayn", href: "#" },
      { name: "Veb dizayn", href: "#" },
    ],
    advancedDersler: [
      { name: "UX/UI dizayn", href: "#" },
    ],
    elaqe: {
      phone: "(+994 55) 710 12 86",
      email: "info@geux.design",
    },
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-40 h-auto">
              <Image
                src="/images/logofooter.png"
                alt="Logo"
                className="w-full h-auto"
                width={200}
                height={130}
              />
            </div>
          </div>

          {/* Merkezimiz */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Merkezimiz</h3>
            <ul className="mt-4 space-y-2">
              {navigation.merkezimiz.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Temel dersler */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Temel dersler</h3>
            <ul className="mt-4 space-y-2">
              {navigation.temelDersler.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Əlaqə vasitələri */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-sm font-semibold text-gray-900">Əlaqə vasitələri</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-500">{navigation.elaqe.phone}</li>
              <li className="text-gray-500">{navigation.elaqe.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2018-2023 GEUX Design Academy. Bütün hüquqlar qorunur.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-end">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Image src={"/images/facebook.svg"} width={28} height={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Image src={"/images/linkedin.svg"} width={28} height={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Image src={"/images/instagram.svg"} width={28} height={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">YouTube</span>
              <Image src={"/images/youtube.svg"} width={28} height={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
