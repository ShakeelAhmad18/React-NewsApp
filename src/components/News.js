import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fcd4d243d74540a3a484645d5e252d77&page=1&pageSize=18`;
    let data = await fetch(url)
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults
    })
  }
  handlepreclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fcd4d243d74540a3a484645d5e252d77&page=${this.state.page - 1}&pageSize=18`;
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles
    })
  }
  handlenextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fcd4d243d74540a3a484645d5e252d77&page=${this.state.page + 1}&pageSize=18`;
      let data = await fetch(url)
      let parsedata = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles
      })
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsCastle - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col md-3 my-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ''}
                description={element.description ? element.description.slice(0, 57) : ''}
                imageurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlepreclick} className="btn btn-dark">&larr; Previous</button>
          <button type="button" onClick={this.handlenextclick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
