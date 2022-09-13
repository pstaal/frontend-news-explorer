import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({articles}) {
    return (
        <section className="cardlist cardlist-savednews">
                <ul className="cardlist__container cardlist-savednews">
                    {articles.length > 0 ? articles.map((article) => <NewsCard key={article._id} article={article}/>) : <></>}
                </ul>
        </section>
    )
  }
  
  export default SavedNews;