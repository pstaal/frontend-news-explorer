import './NewsCardList.css';
import notFound from '../../images/not-found.svg';
import NewsCard from '../../components/NewsCard/NewsCard';
import React from 'react';

function NewsCardList(props) {

    const [counter, setCounter] = React.useState(3);
  
    if (props.cardData === null) {
        return (
            <></>
        )
    }

    const filterArray = (array, number) => {
        let newArray = [];
        for (let i = 0; i < number; i++){
            if(array[i]) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

    if (props.cardData.length > 0) {
        const filteredCards = filterArray(props.cardData, counter);
        const showButton = filteredCards.length !== props.cardData.length;

        return (
            <section className="cardlist">
                <div className="cardlist__container">
                    <h2 className="cardlist__title">Search results</h2>
                    {filteredCards.map((card, index) => <NewsCard deleteCard={props.deleteCard} saveCard={props.saveCard} searchTerm={props.searchTerm} isLoggedIn={props.isLoggedIn} key={index} article={card}/>)}
                </div>
                {showButton && <button className="cardlist__button" onClick={() => setCounter(counter + 3)}>Show more</button>}
            </section>
        )
    }

    if(props.apiError) {
        return (
            <section className="nocards">
                <div className="nocards__content">
                    <img src={notFound} alt="nothing found" className="nocards__image" />
                    <p className="nocards__text">Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</p>
                </div>
            </section>

        )
    }

    if(props.cardData.length === 0) {
        return (
            <section className="nocards">
                <div className="nocards__content">
                    <img src={notFound} alt="nothing found" className="nocards__image" />
                    <h1 className="nocards__title">Nothing found</h1>
                    <p className="nocards__text">Sorry, but nothing matched your search terms.</p>
                </div>
            </section>
        )
    }

   

}
  
  export default NewsCardList;