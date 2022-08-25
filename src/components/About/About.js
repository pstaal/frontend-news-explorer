import './About.css';
import profilePicture from '../../images/peter.jpeg';

function About() {
    return (
      <section className="about">
        <img className="about__image" alt="peter staal" src={profilePicture}/>
        <div className="about__content">
            <h2 className="about__title">About the author</h2>
            <p className="about__text">My name is Peter Staal. I am a fullstack javascript developer currently living in Culemborg, the Netherlands. I have broad experience in Vanilla Javascript, React, Nodejs, Express and Mongodb.</p>
            <p className="about__text">This project is the final exercise from the Practicum Bootcamp for web developers. Everything here was handcoded from scratch.</p>
        </div>
      </section>
    )
  }
  
  export default About;