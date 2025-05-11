import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [state, setstate] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        setLoading(false);
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          console.log("error in data.success. Problem in backend");
          setLoading(false);
          toast.error(data.message);
        }
      } else {
        console.log("Making request to:", backendUrl + "/api/user/register");
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          setLoading(false);

          console.log("error in backend", data.message);
        }
      }
    } catch (error) {
      console.log("error", error.message);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center max-h-dvh">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        action=""
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium ">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        <div className="flex items-center justify-center flex-col">
          {state !== "Login" && (
            <div className="border px-6  flex items-center gap-2 rounded-full mt-5">
              <img src={assets.profile_icon} alt="" width={35} />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter full name"
                required
                className="outline-none text-sm"
              />
            </div>
          )}
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.email_icon} alt="" width={19} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email id"
              required
              className="outline-none text-sm"
            />
          </div>
          <div className="border px-6  flex items-center gap-2 rounded-full py-2 mt-5">
            <img src={assets.lock_icon} alt="" width={15} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter Password"
              required
              className="outline-none text-sm"
            />
          </div>
          <p
            className="text-sm text-blue-600 my-6 cursor-pointer relative right-16 
										"
          >
            Forgot Password?
          </p>

          <button className="bg-blue-600 w-full text-white py-2 rounded-full ">
            {state === "Login" ? "login" : "create"}
            {loading && (
              <ClipLoader color="#ffff" size={20} className="ml-2 mt-1" />
            )}
            <span></span>
          </button>

          {state !== "Login" ? (
            <div>
              <p className="mt-5 text-center">
                Already have an account?
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setstate("Login")}
                >
                  {" "}
                  Login
                </span>
              </p>
              <img
                src={assets.cross_icon}
                alt=""
                className="absolute top-5 right-5 cursor-pointer"
              />
            </div>
          ) : (
            <div>
              <p className="mt-5 text-center">
                Don't have an account?
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setstate("Signup")}
                >
                  {" "}
                  Sign up
                </span>
              </p>
              <img
                onClick={() => setShowLogin(false)}
                src={assets.cross_icon}
                alt=""
                className="absolute top-5 right-5 cursor-pointer"
              />
            </div>
          )}
        </div>
      </motion.form>
    </div>
  );
};

export default Login;
