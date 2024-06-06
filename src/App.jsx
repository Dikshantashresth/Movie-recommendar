import React, { useState, useEffect } from 'react';
import movies from './data.json'; // Assuming data.json is your JSON file
import Card from '../Components/Card';

const MyComponent = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const shuffledMovies = shuffleArray([...movies]);
    setMovieList(shuffledMovies);
  }, []);

  // Function to shuffle the movie array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movieList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return movieList.length - 1;
      }
      return prevIndex - 1;
    });
  };

  if (movieList.length === 0) {
    return <div>Loading...</div>;
  }

  const currentMovie = movieList[currentIndex];

  return (
    <>
      <div className="head">
        <h1>Movie Recommendation</h1>
      </div>

      <div>
        <Card
          className="cards"
          title={currentMovie.title}
          image={currentMovie.poster}
          director={currentMovie.director}
          cast={currentMovie.cast.join(", ")}
          budget={currentMovie.budget}
          review={currentMovie.review}
        />
      </div>
      <div className="btn">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default MyComponent;
