import React ,{useState} from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import assets from "../assets/assets";

const PlaceOrder = () => {

const [method ,setMethod]=useState("cod") // cash on delivery 

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/** Left Side  */}
      <div  className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name" 
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Commune"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        
        <input type="number" placeholder="Phone Number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />

      </div>

      {/** Right Side  */}
      <div className="mt-8 min-w-80">
        <div className="">
          <CartTotal/>

        </div>
              {/** Payment Methods  */}

       <div className="mt-12 text-gray-300">
  <Title text1={"Payment"} text2={"Method"} />

  <div className="flex gap-3 flex-col lg:flex-row">
    {/* Stripe */}
    <div
      onClick={() => setMethod("stripe")}
      className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
    >
      <p
        className={`min-w-3.5 h-3.5 border rounded-full ${
          method === "stripe" ? "bg-green-400" : ""
        }`}
      ></p>
      <img src={assets.stripe_logo} alt="Stripe" className="h-5 mx-4" />
    </div>

    {/* Razorpay */}
    <div
      onClick={() => setMethod("razorpay")}
      className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
    >
      <p
        className={`min-w-3.5 h-3.5 border rounded-full ${
          method === "razorpay" ? "bg-green-400" : ""
        }`}
      ></p>
      <img src={assets.razorpay_logo} alt="Razorpay" className="h-5 mx-4" />
    </div>

    {/* Cash on delivery */}
    <div
      onClick={() => setMethod("cod")}
      className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
    >
      <p
        className={`min-w-3.5 h-3.5 border rounded-full ${
          method === "cod" ? "bg-green-400" : ""
        }`}
      ></p>
      <p className="text-gray-500 text-sm font-medium mx-4">
        CASH ON DELIVERY
      </p>
    </div>
  </div>
</div>
        </div>

      </div>
   
  );
};

export default PlaceOrder;
