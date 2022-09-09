import './NewsCard.css';
import { useLocation } from 'react-router-dom';
import dateFormatter from '../../utils/dateformatter';


function NewsCard({card}) {

    const location = useLocation();
    const isSavedArticlesUrl = location.pathname === '/saved-news';

    const saveCard = (event) => {
        event.target.classList.add('newscard__button-selected');
    };

    return (
     <article className="newscard">
        <img className="newscard__image" src={card.urlToImage} alt="card"/>
        {isSavedArticlesUrl ? <button className='newscard__category'>{card.category}</button> : ''}
        {isSavedArticlesUrl ? (<><button className='delete__button'></button><p className="newscard__tooltip-saved">Remove from saved</p></>) : <button onClick={saveCard} className='newscard__button'></button>}
        <p className="newscard__tooltip-home">Sign in to save articles</p>
        <div className="newscard__content">
            <p className="newscard__date">{dateFormatter(card.publishedAt)}</p>
            <h2 className="newscard__title">{card.title}</h2>
            <p className="newscard__text">{card.description}</p>
            <p className="newscard__source">{card.source.name}</p>
        </div>
     </article>
    )
  }
  
  export default NewsCard;