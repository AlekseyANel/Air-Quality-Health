import React from 'react';
import "./Footer.scss"

const Footer = ({partners, links}) => {
    const partnersLogos = partners.map((logo, i) => <img key={i} src={logo} alt={'partner logo'} className="footer-partners-item"/>);
    const navLinks = links.map((link, i) => <a href={link.href} key={i} className={'footer-nav-link'}>{link.title} </a>);
    
    return (
        <footer className="footer" >
            <div className="container">
            
                <div className="footer-partners">
                {partnersLogos}
                </div>

                <div className="footer-text-wrap">
                    <div className="footer-nav">
                    {navLinks}
                    </div> 

                    <p className="footer-nav-text">
                        Сайт был разработан <span className="text-yelow">Никитой Ямником</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="text-yelow">Валерией Бубырь</span>.
                    </p> 
                </div>

                    <a className="footer-text" href="https://www.unglobalcompact.org/copyright">
                        2020, Все права защищены
                    </a>
                    
                    <a className="footer-text" href="https://www.unglobalcompact.org/privacy-policy" >
                        Согласие на обработку персональных данных<br/>
                        Политика конфиденциальности
                    </a>
                

            </div>

        </footer>
        
    )
}
export default Footer;