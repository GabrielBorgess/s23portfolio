import React, {useEffect} from 'react'
import './workPage.scss'
import CornerElement from '../cornerElements/cornerElement';
import circleCursor from '../../components/Jsanimations/circleCursor';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const workPage = (props) => {
  useEffect(() => {
    circleCursor();
  });

  return (
    <div className='backgroundColor'>
      <motion.div className="workcontainer"
        initial={{ opacity: 0, y: "-20px" }}
        animate={{ opacity: "100%", y: "0px" }}
        exit={{ opacity: 0, y: "20px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="ball"></div>
        <div className="backToProjects">
          <p><Link to={'/work'}>Back to projects</Link></p>
        </div>

        <div className="project">
          <div className='projectDescriction'>
            <p className='aboutProject'>{props.aboutProject}</p>
            <h1 className='projectTitle'>{props.projectTitle}</h1>
          </div>

          <img className='projectImage' src={props.mainImageSrc} alt="" />

          <div className='challenge'>
            <h1 className='challengeTitle'>Challenge</h1>
            <p className='aboutchallenge'>{props.challenge}</p>
          </div>

          <img className='projectImage' src="https://www.kkratter.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyqc7huka%2Fproduction%2F509c045f429b31c339e1b7d31effc4c17b1c1d5e-1944x1400.jpg&w=1920&q=75" alt="" />

          <img className='projectImage' src="https://www.kkratter.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyqc7huka%2Fproduction%2F509c045f429b31c339e1b7d31effc4c17b1c1d5e-1944x1400.jpg&w=1920&q=75" alt="" />

          <img className='projectImage' src="https://www.kkratter.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyqc7huka%2Fproduction%2F509c045f429b31c339e1b7d31effc4c17b1c1d5e-1944x1400.jpg&w=1920&q=75" alt="" />

          <div className="backToProjectsEnd">
            <Link to={'/work'}><p>Back to projects</p></Link>
          </div>

        </div>
        {/* <CornerElement /> */}
      </motion.div>
    </div>
  )
}

export default workPage

{/* <div className="project">
          <div className='projectDescriction'>
            <p className='aboutProject'>Interior Design & Visual Design</p>
            <h1 className='projectTitle'>Agora</h1>
          </div>

          <img className='projectImage' src="https://www.kkratter.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyqc7huka%2Fproduction%2F509c045f429b31c339e1b7d31effc4c17b1c1d5e-1944x1400.jpg&w=1920&q=75" alt="" />

          <div className='challenge'>
            <h1 className='challengeTitle'>Challenge</h1>
            <p className='aboutchallenge'>Distopic iridescent concept space. The project is developed to host concepts shows and events in the world of fashion design. The reference to classical architecture is mixed with games of mirrors, iridescenses and materials that look to the future.</p>
          </div>

          <img className='projectImage' src="https://www.kkratter.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyqc7huka%2Fproduction%2F509c045f429b31c339e1b7d31effc4c17b1c1d5e-1944x1400.jpg&w=1920&q=75" alt="" />

          <img className='projectImage' src="https://www.kkratter.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyqc7huka%2Fproduction%2F509c045f429b31c339e1b7d31effc4c17b1c1d5e-1944x1400.jpg&w=1920&q=75" alt="" />

          <img className='projectImage' src="https://www.kkratter.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyqc7huka%2Fproduction%2F509c045f429b31c339e1b7d31effc4c17b1c1d5e-1944x1400.jpg&w=1920&q=75" alt="" />


        </div> */}