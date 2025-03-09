import React from 'react'
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxios from './useAxios';
import useCart from '../Hooks/useCart';


const ItemCard = ({ card }) => {
  const { name, recipe, image ,price, _id} = card;
  const {user} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();

  const handleAddToCart = (card) =>{
    if(user && user.email){
      console.log(card,user.email);
     //send cart to database 
     const cartItem = {
      menuItem: _id,
      email: user.email,
      name,
      image,
      price
     }
     axiosSecure.post('/carts', cartItem)
     .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your cart.`,
          timer: 1500
        });
      }
      refetch();
     })
     .catch(()=>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Somthing went wrong!!`,
        timer: 1500
      });
     })
    }else{
      Swal.fire({
        title: "You are not logedin!",
        text: "Please login !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}});
        }
      });
    }
  }
  return (
    <div className='bg-slate-50 shadow-md rounded-xl card'>
      <img src={image} alt='' />
      <div className='p-3'>
        <h1 className='my-4 font-bold text-xl'>{name}</h1>
        <p className='my-2 text-gray-500'>{recipe}</p>
        <div>
          <button onClick={()=>handleAddToCart(card)} className='border-0 border-b-4 border-black uppercase btn'>
            add to card
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
