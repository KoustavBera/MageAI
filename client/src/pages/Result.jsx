import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
const Result = () => {
  const [image, setimage] = useState(assets.sample_img_1);
  const [isImageLoaded, setisImageLoaded] = useState(false);
  const [loading, setloading] = useState(false);
  const [input, setinput] = useState("");
  const { generateImage } = useContext(AppContext);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        console.log("image created successfully");
        setisImageLoaded(true);
        setloading(true);
        setimage(image);
      }
    }
    setloading(false);
    setloading(false);
  };
  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      action=""
      className="flex flex-col min-h-[90vh] justify-center items-center"
      onSubmit={onSubmitHandler}
    >
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-2-sm rounded max-w-72" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-pink-500
              transition-all  ${
                loading ? "w-full duration-[10s]" : "w-0 duration-[0s]"
              } `}
          />
        </div>
        {loading && <p>Loading...</p>}
      </div>

      <p>Generate Another</p>
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white rounded-full text-sm p-0.5 mt-10">
          <input
            onChange={(e) => setinput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-text text-md"
          />

          <button
            onClick={onSubmitHandler}
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white  hover:text-white hover:font-bold m-auto"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            onClick={() => {
              setisImageLoaded(false);
            }}
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
