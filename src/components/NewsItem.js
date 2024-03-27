import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: '20rem' }}>
          <img src={!imageurl ? 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2061691624.jpg?c=16x9&q=w_800,c_fill' : imageurl} alt='...' />
          <div className="card-body">
          <span className="badge text-bg-success" style={{ width:'30%',zIndex:1}}>{source}</span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p>By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</p>
            <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
