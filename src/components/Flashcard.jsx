import { useState, useEffect, useRef } from "react";
import { Icon } from "./Icon.jsx";
import { motion, AnimatePresence } from "motion/react";

export function Flashcard({title, content, index, isImage = false, image, isCard = false}) {
  const [isVisible, setIsVisible] = useState(true);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [maxX, setMaxX] = useState(500);
  const [maxY, setMaxY] = useState(200);
  const [offsetX, setOffsetX] = useState(1000);
  const [offsetY, setOffsetY] = useState(1000);
  const [isMobile, setIsMobile] = useState(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);

  useEffect(() => {

  if(window.innerWidth <= 640){
    setIsMobile(true);
    setMaxX(30);
    setMaxY(80);
    setOffsetY(100);
    setOffsetX(100);
  }

  }, [])

  return(
    <AnimatePresence>
      {isVisible && <motion.div drag 

        onDragStart={(e, info) => {
        setStartY(info.point.y);
        setStartX(info.point.x);}} 

        onDragEnd={(e, info) => {
        if(startXRef.current === 0 && startYRef.current === 0){
          startXRef.current = startX;
          startYRef.current = startY;
        }

        const endPointX = info.point.x;
        const endPointY = info.point.y;
          console.log('start:' + startXRef.current + 'end' + endPointX)
          console.log(info.offset)

        if(Math.abs(startYRef.current - endPointY) > maxY || Math.abs(startXRef.current - endPointX) > maxX || Math.abs(info.offset.x) > offsetX || Math.abs(info.offset.y) > offsetY){
          setIsVisible(false)
        }
        }} 
        exit={{opacity: 0, display: 'none', scale: 0.5, transition: { duration: 0.2}}}

        style={{zIndex: index}}

        className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${isImage ? '' : 'justify-center'} w-56 sm:w-70 h-88 sm:h-110 bg-ctp-text border border-ctp-base rounded-xl`}>
      {isImage && 
        <div className="w-48 sm:w-60 h-40 sm:h-50 mt-5 bg-ctp-blue rounded-xl">
          <img src={image} alt="" className="object-cover w-48 h-40" />
        </div>}
      <div className={`flex items-center ${isCard ? 'justify-between' : 'justify-center'} mt-2 w-48 sm:w-60 z-2`}>
        {isCard && <Icon name="ChevronDoubleRightIcon" className="text-ctp-blue size-6" />}
        <h1 className="text-ctp-base text-center text-base sm:text-xl font-semibold font-roboto-flex ">{title}</h1>
        {isCard && <Icon name="ChevronDoubleLeftIcon" className="text-ctp-blue size-6" />}
      </div>
      {isCard && <div className="mt-1 z-0 border-b w-36 sm:w-45 h-1 border-ctp-blue rounded-xl"></div>}
      {isCard && <div className="flex justify-center -mt-4 w-60 z-1">
        <Icon name="EllipsisHorizontalIcon" className="size-8 bg-ctp-text text-ctp-blue before:block before:bg-ctp-base" />
      </div>}
      {isCard && <p className="text-ctp-base text-sm sm:text-lg font-normal font-roboto-flex text-center -mt-1 mx-2">{content}</p>}
      </motion.div>}
    </AnimatePresence>
  );
}
