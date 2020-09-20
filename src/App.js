import React, { useState } from "react";
import "./App.css";

function App() {

  const slides = [
    {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises.",
    },
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush.",
    },
    {
      title: "Next, 20 squats",
      text: "Squats are important. Remember to keep your back straight.",
    },
    {
      title: "Finally, 15 sit-ups",
      text: "Slightly bend your knees. Remember about full range of motion.",
    },
    {
      title: "Great job!",
      text: "You made it, have a nice day and see you next time!",
    },
  ];

  const [slide, saveSlide] = useState(0)

  console.log(slide)
  const prevSlide = () => {
    saveSlide(slide - 1)
  }
  const nextSlide = () => {
    saveSlide(slide + 1)
  }
  const resetSlide = () => {
    saveSlide(0)
  }


  return (
    <div className="main">
      <div className="Botones">
        <button className="big-button" onClick={resetSlide} disabled={slide === 0}>Reset</button>
        <button className="big-button" onClick={prevSlide} disabled={slide === 0}>Prev</button>
        <button className="big-button" onClick={nextSlide} disabled={slide === 4}>Next</button>
      </div>
      <div className="card">
        <h3>{slides[slide].title}</h3>
        <p>{slides[slide].text}</p>
      </div>
    </div>
  );
}

export default App;
