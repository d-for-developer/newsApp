import React from "react";
import NewsItem from "./NewsItem";
import { Component } from "react/cjs/react.development";

export class News extends Component {
    

  constructor(){
    super();
    // console.log("This is default constructor")
    this.state = { 
      articles: [],
      loading: false
    }
  }


  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e2d07db037d745eaac773e02eda71370";
    let rowData = await fetch(url);
    let finalData = await rowData.json()
    this.setState({
      articles:finalData.articles
    })

  }

  render() {
    // console.log(this.state.articles)
    const {articles} = this.state;
    return (
      <>
        <div className="container mx-auto">
          <h1 className="text-center text-4xl my-4">Top Headings</h1>
          <div className="grid grid-cols-4 gap-1">
            { articles && articles.map((element)=>{
              {/* console.log(element); */}
             return <div className="flex" key={element.url}>
               <div className="basis mx-1 my-1">
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
              </div>
            })}
          </div>
       
    
        </div>
      </>
    );
  }
}

export default News;
