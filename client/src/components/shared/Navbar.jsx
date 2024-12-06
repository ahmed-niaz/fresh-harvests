import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/Logo.png";
import heart from "../../assets/icons/heart.png";
import cart from "../../assets/icons/cart.png";
import fresh_harvests from "../../assets/logo/fresh-harvests.png";
import Login from "./../../pages/login/Login";
import useAuth from "../../hooks/getAuth";
import DropdownMenu from "./DropdownMenu";
const Navbar = () => {
  const { user } = useAuth();
  const id = '6752cb4f4076fb9fade88fc0'
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-questrial border-b-4 border-[#749B3F] rounded-none"
              : "font-questrial text-sm"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "font-questrial border-b-4 border-[#749B3F] rounded-none"
              : "font-questrial text-sm rounded-none"
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "font-questrial border-b-4 border-[#749B3F] rounded-none"
              : "font-questrial text-sm rounded-none"
          }
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/blog/${id}`}
          className={({ isActive }) =>
            isActive
              ? "font-questrial border-b-4 border-[#749B3F] rounded-none"
              : "font-questrial text-sm rounded-none"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <main className=" z-40 container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="flex items-center">
            <img src={logo} alt={logo} />
            <img
              className="w-[174px] h-[18px]"
              src={fresh_harvests}
              alt={fresh_harvests}
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/favorites" className="lg:flex hidden  border-none">
                <img src={heart} alt={heart} />
                <p>Favorites</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="lg:flex hidden  border-none">
                <img src={cart} alt={cart} />
                <p>Cart</p>
              </NavLink>
            </li>
            {user ? (
              <DropdownMenu />
            ) : (
              
                <li>
                  <NavLink
                    to="/"
                    className="lg:flex border-2 border-[#212337] rounded-md"
                  >
                    <Login />
                  </NavLink>
                </li>
              
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
