import { useState, useEffect } from "react";
import { Flashcard } from "../../components/Flashcard.jsx";

export function Flashcards() {
  const [index, setIndex] = useState(0);
  const items = [
    {
      title: "Title",
      content: "content content content content content",
    },
    {
      title: "Title 2",
      content: "content content content content content",
    },
    {
      title: "Title 3",
      content: "content content content content content",
    },
    {
      title: "Title 4",
      content: "content content content content content",
    }
  ];
  
  return(
  <div className="flex justify-center items-center min-h-screen bg-ctp-base text-ctp-text overflow-hidden">
    <ul className="relative bg-ctp-green flex justify-center items-center">
      {items.map((item, index) => {
        return <li key={index}><Flashcard title={item.title} content={item.content} index={index} isCard={true} /></li>
      })}
    </ul>
  </div>
  );
}
