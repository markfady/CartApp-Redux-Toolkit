import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../rtk/slices/productsSlice';

export default function Products() {
    const products=useSelector((state)=>state.products);
    console.log(products)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    },[]);
return (
    <Container>
     <Row>
        {products.map((product)=>(
            <Col  key={product.id}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
        </Col>
        ))
    }   
    </Row> 
</Container>

)
}
