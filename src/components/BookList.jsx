import React, { useState } from 'react';
import SingleBook from "./SingleBook";
import { Container, Row, InputGroup, Form} from 'react-bootstrap'

// searchInput.addEventListener("keyup", ()=>{
//     let search = searchInput.value;
//     if(search.length<3){
//         renderBooks(books);
//     }else{
//         newBooks = books.filter(contains =>contains.title.toLowerCase().includes(search.toLowerCase()))
//         renderBooks(newBooks);
//     }

// });

function BookList(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(props.Books);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setFilteredBooks(
          props.Books.filter((book) => book.title.toLowerCase().includes(searchTerm))
        );
      };
    return (
        <Container>
            <Row>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        id="search-input"
                        onChange={handleSearch}
                        value = {searchTerm}
                    />
                </InputGroup>
            </Row>
            <Row>
                {filteredBooks.map((book)=>{
                    return(
                        <SingleBook key={book.asin} SingleBook={book}></SingleBook>
                    )
                })}
            </Row>
        </Container>
    )
  }
  
  export default BookList;