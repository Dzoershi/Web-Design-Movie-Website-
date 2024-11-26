// LikeButton.jsx
import React, { useEffect, useState } from 'react';
import './LikeButton.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

const LikeButton = ({ movieId }) => {
  const [liked, setLiked] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    // Check if the movie is already liked by consulting local storage
    const isMovieLiked = localStorage.getItem(`liked_${movieId}`);
    if (isMovieLiked === 'true') {
      setLiked(true);
    }
  }, [movieId]);

  const handleLike = () => {
    setLiked(!liked);
    saveLikeToDatabase(movieId); // Call the function to save the like in the database
    // Temporarily add the 'pulse' class for the pulsing effect
    setPulsing(true);
    setTimeout(() => {
      setPulsing(false);
    }, 500); // Duration of the pulse in milliseconds (here, 500ms)

    // Update local storage with the like state
    localStorage.setItem(`liked_${movieId}`, !liked);
  };

  const saveLikeToDatabase = (movieId) => {
    if (!liked) {
      axios
        .post(`http://localhost:8000/movies/liked/${movieId}`)
        .then((response) => {
          console.log('Like saved to database');
        })
        .catch((error) => {
          console.error('Error saving like to database:', error);
        });
    } else {
      axios
        .post(`http://localhost:8000/movies/unliked/${movieId}`)
        .then((response) => {
          console.log('Like removed from database');
        })
        .catch((error) => {
          console.error('Error removing like from database:', error);
        });
    }
  };

  return (
    <span
      className={`like-button ${liked ? 'liked' : ''} ${
        pulsing ? 'pulse' : ''
      }`}
      onClick={handleLike}
    >
      <i className="fas fa-thumbs-up" />
    </span>
  );
};

export default LikeButton;
