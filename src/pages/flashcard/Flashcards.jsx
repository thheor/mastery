import { useState, useEffect } from "react";
import { Flashcard } from "../../components/Flashcard.jsx";
import { Icon } from "../../components/Icon.jsx";

export function Flashcards() {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const [cardCategory, setCardCategory] = useState('all');
  
  const items = [
    {
      id: 1,
      title: "phytagoras math",
      content: "content content content content content",
      image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      category: "math",
    },
    {
      id: 2,
      title: "derivative 2 variables",
      content: "content content content content content",
      category: "math",
    },
    {
      id: 3,
      title: "derivative 3 variables",
      content: "content content content content content",
      category: "math",
    },
    {
      id: 4,
      title: "English grammar",
      content: "content content content content content",
      category: "english",
    },
    {
      id: 5,
      title: "the rule of relative by einsteins",
      content: "content content content content content",
      category: "physics",
    }
  ];

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
    <ul className="relative bg-ctp-green flex -mt-10 sm:mt-10 justify-center items-center">
      <ShowCards items={items} query={query} category={cardCategory} />
    </ul>
  </div>
  );
}

function ShowCards({items, query, category = 'all'}){
  const [newList, setNewList] = useState(items);

  useEffect(() => {
    setNewList(filterList(items, query))

  }, [query, category]);

  function filterList(items, query){
    query = query.toLowerCase();

    const list = items.filter(item => {
      let categoryCondition = category === 'all' ? true : item.category === category;

      return item.title.toLowerCase().split(' ').some(word => 
        word.toLowerCase().startsWith(query)) && categoryCondition;
    })
    return list;
  }

  return(
    <>
      {newList.map((item, index) => {
        return <li key={item.id}><Flashcard title={item.title} content={item.content} index={index} isCard={true} image={item.image} /></li>
      })}
    </>);
}
