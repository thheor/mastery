import { useState, useEffect } from 'react';
import { supabase } from "../../supabaseClient.js";
import { ToLogin } from "../../components/ToLogin.jsx";

export function CreateFlashcards({user}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(null);
  const [imageCard, setImageCard] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isCard, setIsCard] = useState(true);
  const [selectCategory, setSelectCategory] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [form, setForm] = useState("card");

  useEffect(() => {
    console.log(imageCard)

    if (imageCard) {
      const reader = new FileReader();

      reader.onload = function(e) {
        setPreview(e.target.result);
        console.log(e.target.result)
      }

      reader.readAsDataURL(imageCard);
      
    } else {
      setPreview(null);
    }

  }, [imageCard])
 
  function handleFile(e) {
    console.log(e.target.files)
    if(e.target.files && e.target.files.length > 0){
      setImageCard(e.target.files[0])
    }
  }

  async function uploadImage(file) {

    const filePath = `${file.name.replaceAll(/\p{Emoji}/gu, '').replaceAll(' ', '')}-${Date.now()}`

    const { error } = await supabase.storage.from('image_flashcards').upload(filePath, file);

    if(error){
      console.error(error);
      return null;
    }
    
    const { data } = await supabase.storage.from('image_flashcards').getPublicUrl(filePath);

    return data.publicUrl;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if(title === ''){
      alert('Enter your title first...')
      return;
    }

    let imageUrl = null;

    if(imageCard){
      imageUrl = await uploadImage(imageCard);
      console.log(imageUrl);
    }

    const {error} = await supabase.from('flashcards').insert(
      {title: title, content: content, image_path: imageUrl, isCard: isCard, user_id: user})

    if(error){
      console.log(error);
      alert("Create flashcard error");
    }else {
      alert("Flashcard created")
    }
  }

  function handleCategory(e) {
    if(e.target.value !== "add"){
      setAddCategory(false);
      setCategory(e.target.value);
    } else if(e.target.value === "add"){
      setCategory('');
      setAddCategory(true);
    }

  }

  function handleForm(e) {
    setForm(e.target.value);
    setIsCard(e.target.value === "card" ? true : false);
    if(e.target.value !== "card"){
      setImageCard(null);
    }

  }
  
  return(
    <>
      {user && 
      <div className="min-h-screen flex flex-col items-center bg-ctp-base font-poppins">
        <h1 className=" text-ctp-text text-3xl font-semibold text-center mt-15 mb-10">Create Your Own Flashcards</h1>
        <select value={form} onChange={handleForm}
          className="bg-ctp-text text-ctp-base p-1 rounded mr-60 sm:mr-82 mb-2">
          <option value="card">Card</option>    
          <option value="QnA">QnA</option>    
        </select>
        <form className="flex flex-col w-78 sm:w-100 text-ctp-text font-poppins">
        {form === "card" ? 
        (<>
          <label forhtml="image">Image (optional)</label>
          <input type="file" name="image" accept="image/*" onChange={handleFile}
            className="bg-ctp-text text-ctp-base p-2 rounded" />
          {preview !== null && <img src={preview} alt="" className="object-cover w-55 sm:w-72 h-40 sm:h-50 mx-auto mt-2 rounded-xl" />}
          <label forhtml="title" className="text-ctp-text mt-2">Title</label>
          <input type="text" name="title" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..."
            className="p-2 bg-ctp-text text-ctp-base rounded focus:outline-none" />
          <label forhtml="content" className="text-ctp-text mt-2">Description</label>
          <textarea rows="4" cols="" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter description..."
            className="p-2 bg-ctp-text text-ctp-base rounded focus:outline-none"></textarea>
        </>)
        : 
        (<>
          <label forhtml="title">Title</label>
          <input type="text" name="title" value={title} placeholder="Enter title..." onChange={(e) => setTitle(e.target.value)}
            className="p-2 bg-ctp-text text-ctp-base rounded focus:outline-none" />
          <label forhtml="content">Answer</label>
          <textarea rows="4" cols="" placeholder="Enter answer..." onChange={(e) => setContent(e.target.value)}
            className="p-2 bg-ctp-text text-ctp-base rounded focus:outline-none"></textarea>
        </>)
          }
          <button type="button" onClick={() => setSelectCategory(!selectCategory)}
            className="w-38 h-8 bg-ctp-text text-ctp-base rounded mt-3 hover:bg-ctp-lavender cursor-pointer">{selectCategory ? 'Remove category' : 'Select category'}</button>
          {selectCategory && <select onChange={handleCategory}
            className="bg-ctp-text p-1 text-ctp-base mt-3 rounded">
            <option value="math">Math</option>
            <option value="english">English</option>
            <option value="physics">Physics</option>
            <option value="others">Others</option>
            <option value="add">Add category</option>
          </select>}
          {(addCategory && selectCategory) && <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category..."
            className="bg-ctp-text text-ctp-base p-2 mt-3 focus:outline-none rounded" />}
          <button type="submit" onClick={handleSubmit} 
            className="px-2 py-1 w-20 mx-auto bg-ctp-text text-ctp-base hover:bg-ctp-lavender cursor-pointer mt-5 rounded">Submit</button>
        </form> 
      </div>}
      {!user && <ToLogin title="Login to add flashcards" nav="/card/create" className="min-h-screen bg-ctp-base flex flex-col justify-center items-center" />}
    </>
  );
}
