import React, { useContext } from 'react'
import {ShopContext}from "../context/ShopContext"
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency}=useContext(ShopContext)


  return (
    <Link
      className="text-gray-700 cursor-pointer flex flex-col h-full"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-in-out"
          alt={name}
        />
      </div>
 
      {/* min-h reserves 2 lines so every price lands on the same line */}
      <p className="pt-3 pb-1 text-sm line-clamp-2 min-h-[2.5rem]" title={name}>
        {name}
      </p>
 
      <p className="mt-auto text-l font-medium text-gray-900">
        {price}
        <span className="text-sm font-normal text-gray-500 ml-1">
          {currency}
        </span>
      </p>
    </Link>
  );
};

export default ProductItem