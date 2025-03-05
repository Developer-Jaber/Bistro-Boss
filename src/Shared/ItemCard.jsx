import React from 'react'
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ card }) => {
  const { name, recipe, image } = card;
  const {user} = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (card) =>{
    if(user && user.email){
      console.log(card,user.email);
     //send cart to database 
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
          navigate('/login');
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
