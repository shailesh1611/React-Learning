import ResCard from "./ResCard";
import { resList } from "../utils/res_data";
import { useState } from "react";

const Body = () => {
    const [dupResList, setDupResList] = useState(resList); // Hooks
    return (
        <div className="body">
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
                            setDupResList(list);
                        }
                    }}> Filter
                </button>
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
