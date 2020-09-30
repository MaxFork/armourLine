import React,{ useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";

import "./carousel.styles.css"

export default function Carousel() {
    const [slideImg, setSlideImg] = useState([
        {id: 1,  src:"https://www.worldcarmats.com/wp-content/uploads/2019/06/banner.jpg"},
      ]);
    
      const [current, setCurrent] = useState(1);
    
    useEffect(() => {
        const interval = setInterval(() => {
          if(current === 1){
            setSlideImg([
              {id: 2,src: "https://www.worldcarmats.com/wp-content/uploads/2019/06/banner-2.jpg" }
            ])
            setCurrent(current + 1);
          }
          if(current === 2){
            setSlideImg([
              {id: 1,src: "https://www.worldcarmats.com/wp-content/uploads/2019/06/banner.jpg" }
            ])
            setCurrent(1);
          }
        }, 6000)
    
        return () => clearInterval(interval);
    
    }, [current])
    
    const prevImg = () => {
        if(current === 1){
          setSlideImg([
            {id: 2,src: "https://www.worldcarmats.com/wp-content/uploads/2019/06/banner-2.jpg" }
          ])
          setCurrent(current + 1);
        }
        if(current === 2){
          setSlideImg([
            {id: 1,src: "https://www.worldcarmats.com/wp-content/uploads/2019/06/banner.jpg" }
          ])
          setCurrent(1);
        }
    }
    
    const nextImg = () => {
        if(current === 1){
            setSlideImg([
            {id: 1,src: "https://www.worldcarmats.com/wp-content/uploads/2019/06/banner-2.jpg" }
            ])
            setCurrent(current + 1);
        }
        if(current === 2){
            setSlideImg([
            {id: 1,src: "https://www.worldcarmats.com/wp-content/uploads/2019/06/banner.jpg" }
            ])
            setCurrent(1);
        }
    }
    return (
        <div className="container-fluid carousel-main-container">
            <div className="wrap">
            <div onClick={prevImg} id="arrow-left" className="arrow"></div>
            <div className="slider">
                <div className="slide">
                <div className="img-container">
                    <AnimatePresence initial={false} exitBeforeEnter>
                    {
                    slideImg.map((img) => (
                            <motion.img key={img.id}  src={img.src} alt="armour "
                            initial={{ x: 550, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -550, opacity: 0 }}
                            transition={{
                                type: "spring", stiffness: 300,damping: 50,
                                opacity: { duration: 0.2 }
                            }} />
                    ))
                    }
                    </AnimatePresence>
                </div>
                </div>
            </div>
            <div onClick={nextImg} id="arrow-right" className="arrow"></div>
            </div>
        </div>
    )
}
