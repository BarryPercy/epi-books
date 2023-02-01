import { Component } from 'react'
import {Card} from 'react-bootstrap'


class SingleBook extends Component {
    state={
        selected:true,
    }
    handleClick=()=>{
        // if(this.state.selected){
        //     this.setState({
        //         selected:false,
        //     })
            
        // }else{
        //     this.setState({
        //         selected:true,
        //     })
        // }
    }
    render(){
        return(
            <Card onClick={this.handleClick()} className={`col-lg-3 col-md-4 col-6 mb-3 col ${this.state.selected ? 'red-border' : ''}`}>
                <Card.Img variant="top" src={this.props.SingleBook.img} />
                <Card.Body>
                    <Card.Title>{this.props.SingleBook.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
  }
  
  export default SingleBook;