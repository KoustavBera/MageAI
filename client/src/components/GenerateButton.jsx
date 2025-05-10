import React, { use, useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const GenerateButton = () => {
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
    <div className="pb-16 text-center ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800  py-6 md:py-16">
        See the magic. Try now
      </h1>
      <button
        className="inline-flex items-center gap-2  sm:text-lg text-black bg-white w-auto mt-8 px-12 py-2.5  rounded-full border-2 border-b-8 border-black p-3 m-auto hover:scale-105 transition-all duration-500"
        onClick={onClickHandler}
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </div>
  );
};

export default GenerateButton;
