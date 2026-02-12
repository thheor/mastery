import { useState, useEffect } from "react";
import { Flashcard } from "../../components/Flashcard.jsx";
import { Icon } from "../../components/Icon.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { supabase } from "../../supabaseClient.js";

import "swiper/css";
import "swiper/css/effect-fade";

export function Flashcards({user}) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const [cardCategory, setCardCategory] = useState('all');
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();

  }, [])

  useEffect(() => {
    query.toLowerCase();

    setItems(data.filter((element) => {
      let category = true;

      if(cardCategory === 'yours'){
        category = element.user_id === user;
      } else if(cardCategory === 'all'){
        category = true;
      } else {
        category = element.category.trim() === cardCategory;
      }

      return element.title.split(' ').some(word => 
        word.toLowerCase().startsWith(query) && category)
    }));

  }, [query, cardCategory])

  async function fetchData() {
    const { data, error } = await supabase.from("flashcards").select("*");

    if(error){
      console.error(error);
    } else {
      console.log(data);
      setData(data);
      setItems(data);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
  <div className="flex flex-col justify-center items-center min-h-screen bg-ctp-base text-ctp-text overflow-hidden">
    <div className="absolute max-sm:inline-block flex gap-2 justify-between sm:mt-5 top-18 w-70 sm:w-90">
      <label forhtml="query" className="flex items-center bg-ctp-text rounded">
        <input type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title..."
          className="text-ctp-base p-2 focus:outline-none w-60 sm:w-auto" />
        <button type="button" onClick={handleSubmit} className="cursor-pointer">
          <Icon name="MagnifyingGlassIcon" className="size-10 p-2 bg-center text-ctp-base " />
        </button>
      </label>
      <select onChange={(e) => setCardCategory(e.target.value)} 
        className="max-sm:mt-3 bg-ctp-text p-1 w-auto h-auto rounded text-ctp-base font-poppins">
        <option value="all">All</option>
        <option value="yours">Yours</option>
        <option value="math">Math</option>
        <option value="english">English</option>
        <option value="physics">Physics</option>
      </select>
   </div>
      <div className="max-sm:ml-15 mt-30 sm:mt-20 ">
        {data.length > 0 ? <Flashcard title="title" content="content" items={items} /> :
        <p className="text-ctp-text text-center max-sm:-ml-15 text-lg font-poppins">Loading...</p>}
      </div>
  </div>
  );
}
