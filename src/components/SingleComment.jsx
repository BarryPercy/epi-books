
import { Button } from 'react-bootstrap';

const SingleComment=(props)=>{
    const deleteComment = async ()=>{
        try{
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.comment._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzUzNDQzMjgsImV4cCI6MTY3NjU1MzkyOH0.V-knhxg7TZ6gYZh0Fci9QRdZAK5GYP1aVJY9yRXZWPU"
                },
            });
            if(res.ok){
                props.onCommentDelete();
            }
        }catch(error){
            console.log(error);
        }
    }
    
    return(
        <>
            <h4>{props.comment.author}</h4>
            <p>{props.comment.comment} {props.comment.rate}/5 <Button variant="danger" type="submit" onClick={() => deleteComment()}>
                Delete
            </Button></p>
            
        </>
    )
    
}

export default SingleComment;