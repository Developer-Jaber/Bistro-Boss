import { useEffect, useState } from "react";
import ItemCard from "../Shared/ItemCard";


const ChefRecomands = () => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=> {
            const recomandsItem = data.filter(item=>item.category === "salad")
            setItems(recomandsItem)
        })
    },[])
    return (
        <div className="gap-10 grid grid-cols-3 mx-auto my-14 w-7/12 text-center">
            {
                items.map(card=><ItemCard key={card._id} card={card}></ItemCard>)
            }
        </div>
    );
};

export default ChefRecomands;