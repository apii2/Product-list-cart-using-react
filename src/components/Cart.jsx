import Cake from '../assets/images/illustration-empty-cart.svg'
import CarbonNeutral from '../assets/images/icon-carbon-neutral.svg'
import Remove from '../assets/images/icon-remove-item.svg'

export default function Cart(props){
  function totalPrice(){
    let sum = 0 
    props.list.map((item)=>sum += item.price*item.quantity)
    return sum
  }
  let sum = totalPrice()

  function RemoveItem(id){
    props.setList(prev=>(
      prev.map((item)=>(
        item.id === id ? {...item, selected: false, quantity: 1} : item
      ))
    ))
  }

  return (
    <section className='bg-white h-fit rounded-md px-4 py-4'>
      <header className='text-red font-bold text-lg mb-6'>Your Cart ({props.list.length})</header>

      {props.list.length === 0 && 
        <div className="flex flex-col items-center justify-center gap-3">
          <img src={Cake} alt="Empty cart cake icon" className='w-24'/>
          <p className='text-sm text-rose-400 font-semibold'>Your added items will appear here</p>
        </div>
      }

      {props.list.length > 0 && 
        <div>
          {props.list.map((item)=>(
            <div className="not-first:pt-4" key={item.name}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">
                  <h4 key={item.name} className='text-rose-900 mb-2'>{item.name}</h4>
                  <p className='text-red inline-block me-4'>{item.quantity}x</p>
                  <p className='inline-block text-rose-300 me-3'>@<span className='ms-1'>${item.price.toFixed(2)}</span></p>
                  <p className='inline-block text-rose-400'>${(item.price*item.quantity).toFixed(2)}</p>
                </div>
                <button onClick={()=>RemoveItem(item.id)}
                  className='ring-1 rounded-full cursor-pointer p-[2px] ring-rose-300 hover:ring-rose-900'>
                  <img src={Remove} alt="Remove item icon" className='w-2.5 h-2.5'/>
                </button>
              </div>
              <hr className='mt-4 text-rose-100'/>
            </div>
          ))}

          <div className="flex justify-between items-start text-sm my-4">
            Order Total
            <p className='font-bold text-lg text-rose-900'>${sum.toFixed(2)}</p>
          </div>

          <div className="text-sm text-rose-900 bg-rose-50 py-3 rounded-md text-center mb-4">
            <img src={CarbonNeutral} alt="Carbon neutral tree icon" className='w-5 inline-block me-1'/>
            This is a <b>carbon-neutral</b> delivery
          </div>

          <button onClick={()=>props.setIsPopupOpen(true)}
            className="py-3 w-full bg-red rounded-full text-white cursor-pointer hover:bg-red-800">Confirm Order</button>
        </div>
      }
    </section>
  )
}