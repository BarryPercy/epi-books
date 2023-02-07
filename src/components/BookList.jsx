import React, { Component} from 'react';
import SingleBook from './SingleBook'
import { Container,Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from 'react'

const BookList = (props) =>{
  const [searchQuery, setSearchQuery] = useState('')
  const [bookSelected,setBookSelected] = useState(false)
  const [selectedAsin, setSelectedAsin] = useState('')
  let selectedBook = (asin)=>{
    setBookSelected(true)
    setSelectedAsin(asin)
  }

    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Container>
              <Row>
                {props.books
                  .filter((b) =>
                    b.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((book) => (
                        <Col md={6} key={book.asin}>
                          <SingleBook book={book} selectedAsin={selectedBook} selected = {book.asin===selectedAsin}/>
                        </Col>
                ))}
              </Row>
                
              
            </Container>
          </Col>
          <Col md={6}>
            {bookSelected && <CommentArea id={selectedAsin}/>} 
          </Col>
        </Row>
      </>
    )
  }

export default BookList
