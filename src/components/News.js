import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default function News (props) {

  const Capitalizefunction=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
   const [articles,setarticles]=useState([])
   const [page,setpage]=useState(1)
   const [loading,setloading]=useState(true)
   const [totalResults,settotalResults]=useState(0)
  
  const UpdateNews=async ()=>{
    props.setProgress(30)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parsedata = await data.json()
    props.setProgress(70)
    setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)
    props.setProgress(100)
  }
  useEffect(()=>{
    document.title=`${Capitalizefunction(props.category)} - NewsCastle`
    UpdateNews()
  },[])
  
 const fetchMoreData =async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fcd4d243d74540a3a484645d5e252d77&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1)
    let data = await fetch(url)
    let parsedata = await data.json()
    console.log(parsedata)
    setarticles(articles.concat(parsedata.articles))
    settotalResults({totalResults: parsedata.totalResults})
    setloading(false)
    }
    return (
      <div className="container my-3">
      <h1 className="text-center" style={{margin:'25px',marginTop:'90px'}}>
       NewsCastle - Top {Capitalizefunction(props.category)} Headlines
      </h1>
      <div className="text-center">
        {loading &&<Spinner/>}
      </div>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
      >
        <div className="container">
        <div className="row">
          {articles.map((element) => {
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



News.propTypes={
pageSize:PropTypes.number,
country:PropTypes.string,
category:PropTypes.string
}

News.defualtProps={
  pageSize:6,
  country:'us',
  category:'general'
}