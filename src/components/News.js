import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defualtProps={
            pageSize:6,
            country:'us',
            category:'general'
  }

  static propTypes={
        pageSize:PropTypes.number,
        country:PropTypes.string,
        category:PropTypes.string
  }
  Capitalizefunction=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading:false,
      totalResults:0
    }
    document.title=`${this.Capitalizefunction(this.props.category)} - NewsCastle`
  }
  async UpdateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcd4d243d74540a3a484645d5e252d77&page=${this.state.page}&pageSize=${this.props.pageSize}`;
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
  async componentDidMount() {
    this.UpdateNews()
  }
  handlepreclick = async () => {
   this.setState({
    page:this.state.page-1
   })
   this.UpdateNews()
  }
  handlenextclick = async () => {
    this.setState({
      page:this.state.page + 1
    })
    this.UpdateNews()
  }

  fetchMoreData =async () => {
    this.setState({page:this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcd4d243d74540a3a484645d5e252d77&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({
      articles:this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
    })
    }
  render(props) {
    return (
      <div className="container my-3">
      <h1 className="text-center">
       NewsCastle - Top {this.Capitalizefunction(this.props.category)} Headlines
      </h1>
      <div className="text-center">
        {this.state.loading &&<Spinner/>}
      </div>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
      >
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col md-3 my-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ''}
                description={element.description ? element.description.slice(0, 57) : ''}
                imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
