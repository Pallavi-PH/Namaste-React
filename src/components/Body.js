import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData (searchValue, restaurants){
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchValue.toLowerCase())
  );

  return filterData;
}
const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    useEffect(()=>{
        getRestaurant();
    }, [])

    const getRestaurant = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.834640893680138&lng=74.51841630041599&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    console.log("render");

    // not render component (Early return)
    if (!allRestaurants) return null;

    if (allRestaurants?.length === 0)
    return <Shimmer /> ;

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
            {filteredRestaurants?.length === 0 ? (
                <h2 className="no_match">No Restraunt match your Filter!!</h2>
            ) :
            <div className="restaurants">
                {filteredRestaurants.map((restaurant)=>{
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                    )
                })
                }
            </div>
            }
        </>
    )
}

export default Body;