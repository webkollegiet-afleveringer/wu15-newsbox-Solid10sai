import { useState, useEffect } from "react"
import "./home.scss";
import logo from "../assets/logo.svg";
import Searchbar from "../components/Searchbar/Searchbar";
const API_URL = ("https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=yourkey")


export default function Home(){
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setNews(data)) // Husk at tjekke om det er data eller f.eks. data.articles
  }, []);
  
  return (
    <>
        
    <div className="header">
      <div>

      <img src={logo} alt="Newsify logo" className="logo" />
      <h1>Newsify</h1>
      </div>
      <Searchbar></Searchbar>
      
    </div>
    
    </>
  );
}