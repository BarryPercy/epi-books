import { Component } from 'react'
import SingleComment from './SingleComment'

class CommentsList extends Component{
    state={

    }
    handleCommentDelete = () => {
        this.setState({});
      }
    render(){
        return(
            this.props.comments.map((comment) => {
                return (
                        <SingleComment key={comment._id} comment={comment} id={this.props.id} onCommentDelete={this.handleCommentDelete}/>
                )
            })
        )
    }
}

export default CommentsList;