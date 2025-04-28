import Product from './components/Product'
import Cart from './components/Cart'
import './App.css'

export default function App() {
  return (
    <main className='px-18 py-14 grid grid-cols-[73%_auto] gap-6'>
      <Product />
      <Cart />
    </main>
  )
}