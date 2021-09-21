import React,{useEffect, useState} from "react";
import axios from "axios";
import Image from "./Image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Set initial date to 7 days from today
let initDate = new Date();
initDate.setDate(initDate.getDate()-7)

export const Dashboard = () => {
   
    const [images, setImages] = useState([]);
    const [startDate,setStartDate] = useState(initDate)

   
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=ynbGeoG84jgPanHcN4L6RKKzRH19JOLKrZ4Ymn3N&start_date=${startDate.toISOString().split("T")[0]}`)//changes date string format
        .then(res => {
          setImages(res.data)
        })
        .catch(err => {
      
        })
      },[startDate])

      return(
       <main className = "container-fluid">
           <div>
               <label> Pick the start date:</label>
                <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                />
           </div>
           {
               images.length === 0?
               <h4>Loading... Please wait</h4> : 
               images.map((img,i) => {
                   return (<Image key = {i} details = {img} />)
               })
           }
       </main>
      )
}