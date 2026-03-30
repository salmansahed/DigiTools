import React, { useState } from "react";
import { toast } from "react-toastify";

const Product = ({ product, setCartItem, cartItem }) => {
  const [productBtn, setProductBtn] = useState("Buy Now");
  const handleProductBtn = () => {
    const isExist = cartItem.find((item) => item.id === product.id);
      if(isExist){
          return toast.error("Already added!");
        }else{
        setProductBtn("Added to Cart");
        setCartItem([...cartItem, product]);
        toast.success("Added to Cart");
    }
  };

  return (
    <div className="border-2 border-black/30 p-6 rounded-lg space-y-4 flex flex-col">
      <div className="border w-16 h-16 flex items-center justify-center rounded-full border-black/30">
        <img className="w-10" src={product.icon} alt="" />
      </div>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-[#627382]">{product.description}</p>
      <h2 className="text-[#627382]">
        <span className="text-black text-2xl font-bold">${product.price}</span>
        {product.billing}
      </h2>
      <div className="space-y-2">
        {product.features.map((feature, index) => (
          <li key={index} className="list-none text-[#627382]">
            <i className="fa-solid fa-check text-green-500"></i> {feature}
          </li>
        ))}
      </div>
      <button
        onClick={handleProductBtn}
        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full text-white mt-auto border-none"
      >
        {productBtn}
      </button>
    </div>
  );
};

export default Product;
