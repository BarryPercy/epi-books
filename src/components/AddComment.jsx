import {Component} from 'react'
import {InputGroup,Form, Button} from 'react-bootstrap';
import { useState} from 'react'

const AddComment = (props)=>{
    const [comment,setComment] = useState('')
    const [rating, setRating] = useState(1)
    const postComment = async (data)=>{
            try{
                const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzUzNDQzMjgsImV4cCI6MTY3NjU1MzkyOH0.V-knhxg7TZ6gYZh0Fci9QRdZAK5GYP1aVJY9yRXZWPU"
                    },
                });
                if(res.ok){
                    props.updateCommentArea();
                }
            }catch(error){
                console.log(error);
            }
        }
    const handleClick = async () => {
        const data = {
            comment: comment,
            rate: rating,
            elementId: props.id,
        };
        postComment(data);
        
        setComment('');
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    };
    
    const handleRatingChange = (e) => {
        setRating(e.target.value)
    };

    return(
        <>  
            <h2>Add a Comment:</h2>
            <InputGroup className="mb-3">
                <InputGroup.Text>Comment</InputGroup.Text>
                <Form.Control
                    placeholder="e.g. I hate this book"
                    onChange={handleCommentChange}
                    value = {comment}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Rating</InputGroup.Text>
                <Form.Control as="select" onChange={handleRatingChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Control>
            </InputGroup>
            <Button variant="primary" type="submit" onClick={handleClick}>
                Submit
            </Button>

        </>
    )   
}

export default AddComment;