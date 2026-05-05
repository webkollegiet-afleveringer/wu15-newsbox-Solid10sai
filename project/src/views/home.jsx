import { useState, useEffect } from "react"
import "./home.scss";
const API_URL = ("https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=yourkey")


export default function Home(){
    const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setNews(data)) // Husk at tjekke om det er data eller f.eks. data.articles
  }, []);

  return (
    <div>
      <h1>Velkommen til nyhedssiden</h1>
      {/* Her mapper du over dine nyheder */}
    </div>
  );
}