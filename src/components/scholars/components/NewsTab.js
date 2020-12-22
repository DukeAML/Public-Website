import React from 'react';
import './NewsTab.css'
import NewsItem from './NewsItem';



const NewsTab = (props) => {
  const articles = props.articles.map((article, index) => {
    return <NewsItem id={index} article={article} />
  });
  
    return (
    <div className="news-tab">
      <div id="panel1">
        {articles[0]}
      </div>
      <div id="panel2">
        {articles[1]}
      </div>
      <div id="panel3">
        {articles[2]}
      </div>
      <div className="large" id="panel4">
        {articles[3]}
      </div>
      <div id="panel5">
        {articles[4]}
      </div>
      <div id="panel6">
        {articles[5]}
      </div>
      <div id="panel7">
        {articles[6]}
      </div>
      <div id="panel8">
        {articles[7]}
      </div>
    </div>
  );
}

export default NewsTab;