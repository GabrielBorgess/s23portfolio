import React from 'react'
import WorkPlaceHolder from '../../components/workPlaceHolder/workPlaceHolder';
import CornerElement from '../../components/cornerElements/cornerElement';
import circleCursor from '../../components/JSanimations/circleCursor';
import './work.scss'

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const work = ({ isVisible }) => {

    useEffect(() => {

        // -- ANIMATION CODE HERE --
        gsap.fromTo('.title',
            { autoAlpha: 0, y: -30 },
            { y: 0, autoAlpha: 1, duration: 1.2, delay: 0.38});
            
            circleCursor();
    });
    
    return (
        <div className='backgroundColor'>
            <motion.div id='workPage' className="work-container"
                initial={{ opacity: 0, y: "-20px" }}
                animate={{ opacity: "100%", y: "0px" }}
                exit={{ opacity: 0, y:"20px"}}
                transition={{ duration: 1.1, ease: "easeOut"}}
            >
                <div className="ball"></div>
                <h1 className='title'>WORKS</h1>
                <div className="works">
                    <hr />
                    <div className="singleWork">
                    <Link to={'/'}><WorkPlaceHolder number='01' name='EricSiera Portfolio' date='OCTUBER2020' /></Link>
                    </div>
                    <hr />

                    <div className="singleWork">
                    <Link to={'/work/agora'}><WorkPlaceHolder number='01' name='Agora' date='OCTUBER2020' /></Link>
                    </div>
                    <hr />

                    <div className="singleWork">
                    <Link to={'/'}><WorkPlaceHolder number='01' name='ContraBureal Clone' date='OCTUBER2020' /></Link>
                    </div>
                    <hr />
                </div>
                <CornerElement number={'01.'} name={'Work'}/>
            </motion.div>
        </div>
    )
}

export default work
