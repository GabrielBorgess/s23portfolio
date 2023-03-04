import React, { useEffect } from 'react'
import './contact.scss'
import CornerElement from '../../components/cornerElements/cornerElement'
import circleCursor from '../../components/JSanimations/circleCursor';
import { linkHover, leaveLinkHover } from '../../components/JSanimations/linkHoverAnimation'
import { motion } from "framer-motion";
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
          <p className='content'>If anything of those sounds intriguing, just feel free to reach out to me. You are welcome.
            And if you`re lazy and don´t want to scroll to get back to the top,i feel you.</p>

          <div className="links">
            <p><a onMouseEnter={linkHover} onMouseLeave={leaveLinkHover}href="">Linkedin</a></p>
            <p><a onMouseEnter={linkHover} onMouseLeave={leaveLinkHover}href="">Instagram</a></p>
            <p><a onMouseEnter={linkHover} onMouseLeave={leaveLinkHover} href="">Twitter</a></p>
            <p><a onMouseEnter={linkHover} onMouseLeave={leaveLinkHover} href="">Email</a></p>
          </div>
        </div>
        <CornerElement number={'02'} name={t('CE.contact')} />
      </motion.div>
    </div>
  )
}

export default contact
