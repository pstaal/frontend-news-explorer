import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function SavedNewsHeader( {articles} ) {

    const value = useContext(CurrentUserContext);

    const keywordsArray = articles.map((article) => { return article.category });
    const uniqueKeywordsSet = new Set(keywordsArray);
    const uniqueKeywordsArray = [...uniqueKeywordsSet];
    let string;
    if (uniqueKeywordsArray.length < 3) {
        string = uniqueKeywordsArray.join(', ');
    } else {
        string = `${uniqueKeywordsArray[0]}, ${uniqueKeywordsArray[1]}, and ${uniqueKeywordsArray.length -2} other`
    }

    return (
     <section className="savednewsheader">
         <h1 className="savednewsheader__title">Saved articles</h1>
         <p className="savednewsheader__content">{value.name}, you have {articles.length} saved articles</p>
         <p className="savednewsheader__details">By keywords: <span className="savednewsheader__keywords">{string}</span></p>
     </section>
    )
  }
  
  export default SavedNewsHeader;