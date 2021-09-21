import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Image = (props) => {
const {date,explanation,media_type,title,url} = props.details;
const [liked,setLiked] = useState(false)

const toggleLike = (e) => {
   setLiked(!liked)
}

return(
    <section className = "card">
     {
        //  Check if photo of the day is img or video
         media_type === "image" ? 
        <div>
             <img src = {url} alt = {title} /> 
        </div> :
        <div>
         <iframe src = {url} title = {title} >  </iframe>
        </div>
     }
     <div className = "card-body">
     <h3>{title}</h3>
     <p>{date}</p>
     <p>{explanation}</p>
     <button className = "btn btn-outline-secondary" onClick = {toggleLike}>
         {liked ? "Unlike " : "Like " } <FontAwesomeIcon icon={faHeart} style = {{color: liked ?"red":""}}/> 
        </button> 
     </div>
    </section>
)
}

export default Image