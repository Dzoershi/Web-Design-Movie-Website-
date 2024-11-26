// DislikeButton.jsx
import React, { useEffect, useState } from 'react';
import './DislikeButton.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

const DislikeButton = ({ movieId }) => {
  const [disliked, setDisliked] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    // Check if the movie is already disliked by consulting local storage
    const isMovieDisliked = localStorage.getItem(`disliked_${movieId}`);
    if (isMovieDisliked === 'true') {
      setDisliked(true);
    }
  }, [movieId]);

  const handleDislike = () => {
    setDisliked(!disliked);
    saveDislikeToDatabase(movieId); // Call the function to save the dislike in the database
    // Temporarily add the 'pulse' class for the pulsing effect
    setPulsing(true);
    setTimeout(() => {
      setPulsing(false);
    }, 500); // Duration of the pulse in milliseconds (here, 500ms)

    // Update local storage with the dislike state
    localStorage.setItem(`disliked_${movieId}`, !disliked);
  };

  const saveDislikeToDatabase = (movieId) => {
    if (!disliked) {
      axios
        .post(`http://localhost:8000/movies/disliked/${movieId}`)
        .then((response) => {
          console.log('Dislike saved to database');
        })
        .catch((error) => {
          console.error('Error saving dislike to database:', error);
        });
    } else {
      axios
        .post(`http://localhost:8000/movies/undisliked/${movieId}`)
        .then((response) => {
          console.log('Dislike removed from database');
        })
        .catch((error) => {
          console.error('Error removing dislike from database:', error);
        });
    }
  };

  return (
    <span
      className={`dislike-button ${disliked ? 'disliked' : ''} ${
        pulsing ? 'pulse' : ''
      }`}
      onClick={handleDislike}
    >
      <i className="fas fa-thumbs-down" />
    </span>
  );
};

export default DislikeButton;
