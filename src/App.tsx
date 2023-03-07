import "./App.css";
import { reviews, properties } from "../data";
import { lastReviewer, showReveiwTotal } from "./utils";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [reviewText, setReviewText] = useState(()=>"");
  const [lastUser] = useState(lastReviewer(reviews));
  const [name] = useState("name" in lastUser ? (lastUser.name as string) : "user")
  const [isLoyal] = useState("loyaltyUser" in lastUser ? (lastUser.loyaltyUser as boolean) : false)
  let currentLocation: [string, string, number] = ["Ivanovo", "11:21", -2];
  
  useEffect(() => {
    setReviewText(showReveiwTotal(reviews.length, name, isLoyal));
  }, []);

  const cards = properties.map((obj, index) => {
    return <Card key={index} title={obj.title} imageUrl= {obj.image } />;
  });

  return (
    <div className="App">
      <div className="nav-bar">
        <div className="logo"></div>
        <h3 className="user-container">
          Welcome
          <span id="returning-user"></span>
          <span id="user"></span>
        </h3>
      </div>
      <div className="container">
        <h5 id="reviews">{reviewText}</h5>

        <h3>Other Properties recommended to you:</h3>
        <div className="properties">{cards}</div>
      </div>
      <div className="footer">
        {currentLocation[0] +
          " " +
          currentLocation[1] +
          " " +
          currentLocation[2] + " C"}
      </div>
    </div>
  );
}

export default App;
