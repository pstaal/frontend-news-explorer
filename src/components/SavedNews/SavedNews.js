import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ articles, deleteCard }) {
  return (
    <section className="cardlist cardlist-savednews">
      <ul className="cardlist__container cardlist-savednews">
        {articles.length > 0 ? (
          articles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              deleteCard={deleteCard}
            />
          ))
        ) : (
          <></>
        )}
      </ul>
    </section>
  );
}

export default SavedNews;
