import  { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/slices/cartSlice';
import { fetchData} from '../rtk/slices/productsSlice';

export default function Products() {
    const products=useSelector((state)=>state.products);
    console.log(products)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    },[]);
return (
    <Container className='pt-5'>
     <Row>
        {products.map((product)=>(
            <Col >
            <Card className='cardwidth mb-5'>
            <Card.Img variant="top"
            className='ms-5'
            style={{width:'200px' , height:'261.55px'}}
            src={product.image}/>
            <Card.Body>
            <Card.Title className='text title'>{product.title}</Card.Title>
            <Card.Text className='text description'>
                {product.description}
            </Card.Text>
            <Card.Text>
                {product.price}$
            </Card.Text>
            <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add to Cart</Button> 
            </Card.Body>
        </Card>
        </Col>
        ))
    }   
    </Row> 
</Container>
)
}
