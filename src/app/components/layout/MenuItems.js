import React from "react";

const MenuItems = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/75 transition-all">
      <div className="text-center">
        <img
          src="/pizza.png"
          className="max-h-auto max-h-24 block mx-auto"
          alt="Pizza"
        ></img>
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Sed ut perspiciatis unde omnis iste natus error sit
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to Cart $12
      </button>
    </div>
  );
};

export default MenuItems;
