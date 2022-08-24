import SearchForm from '../SearchForm/SearchForm';
import './Hero.css';

function Hero(props) {
    return (
      <section className="hero">
        <div className="hero__content">
            <h1 className="hero__title">What's going on in the world?</h1>
            <p className="hero__text">Find the latest news on any topic and save them in your personal account.</p>
            <SearchForm onSubmit={props.onSubmit}/>
            <div className={`hero__search-error ${props.searchError ? "hero__search-error-show" : ""}`}>Please enter a search term first!</div>
        </div>
      </section>
    )
  }
  
  export default Hero;