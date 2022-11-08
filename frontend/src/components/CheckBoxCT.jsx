import React from "react";

const CheckBoxCT = ({ name }) => {
  return (
    <div className="flex items-center mx-2 my-2">
      <input
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded hover:cursor-pointer"
        type="checkbox"
        name=""
        id="aic-con"
      />
      <label className="text-center text-base ml-2 text-black" htmlFor="air-con">
        {name}
      </label>
    </div>
  );
};

export default CheckBoxCT;
