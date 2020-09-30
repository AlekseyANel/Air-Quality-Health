import React from 'react';
import './Facts.scss';
import SlideFacts from './SlideFacts';
//import FactsItem from './FactsItem';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
//import {useScreenSize} from "../../utils/useScreenSize";

SwiperCore.use([Navigation, Pagination])

const Facts = ({title, slides}) => {
    /*const winSize = useScreenSize();*/
    const factsSlides= slides.map( (slideInfo) => 
    <SwiperSlide key={slideInfo.id}> 
    <SlideFacts item={slideInfo}/>
    </SwiperSlide> );
    
    
    return (
        <section className="facts container" id="facts">
            <h2 className="facts-title">{title}</h2>
            <div className="swiper-button-prev"/>

            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
                }}

                pagination={{
                    el: '.facts-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="facts-pagination-bullet ${className}"></span>`;
                     },
                    }}
                
                //initialSlide={0}
                
                spaceBetween={60}
				slidesPerView={3}
				slidesPerGroup={3}
                centeredSlides={false}
                //centeredSlidesBounds={true}
                            >

                {factsSlides}
                
            </Swiper>



            <div className="swiper-button-next"/>
			<div className="facts-pagination"/>

        </section>


    )
}
export default Facts;