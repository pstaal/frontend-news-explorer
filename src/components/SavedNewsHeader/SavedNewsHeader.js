import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

import stringFormatter from '../../utils/stringFormatter';

function SavedNewsHeader( {articles} ) {

    const value = useContext(CurrentUserContext);

    return (
     <section className="savednewsheader">
         <h1 className="savednewsheader__title">Saved articles</h1>
         <p className="savednewsheader__content">{value.name}, you have {articles.length} saved articles</p>
         <p className="savednewsheader__details">By keywords: <span className="savednewsheader__keywords">{stringFormatter(articles)}</span></p>
     </section>
    )
  }
  
  export default SavedNewsHeader;