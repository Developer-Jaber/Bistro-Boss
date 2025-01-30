import React from 'react'

const ItemCard = ({ card }) => {
  const { name, recipe, image } = card;

  const handleAddToCart = (card) =>{
    console.log(card);
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
