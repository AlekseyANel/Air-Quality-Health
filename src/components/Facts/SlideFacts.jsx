import React from 'react';
import './Facts.scss';

const SlideFacts = ({item}) => {
    return (
        <div className="facts-slide">
            <img src={item.imgUrl} alt="slide img"/>
            <p className="facts-slide-desc">
                {item.description}

            </p>
           
        </div>


    )
}
export default SlideFacts;