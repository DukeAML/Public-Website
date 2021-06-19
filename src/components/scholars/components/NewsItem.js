import React from 'react';
import './NewsItem.css';

class NewsItem extends React.Component {
  render() {
    const { description, urlToImage, url, title, publishedAt } =
      this.props.article;
    var date =
      publishedAt.substring(5, 7) +
      ' - ' +
      publishedAt.substring(8, 10) +
      ' - ' +
      publishedAt.substring(0, 4);
    return (
      <div
        className="general-panel"
        id={this.props.id}
        style={{ position: 'relative' }}>
        <a
          className="article"
          href={url}
          alt={description}
          ref={this.imageRef}
          style={{ backgroundImage: `url(${urlToImage})` }}
        />
        <div className="footpanelScholars">
          <a className="titleScholars" id="nohover" href={url}>
            {title}
          </a>
          <div>
            <span id="date">{date}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
