import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Icon } from "./Icon.jsx";
import { EffectCards } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Flashcard({title, content, image, isCard = true, items}) {

  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        effect={'cards'}
        cardsEffect={{
          slideShadows: false,
        }}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper w-84 flex h-145 rounded-xl"
      >
        {items.map((item) => {
          return <SwiperSlide id="list-item" className="text-ctp-base">
            <div className={`flex flex-col items-center
                          ${image ? '' : 'justify-center'} w-64 sm:w-84 h-100 sm:h-132 bg-ctp-text
                            border border-ctp-base rounded-xl`}>
              {image && 
              <div className="w-55 sm:w-72 h-40 sm:h-50 mt-5 ">
                <img src={image} alt="image" className="object-cover w-55 sm:w-72 h-40 sm:h-50 rounded-xl" />
              </div>}
              <div className={`flex items-center ${isCard ? 'justify-between' : 'justify-center'} mt-2 w-60 sm:w-78 z-2`}>
                {isCard && <Icon name="ChevronDoubleRightIcon" className="text-ctp-blue size-6" />}
                  <h1 className="text-ctp-base text-center text-xl sm:text-2xl font-semibold font-roboto-flex ">{item.title}</h1>
                {isCard && <Icon name="ChevronDoubleLeftIcon" className="text-ctp-blue size-6" />}
              </div>
              {isCard && <div className="mt-1 z-0 border-b w-36 sm:w-45 h-1 border-ctp-blue rounded-xl"></div>}
              {isCard && <div className="flex justify-center -mt-4 w-60 z-1">
                <Icon name="EllipsisHorizontalIcon" className="size-8 bg-ctp-text text-ctp-blue before:block before:bg-ctp-base" />
              </div>}
              {isCard  && <p className="text-ctp-base text-lg sm:text-xl font-normal font-roboto-flex text-center -mt-1 mx-2">{item.content}</p>}
            </div>}
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
