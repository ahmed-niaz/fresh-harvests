import logo from "../../assets/logo/Logo.png";
import fresh from "../../assets/logo/fresh-harvests.png";
import app_store from "../../assets/icons/appstore.png";
import google_store from "../../assets/icons/googleplay.png";
import call from "../../assets/icons/call.png";
import mail from "../../assets/icons/mainl.png";
import location from "../../assets/icons/location.png";
import visa from "../../assets/icons/visa.jpg";
import paypal from "../../assets/icons/paypal.png";
import pay from "../../assets/icons/pay.png";
import social from "../../assets/icons/Social.png";
const Footer = () => {
  return (
    <main className=" mt-[150px] bg-[#F4F6F6]">
      <footer className="footer text-base-content p-10 container mx-auto font-rubik">
        <aside className="flex flex-col gap-16">
          <div className="flex items-center justify-center">
            <img src={logo} alt={logo} />
            <img src={fresh} alt={fresh} />
          </div>
          <div>
            <h2 className="font-questrial">Download App</h2>
            <div className="flex gap-4 sm:z-10">
              <img src={app_store} alt={app_store} />
              <img src={google_store} alt={google_store} />
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="text-[#212337] font-bold">Quicklinks 1</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Detail Blog</a>
        </nav>
        <nav>
          <h6 className="text-[#212337] font-bold">Quicklinks 2</h6>
          <a className="link link-hover">Favourites</a>
          <a className="link link-hover">Cart</a>
          <a className="link link-hover">Sign in</a>
          <a className="link link-hover">Register</a>
        </nav>
        <nav>
          <h6 className="text-[#212337] font-bold">Contact us</h6>
          <a className="link link-hover flex">
            <img src={call} alt={call} />
            <p>1234 5678 90</p>
          </a>
          <a className="link link-hover flex">
            <img src={mail} alt={mail} />
            <p>freshharvests@gmail.com</p>
          </a>
          <a className="link link-hover flex">
            <img src={location} alt={location} />
            <p>Tanjung Sari Street, Pontianak, Indonesia</p>
          </a>

          <p className="font-bold text-[#212337] mt-6">
            Accepted Payment Methods:
          </p>
          <div className="flex gap-4">
            <img src={visa} alt={visa} />
            <img src={paypal} alt={paypal} />
            <img src={pay} alt={pay} />
          </div>
        </nav>
      </footer>
      <div className="w-full border-2 border-b-2 container mx-auto"></div>
      <div className="flex justify-between container mx-auto mt-4 pb-4">
        <p className="rubik">
          © Copyright 2024, All Rights Reserved by Banana Studio
        </p>
        <div>
          <img src={social} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Footer;
