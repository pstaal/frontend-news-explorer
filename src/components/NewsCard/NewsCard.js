import "./NewsCard.css";
import { useLocation } from "react-router-dom";
import dateFormatter from "../../utils/dateformatter";

function NewsCard({
  article,
  isLoggedIn,
  searchTerm,
  saveCard,
  deleteCard,
  articles,
  openModal,
}) {
  const location = useLocation();
  const isSavedArticlesUrl = location.pathname === "/saved-news";

  const isSaved = (article) => {
    return articles.some(
      (item) =>
        item.description === article.description && item.title === article.title
    );
  };

  const toggleSave = (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      openModal();
      return;
    }
    if (isSaved(article)) {
      const articleToBeDeleted = articles.filter(
        (item) =>
          item.description === article.description &&
          item.title === article.title
      );
      deleteCard(articleToBeDeleted[0].id);
      return;
    }
    const { title, description, publishedAt, source, url, urlToImage } =
      article;
    saveCard(
      searchTerm,
      title,
      description,
      publishedAt,
      source.name,
      url,
      urlToImage
    );
  };

  const handleDelete = (event) => {
    console.log(deleteCard);
    event.preventDefault();
    deleteCard(article.id);
  };

  return (
    <article className="newscard">
      <img className="newscard__image" src={article.urlToImage} alt="card" />
      {isSavedArticlesUrl ? (
        <button className="newscard__category">{article.category}</button>
      ) : (
        ""
      )}
      {isSavedArticlesUrl ? (
        <>
          <button onClick={handleDelete} className="delete__button"></button>
          <p className="newscard__tooltip-saved">Remove from saved</p>
        </>
      ) : (
        <button
          onClick={toggleSave}
          className={`newscard__button ${
            isSaved(article) ? "newscard__button-selected" : ""
          }`}
        ></button>
      )}
      {!isLoggedIn && (
        <p className="newscard__tooltip-home">Sign in to save articles</p>
      )}
      <div className="newscard__content">
        <p className="newscard__date">{dateFormatter(article.publishedAt)}</p>
        <h2 className="newscard__title">{article.title}</h2>
        <p className="newscard__text">{article.description}</p>
        <p className="newscard__source">{article.source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
