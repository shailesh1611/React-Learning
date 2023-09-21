import rating from '../../assets/images/rating-48.png';
import {IMAGE_CDN} from "../utils/constants"

const ResCard = ({props}) => {
    const res = props;
    return (
        <div className="res-Card">
            <div className="resCard-Img">
                <img src={IMAGE_CDN+res.info.cloudinaryImageId}></img>
            </div>
            <div className="resCard-Content">
                <div className="res-Name">{res.info.name}</div>
                <div className="star-rating">
                    <img src={rating}></img>
                    {res.info.avgRating}
                </div>
                <div className="cuisine">{res.info.cuisines.join(", ")}</div>
                <div className="address">{res.info.areaName}</div>
            </div>
        </div>
    );
};

export default ResCard;