import React from 'react';
import './HeroBlock.scss';

const HeroBlock = ({title, links, logos}) => {
    /*создана переменная=новый массив уже преобразованный из логос в имж для рендера*/
    const logosImages = logos.map((logoItem, i) => <img src={logoItem} key={i} alt="partners-logo" className="hero-partners-item"/>);
    //
    const navItems = links.map((link, i) => <a href={link.href} key={i} className="hero-navigation-item">{link.title} </a>);
    //const bgcss = {background: 'url(${bgImg})'};

return (
    //контейнер на всю ширину
    <section className="hero">

            <div className="container">
                <div className="hero-partners">
                    {logosImages}
                </div> 
                <nav  className="hero-navigation">
                    {navItems}
               
                </nav>    
                <h1 className="hero-title">{title}</h1> 
                <a href="https://www.saveecobot.com/ru/maps" className="hero-link">Отследить</a>
            </div>
    </section>
);
};

export default HeroBlock;