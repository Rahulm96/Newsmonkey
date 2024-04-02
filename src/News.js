import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner.js'


export default class News extends Component {

    PropTypes = {
        pagesize: PropTypes.number,
        country: PropTypes.string,
    }

    constructor(props) {
        super(props);
        const { country, category, pagesize } = this.props;
        this.state = {
            pagesize: pagesize|| 5,
            page: 1,
            countrys: country || 'us',
            article: null,
            totalResults: 0,
            category: category|| 'general'
        }
    }


    async componentDidMount() {
        console.log(this.state.pagesize)
        console.log(this.state.category)
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.countrys}&category=${this.state.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pagesize=${this.state.pagesize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseddata = await data.json();
        this.props.setProgress(70);
        this.setState({
            article: parseddata.articles,
            totalResults: parseddata.totalResults
        })
        this.props.setProgress(100);
        console.log(parseddata)
        
    }

    fetchMoreData = async () => {
        console.log("Fetching more")
        console.log(this.state.page)
        this.setState((previous)=>({
           page: previous.page+1
        }), async ()=>{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.state.countrys}&category=${this.state.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pagesize=${this.state.pagesize}`;
            console.log(this.state.page)
            let data = await fetch(url);
            let parseddata = await data.json();
            console.log(parseddata);
            this.setState(previousState => ({
                article: previousState.article.concat(parseddata.articles)
            }));
            console.log(this.state.article.length)
        });
    }

    render() {
        return (
            <>
                <div id="scrollableDiv">
                    <InfiniteScroll dataLength={this.state.article?this.state.article.length:0} next={this.fetchMoreData} hasMore={!((this.state.article?this.state.article.length:0) === this.state.totalResults)}loader={<Spinner/>}>
                        <div className='container '>
                            <div className="row">
                                {this.state.article && this.state.article.map((element,index) => {
                                    return <div className="col col-4 my-2" key={index}>
                                        <Newsitem src={element.urlToImage} title={element.title} description={element.description} url={element.url} />
                                    </div>
                                })}

                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}
