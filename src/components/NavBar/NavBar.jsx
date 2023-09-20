import { useState } from "react";
import Link from "../Link/Link";
import { BsMenuUp, BsDoorClosedFill } from "react-icons/bs";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", id: "home", name: "Home" },
    { path: "/about", id: "about", name: "About" },
    { path: "/contact", id: "contact", name: "Contact" },
    { path: "/products/:id", id: "productDetail", name: "Product Detail" },
    { path: "*", id: "notFound", name: "Not Found" },
  ];

  return (
    <nav className="text-black bg-orange-300 p-6">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <BsDoorClosedFill></BsDoorClosedFill>
        ) : (
          <BsMenuUp></BsMenuUp>
        )}
      </div>
      <ul
        className={`md:flex duration-1000  absolute md:static bg-orange-300 px-6 
       ${open ? "top-16" : "-top-60"}`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
