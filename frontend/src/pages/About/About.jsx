import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our movie website! We are passionate about movies and
          committed to providing you with the best experience possible. Our goal
          is to make it easy for you to discover new films, track your
          favorites, and enjoy the art of cinema.
        </p>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to connect movie enthusiasts from all around the
            world. We strive to create a comprehensive platform where users can
            find detailed information about their favorite films, read reviews,
            and stay updated with the latest releases.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Extensive movie database with detailed information</li>
            <li>User reviews and ratings</li>
            <li>Personalized recommendations</li>
            <li>Latest news and updates about upcoming movies</li>
            <li>Engaging community for movie discussions</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Meet the Team</h2>
          <div className="team-member">
            <h3>Younes Boumoussou</h3>
            <p>Frontend Developper</p>
          </div>
          <div className="team-member">
            <h3>Insaf El Omari Alaoui</h3>
            <p>Backend Developper</p>
          </div>
          <div className="team-member">
            <h3>Mouad Razôki</h3>
            <p>Database Developper</p>
          </div>
        </div>

        <div className="about-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, feedback, or suggestions, feel free to{' '}
            <a href="mailto:contact@moviewebsite.com">contact us</a>. We'd love
            to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
