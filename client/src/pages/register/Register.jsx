import { Dialog, DialogPanel } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Login from "../login/Login";
import useAuth from "./../../hooks/getAuth";
import toast from "react-hot-toast";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { updateUserProfile, createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    const formData = { name, email, password };
    console.log(formData);

    try {
      await createUser(email, password);
      await updateUserProfile(name);
      toast.success("login successful");
      navigate(from)
    } catch (error) {
      console.log(error);
    }
  };
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
                  Register
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="name"
                      placeholder="Enter your name"
                      className="input input-bordered"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name && (
                      <span className="text-red-700 text-sm ">
                        name must be added
                      </span>
                    )}
                  </div>
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
                      <span className="text-red-700 text-sm ">
                        email required
                      </span>
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
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must have at least 8 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="text-red-700 text-sm ">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  <button className="bg-[#FF6A1A] text-white py-2 rounded-md mt-4">
                    Register
                  </button>
                  <div className="divider">or</div>
                  <div className="flex items-center justify-center">
                    <h2>
                      Already have an account{" "}
                      <NavLink to="/" className="text-[#FF6A1A]">
                        <Login />
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

export default Register;
