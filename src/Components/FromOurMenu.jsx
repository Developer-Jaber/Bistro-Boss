import { useEffect, useState } from "react";
import Menu from "../Shared/Menu";


const FromOurMenu = () => {
    const [Items,setItem] = useState([]);
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const populerItem = data.filter(item=>item.category === "popular");
            setItem(populerItem)
        })
    },[])
    
    return (
        <div className="gap-7 grid grid-cols-2 mx-auto my-10 w-8/12">
            {
                Items.map(item=><Menu key={item._id} item={item}></Menu>)
            }
        </div>
    );
};

export default FromOurMenu;