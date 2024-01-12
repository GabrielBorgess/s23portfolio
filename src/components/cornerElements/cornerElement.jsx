import './cornerElements.scss'
import { linkHover, leaveLinkHover } from '../JSanimations/linkHoverAnimation'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const cornerElement = (props) => {

    const { t } = useTranslation();

    useEffect(()=>{
        const aboutLink = document.querySelector('#about');
        const workLink = document.querySelector('#work')
        const contactLink = document.querySelector('#contact')

        if(document.querySelector('#mainPage') != null){
            aboutLink.classList.add('selected');
        }

        if(document.querySelector('#workPage') != null){
            workLink.classList.add('selected');
        }

        if(document.querySelector('#contactPage') != null){
            contactLink.classList.add('selected');
        }
    })

    return (
        <div className="cornerElements">
            <div className="row">
                <div className="rowElement top-left">Porfolio <br /> <span> <a href="/CV_GABRIEL_BORGES.pdf" download>Resume</a></span></div>
                <div className="rowElement top-right">
                    <div className="pagetitle">
                        <div className="number">{props.number}</div>
                        <div className="page">{props.name}</div>
                    </div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className="row">
                <div className="rowElement bottom-left">© 2023</div>
                <div className="rowElement nav bottom-right">
                    <ul>
                        <div onMouseEnter={linkHover} onMouseLeave={leaveLinkHover}>
                            <li><Link to={`/`} id='about'>{t('CE.about')}</Link></li>
                        </div>
                        <div onMouseEnter={linkHover} onMouseLeave={leaveLinkHover}>
                            <li><Link to={`/work`} id='work'>{t('CE.work')}</Link></li>
                        </div>
                        <div onMouseEnter={linkHover} onMouseLeave={leaveLinkHover}>
                            <li><Link to={`/contact`} id='contact'>{t('CE.contact')}</Link></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default cornerElement
