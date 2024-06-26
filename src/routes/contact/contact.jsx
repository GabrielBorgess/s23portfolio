import React, { useEffect } from 'react'
import './contact.scss'
import CornerElement from '../../components/cornerElements/cornerElement'
import circleCursor from '../../components/JSanimations/circleCursor';
import { linkHover, leaveLinkHover } from '../../components/JSanimations/linkHoverAnimation'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const contact = () => {

  const { t } = useTranslation(); 

  useEffect(() => {
        circleCursor();
  });
  return (
    <div className='backgroundColor'>
      <motion.div id='contactPage'className='container'
        initial={{ opacity: 0, y: "-20px" }}
        animate={{ opacity: "100%", y: "0px" }}
        exit={{ opacity: 0, y: "20px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="ball"></div>
        <div className="contactContainer">
          <h1 className='contactTitle'>{t('contact.1')}</h1>
          <p className='content'>{t('contact.2')} <Link to={'/'}>{t('contact.3')}</Link></p>

          <div className="links">
            <p><a onMouseEnter={linkHover} onMouseLeave={leaveLinkHover}href="https://www.linkedin.com/in/gabriel-borges-0099251a1/" target="_blank">Linkedin</a></p>
            <p><a onMouseEnter={linkHover} onMouseLeave={leaveLinkHover}href="https://www.instagram.com/ogabrielborg/" target="_blank">Instagram</a></p>
            <p><a onMouseEnter={linkHover} onMouseLeave={leaveLinkHover} href="https://github.com/GabrielBorgess" target="_blank">Github</a></p>
            <p><a onMouseEnter={linkHover} onMouseLeave={leaveLinkHover} href="mailto:staffgabs@gmail.com">Email</a></p>
          </div>
        </div>
        <CornerElement number={'02'} name={t('CE.contact')} />
      </motion.div>
    </div>
  )
}

export default contact
