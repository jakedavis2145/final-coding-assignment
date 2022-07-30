import React from 'react'

export const Form = ({form, reviews, setForm, setReviews}) => {
    console.log(form)

    const handleChange = (e) => {
        const {name, value} =e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setReviews([...reviews, form])
        setForm({movie: "", review: "", id: null})
    }
    return (
        <form id='postForm' className='form' onSubmit={handleSubmit}>
            <h2>Create a post...</h2>
            <label htmlFor='movie'>Name</label>
            <input 
            type='text'
             placeholder=''
             id='movie'
             name='movie'
             autoComplete='off'
             value={form.movie}
             onChange={handleChange}
             />
             <br/>
            <label htmlFor='review'>Write your post here</label>
            <br/>
              <textarea 
              value={form.review}
              placeholder=''
              id='review'
              name='review'
              autoComplete='off'
              onChange={handleChange}
              />
              <button id='submit' type='submit'>Post</button>
        </form>
    )
  }

  export default Form
