import './SavedNewsHeader.css';

function SavedNewsHeader() {

    return (
     <section className="savednewsheader">
        <h1 className="savednewsheader__title">Saved articles</h1>
        <p className="savednewsheader__content">Elise, you have 5 saved articles</p>
        <p className="savednewsheader__details">By keywords: <span className="savednewsheader__keywords"> Nature, Yellowstone, and 2 other</span></p>
     </section>
    )
  }
  
  export default SavedNewsHeader;