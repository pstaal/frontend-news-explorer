import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import cards from "../../utils/cardData";

function SavedNews() {

    return (
        <section className="cardlist cardlist-savednews">
                <div className="cardlist__container cardlist-savednews">
                    {cards.map((card) => <NewsCard key={card.id} card={card}/>)}
                </div>
        </section>
    )
  }
  
  export default SavedNews;