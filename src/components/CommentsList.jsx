import { Component } from 'react'
import SingleComment from './SingleComment'


const CommentsList = (props)=>{
    const handleCommentChange = () => {
        props.updateCommentArea();
      }
    
    return(
        props.comments.map((comment) => {
            return (
                    <SingleComment key={comment._id} comment={comment} id={props.id} onCommentDelete={handleCommentChange}/>
            )
        })
    )
    
}

export default CommentsList;