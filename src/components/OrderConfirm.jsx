import Confirm from '../assets/images/icon-order-confirmed.svg'

export default function OrderConfirm(props){
  function totalPrice(){
    let sum = 0 
    props.list.map((item)=>sum += item.price*item.quantity)
    return sum
  }
  let sum = totalPrice()

  function StartNewOrder(){
    props.setIsPopupOpen(false)
    props.setList(prev=>(
      prev.map(item=>(
        {...item, selected: false}
      ))
    ))
  }

  return (
    <section onClick={()=>{props.setIsPopupOpen(false)}} 
      className="fixed top-0 left-0 h-[100vh] w-[98vw] flex items-center justify-center bg-black/50">
      <div onClick={(e)=>e.stopPropagation()} 
        className="bg-white px-6 py-6 w-100 rounded-md">
        <img src={Confirm} alt="Confirmation tick icon" className='w-6 mb-3'/>
        <header className="font-bold text-2xl text-rose-900">Order Confirmed</header>
        <p className="text-rose-500 text-sm mb-3">We hope you enjoy your food!</p>

        <div className='bg-rose-50 px-3 py-3'>
          {props.list.map((item)=>(
            <div className="not-first:pt-2" key={item.name}>
              <div className="flex items-center justify-between">

                <div className="flex items-center">
                  <img src={item.image.thumbnail} alt="Thumbnail" className='w-8 h-8 rounded-sm me-3'/>
                  <div className="text-xs font-semibold">
                    <h4 className='text-rose-900'>{item.name}</h4>
                    <p className='text-red inline-block me-4'>{item.quantity}x</p>
                    <p className='inline-block text-rose-300 me-3'>@<span className='ms-1'>${item.price.toFixed(2)}</span></p>
                  </div>
                </div>
                <p className='inline-block text-rose-900 text-xs font-semibold'>${(item.price*item.quantity).toFixed(2)}</p>
              </div>
              <hr className='mt-2 text-rose-100'/>
            </div>
          ))}

          <div className="flex justify-between items-start text-sm my-2">
            Order Total
            <p className='font-bold text-lg text-rose-900'>${sum.toFixed(2)}</p>
          </div>

          <button onClick={StartNewOrder}
            className="py-2 w-full bg-red rounded-full text-white cursor-pointer hover:bg-red-800 capitalize">Start new order</button>
        </div>
      </div>
    </section>
  )
}