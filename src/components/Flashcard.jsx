import { Icon } from "./Icon.jsx";

export function Flashcard({title, content, isImage = false, image, isCard = false}) {
  
  return(
  <div className={`flex flex-col items-center ${isImage ? '' : 'justify-center'} w-56 sm:w-70 h-88 sm:h-110 bg-ctp-text rounded-xl`}>
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
  </div>
  );
}
