import ResCard from './ResCard'
import { resList } from '../utils/res_data';

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">Search Bar</div>
            <div className="res-Container"> 
                {
                    resList.map((res)=><ResCard props={res} key={res.info.id}></ResCard>)
                }
            </div>
        </div>
    );
};

export default Body;