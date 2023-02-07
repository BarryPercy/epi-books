import React, { Component} from 'react';
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'
import { useState } from 'react'

const SingleBook = (props)=> {
  const onSelected = ()=>{
    props.selectedAsin(props.book.asin);
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
