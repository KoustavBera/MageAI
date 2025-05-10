import React, { useContext } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center text-center my-20"
      >
        <motion.div
          initial={{ opacity: 0.2, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full  border-black border-b-8 border-2"
        >
          <p>Best text to image generator</p>
          <img src={assets.star_icon} alt="" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
          className="text-4xl max-w-[300px] sm:text-7xl sm:test-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
        >
          Turn text to <span className="text-[#ff356e]">image</span>, in seconds
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 2 }}
          className="mt-5 text-center max-w-xl mx-auto"
        >
          Unleash your creativity with AI. Turn your imagination into visual art
          in seconds - just type, and watch the magic
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            default: { duration: 0.5 },
            opacity: { delay: 0.8, duration: 2 },
          }}
          className="sm:text-lg text-black bg-white w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full border-2 border-b-8 border-black p-3"
          onClick={onClickHandler}
        >
          Generate image
          <img src={assets.star_group} alt="" className="h-6" />
        </motion.button>

        <div>
          <div className="flex flex-wrap mt-16 gap-3">
            {Array(6)
              .fill(" ")
              .map((items, index) => (
                <img
                  src={
                    index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1
                  }
                  alt=""
                  key={index}
                  width={70}
                  className="rounded hover:scale-105 transition-all duration-300  cursor-pointer max-sm:w-10"
                />
              ))}
          </div>
          <p className="mt-2 text-neutral-600">Generated images from imagify</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
