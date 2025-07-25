import { useEffect, useState } from 'react'
import Data from '../data.json'
import Product from './components/Product'
import Cart from './components/Cart'
import OrderConfirm from './components/OrderConfirm'
import { ListContext } from './contexts/ListContext'

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
    <main className='px-8 py-6 lg:px-20 lg:py-10 grid grid-cols-1 sm:grid-cols-[60%_auto] md:grid-cols-[70%_auto] gap-6 relative'>
      <ListContext.Provider value={{list, setList, setIsPopupOpen}}>
        <Product />
        <Cart />
        {isPopupOpen && <OrderConfirm />}
      </ListContext.Provider>
    </main>
  )
}