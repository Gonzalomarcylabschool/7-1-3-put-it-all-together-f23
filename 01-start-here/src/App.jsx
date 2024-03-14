import './App.css'
import { Link, Routes, Route, useParams } from 'react-router-dom';

const Dashboard = () => <h1>Dashboard</h1>;
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Some information about our company</p>
    </div>
  )

}
const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li><Link to='/products/1'>Product 1</Link></li>
        <li><Link to='/products/2'>Product 2</Link></li>
        <li><Link to='/products/3'>Product 3</Link></li>
        <li><Link to='/products/4'>Product 4</Link></li>
        <li><Link to='/products/5'>Product 5</Link></li>
        <li><Link to='/products/6'>Product 6</Link></li>
        <li><Link to='/products/7'>Product 7</Link></li>
        <br />
        <li><Link to='/products/create'>Create New Product</Link></li>
      </ul>
    </>
  )
}
const Product = () => {
  const params = useParams();
  return <h1>Product {params.id}</h1>;
}
const CreateProduct = () => <h1>Create Product</h1>
const NotFound = () => <h1>Not Found</h1>

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="create" element={<CreateProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
