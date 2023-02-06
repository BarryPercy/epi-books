import React, { Component} from 'react';
import SingleBook from './SingleBook'
import { Container,Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchQuery: '',
    bookSelected: false,
    selectedAsin: '',
  }
  selectedBook = (asin)=>{
    this.setState({
      bookSelected:true,
      selectedAsin: asin,
    })
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Container>
              <Row>
                {this.props.books
                  .filter((b) =>
                    b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
                  )
                  .map((book) => (
                        <Col md={6} key={book.asin}>
                          <SingleBook book={book} selectedAsin={this.selectedBook} selected = {book.asin===this.state.selectedAsin}/>
                        </Col>
                ))}
              </Row>
                
              
            </Container>
          </Col>
          <Col md={6}>
            {this.state.bookSelected && <CommentArea id={this.state.selectedAsin}/>} 
          </Col>
        </Row>
      </>
    )
  }
}

export default BookList
