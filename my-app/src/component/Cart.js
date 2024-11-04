import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletecart } from './redux/Cartsytem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); 
  const dispatch = useDispatch();
    const addquantity=()=>{
        
    }
    const deletequantity=()=>{

    }
  const handleDelete = (itemId) => {
    dispatch(deletecart({ _id: itemId })); 
  };

  // const totalPrice = cartItems
  //   .filter(item => typeof item.price === 'number')
  //   .reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total price with quantity
  
  return (
    <div className="flex flex-col items-center p-8 bg-[#F9F9F9] min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 m-10">Shopping Cart</h1>
      <p className="text-gray-600 mb-8 text-lg">
        Total items: <span className="font-bold">{cartItems.length}</span><br/>
        {/* Total price: <span className="font-bold">${totalPrice.toFixed(2)}</span> */}
      </p>
  
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-1">Price: <span className="font-medium">${item.price}</span></p>
              <p className="text-gray-700 mb-1">Quantity: <span className="font-medium">{item.quantity}</span></p>
              <p className="text-gray-700 mb-1">Category: <span className="font-medium">{item.category}</span></p>
              <p className="text-gray-700 mb-4">Company: <span className="font-medium">{item.company}</span></p>
              
<div className='flex mb-2'>
<button className='bg-[#C3AA80] hover:bg-[#ebe9e4] text-white font-semibold w-20 mr-5 rounded' onClick={()=>addquantity(item.quantity++)}>+</button>
              <h1>    Quantity:-{item.quantity}</h1>
              <button className='bg-[#C3AA80] hover:bg-[#ebe9e4] text-white font-semibold w-20 ml-5 rounded' onClick={()=>deletequantity(item.quantity--)}>-</button>
             
  </div>
  <button
                className="w-full bg-[#C3AA80] hover:bg-[#ebe9e4] text-white font-semibold py-2 rounded focus:outline-none transition-colors duration-150 ease-in-out"
                onClick={() => handleDelete(item._id)} // Pass item._id here
              >
                Delete from Cart
              </button>
   </div>
  
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;