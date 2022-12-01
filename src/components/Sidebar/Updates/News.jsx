import { Link } from "react-router-dom";
import "./News.css";
const News = (props)=>{
    const {title,author,publishedAt,url,imgUrl} = props;
return (
    <div className="update-news">
    <a href={url} target="_blank">  <h3>{title}</h3>  </a>
   <h4>{author ? author : "Unknown Source"} </h4>
   
   <h4>{publishedAt ? new Date(publishedAt).toDateString() : "Unknown Date"}</h4>
   <div className="img">
     <img src={imgUrl}/>
   </div>
   
    </div>
)
}
export default News;