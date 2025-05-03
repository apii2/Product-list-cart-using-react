import { useEffect, useState } from 'react'
import Data from '../data.json'
import Product from './components/Product'
import Cart from './components/Cart'
import OrderConfirm from './components/OrderConfirm'
import './App.css'

export default function App() {
  const [list, setList] = useState([])

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(()=>{
    let prods = Data.map((dat,index)=>(
      {...dat, id:index+1, selected: false, quantity: 1}
    ))
    setList(prods)
  },[])

  return (
    <main className='px-20 py-14 grid grid-cols-[70%_auto] gap-6 relative'>
      <Product setList={setList} list={list}/>
      <Cart list={list.filter((dat)=>dat.selected)} setList={setList} setIsPopupOpen={setIsPopupOpen}/>
      {isPopupOpen && <OrderConfirm list={list.filter((dat)=>dat.selected)} setList={setList} setIsPopupOpen={setIsPopupOpen}/>}
    </main>
  )
}