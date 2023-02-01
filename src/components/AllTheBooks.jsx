import { Component } from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import items from '../data/fantasy.json'

class AllTheBooks extends Component {
    state = {
        selectedBook:null,
    }
    render(){
        return(
            <Container>
                <Row className ="mt-3 justify-content-center">
                    {items.map((book)=>{
                        return(
                        <Card className="col col-lg-3 col-md-4 col-6 mb-3">
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    <p>£{book.price}</p>
                                    <p>{book.category}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        )
                    })
                        
                    }
                </Row>
            </Container>
        )
    }
}
export default AllTheBooks