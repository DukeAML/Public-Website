import React from 'react';
import './NewsItem.css'

class NewsItem extends React.Component {
  // constructor(props){
  //   super(props);

  //   this.imageRef = React.createRef();

  //   this.state = {spans:0};
  // }

  // componentDidMount(){
  //   this.imageRef.current.addEventListener('load', this.setSpans);
  // }

  // setSpans = () => {
  //   const height = this.imageRef.current.clientHeight;

  //   const spans = Math.ceil(height/10) + 1;

  //   this.setState({spans})
  // }
  render() {
    const { description, urlToImage, url, title, publishedAt } = this.props.article;
    var date = publishedAt.substring(5,7) + ' - ' + publishedAt.substring(8,10) + ' - ' + publishedAt.substring(0,4);
    return (
      <div className="general-panel" id={this.props.id} style={{position: 'relative'}}>
        <a className="article" href={url} alt={description} ref={this.imageRef} style={{backgroundImage: `url(${urlToImage})`}} />
        <div className="footpanel">
          <a className="title" id="nohover" href={url}>
            {title}
          </a>
          <div>
            <span id="date">
              {date}
            </span>
          </div>
        </div>
      </div>
    );

    // return (
    //   <div className="image" style={{gridRowEnd: `span ${this.state.spans}`}}>
    //     <a href={url}>
    //       <img
    //         ref={this.imageRef}
    //         alt={description}
    //         src={urlToImage}
    //       />
    //     </a>
    //     <div className="footpanel">
    //       <a className="articleTitle">
    //         {title}
    //       </a>
    //       <div>
    //         <span>
    //           {publishedAt}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default NewsItem;