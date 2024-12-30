import React from 'react';

const ItemCard = ({card}) => {
    const {name,recipe,image} = card;
    return (
        <div className='bg-slate-100 shadow-md rounded-none h-96 card'>
            <img src={image} alt="" />
            <h1 className='my-4 font-bold text-xl'>{name}</h1>
            <p className='my-2 text-gray-500'>{recipe}</p>
            <button className='uppercase'>add to card</button>
        </div>
    );
};

export default ItemCard;