import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl'
import './AirQuality.scss'
//import 'mapbox-gl/dist/mapbox-gl.js'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3NleWFuZWwiLCJhIjoiY2tmcDFpZW5vMDRxOTJ0cGJ3d3Noem1sbiJ9.v1zFtJmvD0sus56UKI8Y1g';

const AirQuality = () => {

    const mapContainer = useRef (null);
    const [locationInfo] = useState ( {
        lng: 31,
        lat: 48.4,
        zoom: 5
        });
        
    
    useEffect (() => {
        console.log(mapContainer);
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [locationInfo.lng, locationInfo.lat],
        zoom: locationInfo.zoom
    });
    
        new mapboxgl.Marker()
        .setLngLat([37.5, 47.1])
        .addTo(map) // add the marker to Мариуполь

        new mapboxgl.Marker()
        .setLngLat([37.8, 48])
        .addTo(map) // add the marker to Донецк

     
    })
       

    return (
        <section className={'air-q container'} id="quality">

        <h2 className="air-q-title">Индекс качества воздуха в режиме реального времени</h2>

        <div className="air-q-map" ref={mapContainer} />
        
        <p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.
        </p>
		</section>
	);
};



export default AirQuality;