import React, { Component} from 'react';
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
        <div>
            <Card
                onClick={() => this.setState({ selected: !this.state.selected })}
                style={{ outline: this.state.selected ? '3px solid red' : 'none',width:"80%"}}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                <Card.Title style={{ color: 'black' }}>
                    {this.props.book.title}
                </Card.Title>
                </Card.Body>
            </Card>
            <>
                {this.state.selected && <CommentArea id={this.props.book.asin}/>}
            </>
        </div>
    )
  }
}

export default SingleBook
