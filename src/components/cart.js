import { Button, Container, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../rtk/slices/cartSlice';


export default function Cart() {
  const items=useSelector((state)=>state.cart); //Read state of cart to render the added products after dispatching(addProduct()) in products.js
  const dispatch=useDispatch();
  const Totalprice=items.reduce((acc,item)=>{
    acc+=item.price;
    return acc;
  },0) 
  return (
    <>
      <Container>
        <h1 className='pt-5 pb-3'>Cart Page</h1>
        <h5 style={{color:'blue'}} className="pt-3 pb-4">Total Price:{Totalprice.toFixed(2)}$</h5>
        <Table  striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item)=>(
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td><Image src={item.image} alt="product-image" style={{width:'50px'}}/></td>
            <td>{item.price}</td>
            <td><Button variant='danger' onClick={()=>dispatch(deleteFromCart(item))}>Delete</Button></td>
          </tr>
        
      ))
    }
</tbody>
      </Table>
    </Container>
    </>
)
}
