import React from "react";
import NewsItem from "./NewsItem";
import { Component } from "react/cjs/react.development";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps = {
      pageSize: 12,
      country: 'in',
      category: 'general'
  }

  static propsTypes = {
      pageSize: PropTypes.number.isRequired,
      country: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
  }

  constructor() {
    super();
    // console.log("This is default constructor")
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2d07db037d745eaac773e02eda71370&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
      this.setState({
        loading:true
      });
    let rowData = await fetch(url);
    let finalData = await rowData.json();
    this.setState({
      articles: finalData.articles,
      totalResults: finalData.totalResults,
      loading:false
    });
  }

  prevClick = async ()=>{
    console.log("Previous");
      let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2d07db037d745eaac773e02eda71370&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
      this.setState({
        loading:true
      });
    let rowData = await fetch(url);
    let finalData = await rowData.json();
    this.setState({
      articles: finalData.articles,
      totalResults: finalData.totalResults,
      loading:false
    });

  }

  nextClick = async ()=>{
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.setState.pageSize))){

      let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2d07db037d745eaac773e02eda71370&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({
      loading:true
    });
    let rowData = await fetch(url);
    let finalData = await rowData.json();
    this.setState({
      page:this.state.page + 1,
      articles: finalData.articles,
      loading:false

    });

    }
  }



  render() {
    // console.log(this.state.articles)
    const { articles } = this.state;
    return (
      <>
        <div className="container mx-auto">
          <h1 className="text-center text-4xl my-4">Top Headings</h1>
          {this.state.loading && <Spinner/>}
          <div className="grid grid-cols-4 gap-1">
            {articles &&
              articles.map((element) => {
                return (
                  <div className="flex" key={element.url}>
                    <div className="basis mx-1 my-1">
                      <NewsItem
                        title={element.title?element.title.slice(0, 45):''}
                        description={element.description?element.description.slice(0, 88):''}
                        imgUrl={element.urlToImage?element.urlToImage:"https://www.sketchappsources.com/resources/source-image/news-iOS9-glmrvn.png"}
                        newsUrl={element.url}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="container flex justify-between">
            <button
              disabled={this.state.page<=1}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
              onClick={this.prevClick}>
              &larr; Previous{" "}
            </button>
            <button
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
              onClick={this.nextClick}>
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

