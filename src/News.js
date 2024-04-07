import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner.js'


const News=(props)=>{

    const [pagesize,setPagesize] = useState(5);
    const [page,setpage] = useState(1);
    const [countrys,setCountrys] = useState("us");
    const [article,setarticle] = useState([]);
    const [totalResults,setTotalResults] = useState(0);
    const [category,setCategory] = useState('general');
    const [loading,setLoading] = useState(false);

    const updateNews = async ()=>{
        setLoading(true);
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${countrys}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pagesize=${pagesize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parseddata = await data.json();
        props.setProgress(70);
        setarticle(parseddata.articles)
        setTotalResults(parseddata.totalResults)
        setLoading(false)
        props.setProgress(100);
        printData(parseddata.totalResults,parseddata.articles.length,url)
        printData(page)
    }

    useEffect(()=>{
        updateNews()
    },[])


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${countrys}&category=${props.category}&apiKey=${props.api_key}&page=${page+1}&pagesize=${pagesize}`;
        setpage(page+1);
        let data = await fetch(url);
        let parseddata = await data.json();
        setarticle(article.concat(parseddata.articles))
        printData(page)
    }

    const printData = (a="",b="",c="") =>{
        console.log(a , b ,c);
    }

    return (
        <>
            <div id="scrollableDiv" style={{marginTop:'50px'}}>
                <InfiniteScroll dataLength={article?article.length:0} next={fetchMoreData} hasMore={!((article?article.length:0) === totalResults)}loader={<Spinner/>}>
                    <div className='container'>
                        <div className="row">
                            {article && article.map((element,index) => {
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
};

News.propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string
};

export default News;