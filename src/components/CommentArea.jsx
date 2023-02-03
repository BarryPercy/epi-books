import { Component } from 'react'
import { Spinner, Alert } from 'react-bootstrap'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CommentArea extends Component{
    state = {
        comments:[],
        isLoading:true,
        isError:false,
    }
    fetchComments = async () => {
        try {
            let res = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzUzNDQzMjgsImV4cCI6MTY3NjU1MzkyOH0.V-knhxg7TZ6gYZh0Fci9QRdZAK5GYP1aVJY9yRXZWPU"
                }
                })
            if(res.ok){
                let data = await res.json();
                this.setState({
                    comments:data,
                    isLoading:false,
                })
                console.log(data)
            }
            else{
                this.setState({
                    isLoading:false,
                    isError:true,
                })
                
            }
        }catch(error){
            console.log(error);
        }
    }
    componentDidMount() {
        this.fetchComments();
      }
    render(){
        return(
            <>
                <h2>Comments:</h2>
                {this.state.isLoading && (
                    <Spinner animation="border" variant="success" />
                )}
                {this.state.isError && (
                    <Alert variant="danger">Aww snap, we got an error!😨</Alert>
                )}
                <CommentsList comments={this.state.comments} id={this.props.id}/>
                <AddComment id={this.props.id}/>
            </>

        )
    }
}

export default CommentArea;