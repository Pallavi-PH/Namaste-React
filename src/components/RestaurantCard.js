const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating, costForTwoString}) => {
    return (
        <div className="restaurant__item">
            <img alt={name} src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} className="restaurant__image"/>
            <div className="restaurant__body">
                <h2 className="restaurant__name">{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <div className="restaurant__content">
                    <span className="restaurant__rating">{avgRating} stars</span>
                    <span>{costForTwoString}</span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;