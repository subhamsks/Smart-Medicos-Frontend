import React, { useState,useEffect } from 'react'
import "./Updates.css"
import axios from 'axios'
import News from './News'
import LoadingSpinner from '../../UI/LoadingSpinner'
const Updates = () => {

    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(null);
    useEffect(()=>{
     const getNews = async () => {
        setIsLoading(true);
        setIsError(null);
        try{
            const resData = await  axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=669af399afe7492990e504b449a337c0&pageSize=10");
            setIsLoading(false);
            setData(resData.data.articles);
            console.log(resData.data.articles);
          

        }catch(err){
            setIsLoading(false);
            setIsError(err.message);
        }

          }
          getNews();
    },[]);
   

  return (
    <>
    {isLoading && <LoadingSpinner />}
    <div className='Updates'>
       {isError && !isLoading && <p className='error'>{isError}</p>}
      
       {!isLoading && !isError && data && data.map((news,index)=>{
        return <News title={news.title} url={news.url} author={news.author} publishedAt={news.publishedAt} key={index} imgUrl={news.urlToImage}/>

       })}
   
      
    </div>
    </>
  )
}

export default Updates