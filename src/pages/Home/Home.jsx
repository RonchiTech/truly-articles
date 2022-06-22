import React, { Fragment, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

import Card from '../../components/Cards/Card';

import './home.css';

const url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=0200a7ecc67a44559ee8895807f726fa';

function Home() {
  const [data, loading, error, reFetch] = useFetch(url);

  let items;

  const onLoadMoreHandler = () => {
    console.log('clicked', data);
    items = data;
  };
  const dataLimited = [...data]
  items = dataLimited.slice(0, 20);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Fragment>
      <div className="home">
        <h1>Truly Articles</h1>
      </div>
      <div className="article">
        {items ? (
          items.map((news) => {
            const { title, description, urlToImage } = news;
            return (
              <Card
                key={title}
                title={title}
                description={description}
                imageUrl={urlToImage}
              />
            );
          })
        ) : (
          <h2>No News Found</h2>
        )}
      </div>
      {/* <div className="load-more-btn">
        <button onClick={onLoadMoreHandler}> Load more...</button>
      </div> */}
    </Fragment>
  );
}

export default Home;
