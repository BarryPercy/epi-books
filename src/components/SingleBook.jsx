import React, { Component} from 'react';
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'
import { useState } from 'react'

const SingleBook = (props)=> {
  const [selected,setSelected] = useState(false)
  const [bookAsin,setbookAsin] = useState(props.book.asin)
  const onSelected = ()=>{
    props.selectedAsin(bookAsin);
  }
    return (
        <div>
            <Card
                onClick={() => {
                    onSelected()
                  }
                }
                style={{ outline: props.selected ? '3px solid red' : 'none'}}
            >
                <Card.Img variant="top" src={props.book.img} />
                <Card.Body>
                <Card.Title style={{ color: 'black' }}>
                    {props.book.title}
                </Card.Title>
                </Card.Body>
            </Card>
            <>
                {/* {this.state.selected && <CommentArea id={this.props.book.asin}/>} */}
            </>
        </div>
    )
  }

export default SingleBook
