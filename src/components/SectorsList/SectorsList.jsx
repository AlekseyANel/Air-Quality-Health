import React from 'react';
import SectorItem from './SectorItem';
import './SectorsList.scss'

const SectorsList = ({title, subtitle, items}) => {
    
    const itemsList = items.map((sector, i) => <SectorItem sector={sector} number={i+1} key={i}/>)

    return (
        <section className = "sectors container" id="politics">
            <h2 className = "sectors-title">{title}</h2>
            <p className = "sectors-subtitle">{subtitle}</p>
            <div className="sectors-list">
			{itemsList}
			</div>
            </section>


    )
}
export default SectorsList