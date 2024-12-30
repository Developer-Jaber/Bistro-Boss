

const Menu = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div className="flex gap-4">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-24" src={image} alt="" />
            <div className="text-gray-500">
                <h1 className="font-bold text-md">{name}-----------------</h1>
                <p className="text-sm">{recipe}</p>
            </div>
            <span className="text-yellow-400">${price}</span>
        </div>
    );
};

export default Menu;