import React, {useState} from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from "../components/Form";
import ReviewList from "../components/ReviewList";


function Blog() {
    const[reviews, setReviews] =useState([])
    const [form, setForm] = useState({movie: "", review: "", id: null })
    return (
      <div className="Blog">
        <Form 
        form={form} 
        reviews={reviews} 
        setForm={setForm} 
        setReviews={setReviews} 
        />
  
        <ReviewList reviews={reviews} />
      </div>
    );
  }
  
  export default Blog;