import {Component} from 'react'
import { Button } from 'react-bootstrap';

class SingleComment extends Component{
    state={
        author: this.props.comment.author,
        comment: this.props.comment.comment
    }
    deleteComment = async (data)=>{
        try{
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.comment._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzUzNDQzMjgsImV4cCI6MTY3NjU1MzkyOH0.V-knhxg7TZ6gYZh0Fci9QRdZAK5GYP1aVJY9yRXZWPU"
                },
            });
            if(res.ok){

                this.props.onCommentDelete();
            }
        }catch(error){
            console.log(error);
        }
    }
    render(){
        return(
            <>
                <h4>{this.state.author}</h4>
                <p>{this.state.comment} {this.props.comment.rate}/5 <Button variant="danger" type="submit" onClick={() => this.deleteComment()}>
                    Delete
                </Button></p>
                
            </>
        )
    }
}

export default SingleComment;