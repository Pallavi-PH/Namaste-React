import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../Config";

function filterData (searchValue, restaurants){
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchValue.toLowerCase())
  );

  return filterData;
}
const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState(restaurantList);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <div className="search_container">
                <input type="text"
                className="search_input"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                />
                <button className="search_button" onClick={()=>{
                    //need to filter the data
                    const data = filterData(searchValue, allRestaurants);
                    // update the state - restaurants
                    setFilteredRestaurants(data);
                }}>Submit</button>
            </div>
            <div className="restaurants">
                {filteredRestaurants.map((restaurant)=>{
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                    )
                })
                }
            </div>
        </>
    )
}

export default Body;