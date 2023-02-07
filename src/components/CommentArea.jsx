// import { Component } from 'react'
import { Spinner, Alert } from 'react-bootstrap'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
import { useState, useEffect } from 'react'

const CommentArea = (props)=>{
    const [comments,setComments] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false)
    const fetchComments = async () => {
        try {
            let res = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${props.id}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzUzNDQzMjgsImV4cCI6MTY3NjU1MzkyOH0.V-knhxg7TZ6gYZh0Fci9QRdZAK5GYP1aVJY9yRXZWPU"
                }
                })
            if(res.ok){
                let data = await res.json();
                setComments(data)
                setIsLoading(false)
            }
            else{
                setIsLoading(false)
                setIsError(true)
                
            }
        }catch(error){
            console.log(error);
        }
    }
    const updateComments=()=>{ 
        fetchComments();
        console.log("comment deleted or created!")
    }
    useEffect(()=>{
        fetchComments();
        console.log("mounting!")
    },[])
    useEffect(() => {
        fetchComments();
        console.log("updating!")
	},[props.id])
    return(
        <>
            <h2>Comments:</h2>
            {isLoading && (
                <Spinner animation="border" variant="success" />
            )}
            {isError && (
                <Alert variant="danger">Aww snap, we got an error!😨</Alert>
            )}
            <CommentsList comments={comments} id={props.id} updateCommentArea={updateComments}/>
            <AddComment id={props.id} updateCommentArea={updateComments}/>
        </>

    )
}

export default CommentArea;