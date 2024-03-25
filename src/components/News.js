import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defualtProps={
            pageSize:6,
            country:'pak',
            category:'general'
  }

  static propTypes={
        pageSize:PropTypes.number,
        country:PropTypes.string,
        category:PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcd4d243d74540a3a484645d5e252d77&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading:false
    })
  }
  handlepreclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcd4d243d74540a3a484645d5e252d77&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      loading:false
    })
  }
  handlenextclick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcd4d243d74540a3a484645d5e252d77&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedata = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
        loading:false
      })
  }}
  render() {
    return (
      <div className="container my-3">
      <h1 className="text-center">
       NewsCastle - Top Headlines
      </h1>
      <div className="text-center">
        {this.state.loading &&<Spinner/>}
      </div>
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col md-3 my-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ''}
                description={element.description ? element.description.slice(0, 57) : ''}
                imageurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlepreclick} className="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handlenextclick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
