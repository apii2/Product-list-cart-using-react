import { useContext } from 'react'
import Cart from '../assets/images/icon-add-to-cart.svg'
import { ListContext } from '../contexts/ListContext'

export default function Product(){
  const {list, setList} = useContext(ListContext);

  function addQuantity(id){
    setList((prev)=>(
      prev.map((item)=>(
        item.id === id ? {...item, quantity: item.quantity+1} : item
      ))
    ))
  }

  function subQuantity(id){
    setList((prev)=>(
      prev.map((item)=>(
        (item.id === id && item.quantity > 1) ? {...item, quantity: item.quantity-1} : item
      ))
    ))
  }

  return (
    <section>
      <header className="font-bold text-3xl mb-6 text-rose-900">Desserts</header>

      <div className='grid xs:grid-cols-2 md:grid-cols-3 gap-6'>
        {list.map((dat)=>(
          <article key={dat.name}>
            <div className="relative mb-8">
              <picture>
                <source media='(max-width:639px)' srcSet={`${import.meta.env.BASE_URL}${dat.image.mobile}`}/>
                <source media='(max-width:1023px)' srcSet={`${import.meta.env.BASE_URL}${dat.image.tablet}`}/>
                <img src={`${import.meta.env.BASE_URL}${dat.image.desktop}`} alt={dat.name} className={`rounded-lg lg:w-full lg:h-48 lg:object-cover ${dat.selected && 'ring-2 ring-red'}`}/>
              </picture>

              {!dat.selected && <button onClick={()=>setList(prevList => prevList.map((item)=>(item.id === dat.id? {...item, selected: true}: item)))}
                className='cursor-pointer text-center w-[70%] xs:w-[90%] sm:w-full lg:w-[80%] py-2 font-semibold text-rose-900 ring-1 ring-rose-900 rounded-full bg-rose-50 
                absolute -translate-y-5 left-0 right-0 mx-auto
                hover:text-red hover:ring-red'>
                <img src={Cart} alt='Cart icon' className='inline-block me-2'/>
                Add to Cart
              </button>}

              {dat.selected && <div className='cursor-pointer text-center w-[70%] xs:w-[90%] sm:w-full lg:w-[80%] px-3 py-2 font-semibold text-white
                ring-1 ring-red rounded-full bg-red flex justify-between items-center
                absolute -translate-y-5 left-0 right-0 mx-auto
                hover:ring-red-800 hover:bg-red-800'>
                <button onClick={()=>subQuantity(dat.id)} className='cursor-pointer ring-1 ring-white rounded-full w-[0.8rem] h-[0.8rem] grid content-center'>-</button>
                <input type='text' disabled value={dat.quantity} className='w-[20%] text-center'/>
                <button onClick={()=>addQuantity(dat.id)} className='cursor-pointer ring-1 ring-white rounded-full w-[0.8rem] h-[0.8rem] grid content-center pt-[1px]'>+</button>
              </div>}
            </div>

            <p className='text-sm text-rose-500'>{dat.category}</p>
            <h2 className='font-semibold text-rose-900'>{dat.name}</h2>
            <p className='text-red font-semibold'>${dat.price.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}