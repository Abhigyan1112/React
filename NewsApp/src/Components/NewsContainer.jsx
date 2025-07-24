import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class NewsContainer extends Component {
    
    static defaultProps = {
        country:'us',
        pageSize:10,
        category:'general'
    }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    constructor(){
        super();
        this.state={
            articles:[],
            loading:true,
            page:1,
            ResultSize:35
        };
    }

    update = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0a46e67f306440ab23ae5ba8d8dc09c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let response = await fetch(url);
        let data = await response.json();
        this.setState({articles : data.articles, loading:false, page: this.state.page});
    }

    prevPageOnClick = async () =>{
        this.setState({page :this.state.page-1});
        this.update();
    }

    nextPageOnClick = async () =>{
        this.setState({page: this.state.page+1});
        this.update();
    }

  render() {
    return (
        <div className="container">
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,150):""} newsURL={element.url} imageURL={element.urlToImage} author={element.author} date={element.publishedAt}/>
            </div>
            })}
        </div>
        <div  className="d-flex justify-content-between my-3 ">
            <button type="button" disabled={this.state.page<=1} onClick={this.prevPageOnClick} className="btn btn-danger">← Prev</button>
            <button type="button" disabled={this.state.page+1>=Math.ceil(this.state.ResultSize/this.props.pageSize)} onClick={this.nextPageOnClick} className="btn btn-danger">Next →</button>
        </div>
      </div>
    )
  }

  async componentDidMount(){
    this.update();
  }
}

export default NewsContainer
