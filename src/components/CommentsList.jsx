import { Component } from 'react'
import SingleComment from './SingleComment'

class CommentsList extends Component{
    state={

    }
    handleCommentChange = () => {
        this.props.updateCommentArea();
      }
    render(){
        return(
            this.props.comments.map((comment) => {
                return (
                        <SingleComment key={comment._id} comment={comment} id={this.props.id} onCommentDelete={this.handleCommentChange}/>
                )
            })
        )
    }
}

export default CommentsList;