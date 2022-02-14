import React from "react";
import './App.css';
import Axios from "axios";
import RecipeTile from "./RecipeTile";

function App() {
  const [query,setQuery]=React.useState("");
  const [recipes, setrecipes] = React.useState([]) 
  const [healthLabel, sethealthLabel] =React.useState("vegan")
  const YOUR_APP_ID ="73272e99";
const YOUR_APP_KEY="4848089b34a258692b847053cc8f6db7";
  var url=`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&&health=${healthLabel}`; 
  async function getRecipes(){
   
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);

  }
  const onSubmit=(e)=>{
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="App">
      
      <h1 className="app">Food Recipe Plaza</h1>
      <form className="app_search_form" onSubmit={onSubmit}>
        <input className="app_input" 
        type="text" placeholder="Enter ingridient"
        value={query} onChange={(e)=>{
          setQuery(e.target.value)
        }}></input>
        <input  className="app_submit" type="submit" value="Search"></input>
      <select className="app_healthLabels">
        <option value="vegan" onClick={()=>{sethealthLabel("vegan")}}>Vegan</option>
        <option value="vegetarian" onClick={()=>{sethealthLabel("vegetarian")}}>Vegetarian</option>
        <option value="paleo" onClick={()=>{sethealthLabel("paleo")}}>Paleo</option>
        <option value="diary-free" onClick={()=>{sethealthLabel("diary-free")}}>Diary-Free</option>
        <option value="sugar-free" onClick={()=>{sethealthLabel("sugar-free")}}>Sugar-Free</option>
        <option value="wheat-free" onClick={()=>{sethealthLabel("wheat-free")}}>Wheat-Free</option>
        <option value="low-sugar" onClick={()=>{sethealthLabel("low-sugar")}}>Low-Sugar</option>
        <option value="peanut-free" onClick={()=>{sethealthLabel("vegan")}}>Peanut-Free</option>
        
      </select>
      </form>
      <div className="app_recipes">
         {recipes.map(recipe =>{
           return <RecipeTile recipe={recipe}/> ;
         })}
      </div>
    </div>
  );
}

export default App;
