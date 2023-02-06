import React, { Component} from 'react';
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
    bookAsin: this.props.book.asin,
  }
  onSelected(){
    this.props.selectedAsin(this.state.bookAsin);
  }
  render() {
    return (
        <div>
            <Card
                onClick={() => {
                    this.onSelected()
                  }
                }
                style={{ outline: this.props.selected ? '3px solid red' : 'none'}}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                <Card.Title style={{ color: 'black' }}>
                    {this.props.book.title}
                </Card.Title>
                </Card.Body>
            </Card>
            <>
                {/* {this.state.selected && <CommentArea id={this.props.book.asin}/>} */}
            </>
        </div>
    )
  }
}

export default SingleBook
