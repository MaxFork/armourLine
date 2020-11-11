import React,{ useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";

import "./carousel.styles.css"

export default function Carousel() {
    const [slideImg, setSlideImg] = useState([
        {id: 1,  src:"https://www.worldcarmats.com/wp-content/uploads/2019/06/banner.jpg"},
      ]);
    
    const [current, setCurrent] = useState(1);

    const prevImgRef = useRef();
    const nextImgRef = useRef();
    
    useEffect(() => {
        if(current === 1){
            prevImgRef.current.classList.add("active-square");
        }

        const interval = setInterval(() => {
          if(current === 1){
            prevImgRef.current.classList.remove("active-square");
            setSlideImg([
              {id: 2,src: "https://www.worldcarmats.com/wp-content/uploads/2019/06/banner-2.jpg" }
            ])
            setCurrent(current + 1);
            nextImgRef.current.classList.add("active-square");
          }
          if(current === 2){
            nextImgRef.current.classList.remove("active-square");
            setSlideImg([
              {id: 1,src: "https://www.worldcarmats.com/wp-content/uploads/2019/06/banner.jpg" }
            ])
            setCurrent(1);
            prevImgRef.current.classList.add("active-square");
          }
        }, 6000)
    
        return () => clearInterval(interval);
    
    }, [current])
    
    const prevImg = () => {
        nextImgRef.current.classList.remove("active-square");
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
        prevImgRef.current.classList.add("active-square");
    }
    
    const nextImg = () => {
        prevImgRef.current.classList.remove("active-square");
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
        nextImgRef.current.classList.add("active-square");
    }
    return (
        <div className="container-fluid carousel-main-container">
            <div className="wrap">
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
                <div className="carousel-buttons text-center">
                    <span ref={prevImgRef} onClick={prevImg} className="mx-2"></span>
                    <span ref={nextImgRef} onClick={nextImg} className="mx-2"></span>
                </div>
            </div>
        </div>
    )
}
