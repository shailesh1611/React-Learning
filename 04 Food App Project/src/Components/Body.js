import ResCard from "./ResCard";
import { data } from "../utils/res_data";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { API_URL } from "../utils/constants";

const Body = () => {
    const [resList,setResList] = useState([]);

    const [dupResList, setDupResList] = useState([]); // Hooks
    const [searchValue,setSearchValue] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        setResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    if(resList.length === 0) {
        return <ShimmerCard/>
    }

    if(resList.length !== 0 && dupResList.length === 0) {
        setDupResList(resList);
    }

    return (
        <div className="body">
            <div className="searchAndFilter">
                <div className="search">

                    <input type="text" 
                        placeholder="Search Restaurent, Foods" 
                        id="search_box"
                        value={searchValue}
                        onChange={(e)=>{
                            setSearchValue(e.target.value);
                            if(e.target.value.length === 0) setDupResList(resList);
                        }}
                    />

                    <button 
                        className="btn_search" 
                        onClick={()=>{
                            if(searchValue.length === 0) setDupResList(resList);
                            else {
                                const searchList = resList.filter((res)=>{
                                    return res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                                })
                                if(searchList.length === 0) alert("No Results Found!!");
                                else setDupResList(searchList);
                            }
                        } 
                    }> Search
                    </button>


                </div>

                <div className="filter">
                    <input type="number" placeholder="Filter By Rating" id="filter_box" />
                    <button
                        className="btn_filter"
                        onClick={() => {
                            const inputValue = document.getElementById("filter_box").value;
                            const num = +inputValue;
                            if (num < 0 || num > 5) {
                                alert("Please! filter between 0 to 5");
                            } 
                            else {
                                const list = resList.filter((res) => res.info.avgRating >= num);
                                if(list.length === 0) {
                                    alert("Sorry! No Restaurent Found above Rating "+num);
                                }
                                else setDupResList(list);
                            }
                        }
                    }> Filter
                    </button>       
                </div>

            </div>
            
            <div className="res-Container">
                {dupResList.map((res) => (
                    <ResCard props={res} key={res.info.id}></ResCard>
                ))}
            </div>
        </div>
    );
};

export default Body;
