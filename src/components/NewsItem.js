import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageurl,newsurl}=this.props;
    return (
      <div>
        <div className="card" style={{width: '20rem'}}>
                    <img src={!imageurl?'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2061691624.jpg?c=16x9&q=w_800,c_fill':imageurl} alt='...'/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
      </div>
    )
  }
}
