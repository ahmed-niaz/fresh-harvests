import { Dialog, DialogPanel } from "@headlessui/react";

import { useState } from "react";
import "./login.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Register from "../register/Register";
import useAuth from "../../hooks/getAuth";
import { useForm } from "react-hook-form";


const Login = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate(from);
    } catch (err) {
      console.log(err.message);
    }
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={open} className="">
        Sign in
      </button>
      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel transition>
              <div className="card bg-base-100 w-[478px] max-w-sm shrink-0 shadow-2xl rounded-none">
                <h2 className="font-rubik text-center text-3xl font-semibold mt-12">
                  Login
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-pink-700 text-sm ">email required</span>
              )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <span className="text-pink-700 text-sm ">
                  Password required
                </span>
              )}
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="label flex gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="appearance-none h-5 w-5 border-2 border-[#FF6A1A] rounded checked:bg-[#FF6A1A] checked:border-white checked:text-[#FF6A1A] "
                      />
                      <a href="#" className="label-text-alt link link-hover">
                        Remember me
                      </a>
                    </label>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <button className="bg-[#FF6A1A] text-white py-2 rounded-md">
                    Login
                  </button>
                  <div className="divider">or</div>
                  <div className="flex items-center justify-center">
                    <h2>
                      Don`t have an account?{" "}
                      <NavLink to='/' className="text-[#FF6A1A]">
                        <Register/>
                      </NavLink>
                    </h2>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Login;
