import React, { useState } from 'react'
import './root.scss'
import Figure from '../../3delements/figure';
import CornerElement from '../../components/cornerElements/cornerElement';
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';
import circleCursor from '../../components/JSanimations/circleCursor';

const root = () => {
  const { t, i18n } = useTranslation();

  const lngs = {
    en: { nativeName: 'English' },
    pt: { nativeName: 'Português' }
  };

  useEffect(() => {
    // -- ANIMATION CODE HERE --
    gsap.fromTo('.main',
      { autoAlpha: 0, y: -30 },
      { y: 0, autoAlpha: 1, duration: 1.2,delay: 0.4 });
      
      circleCursor();
  });

  //const [videoBg, setVideoBg] = useState(false)

  return (
    <div className='backgroundColor'>
      <motion.div id='mainPage' className="container"
        initial={{ opacity: 0, y: "-20px" }}
        animate={{ opacity: "100%", y: "0px" }}
        exit={{ opacity: 0, y: "20px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
          <div className='changeLanguage'>
            {Object.keys(lngs).map((lng) => (
              <button className='changeLanguageBtn' key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
        <div className="ball"></div>
        <div className="main">
          <h1 className='presenting mouse'>{t('presenting.1')}</h1>
          <h1 className='name mouse'>Gabriel Borges</h1>
          <div className="about mouse">{t('presenting.2')}</div>
        </div>
        <CornerElement number={'00.'} />
        <div className='snake'>
          <div className='snake__inner'>
            <Figure />
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default root
