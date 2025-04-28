import Cart from '../assets/images/icon-add-to-cart.svg'
import Data from '../../data.json'

export default function Product(){
  return (
    <section>
      <header className="font-bold text-2xl mb-6">Desserts</header>

      <div className='grid grid-cols-3 gap-6'>
        {Data.map((dat)=>(
          <article key={dat.name} className=''>
            <div className="">
              <img src={dat.image.desktop} alt={dat.name} className='rounded-lg'/>
              <button className=' -translate-y-4'>
                <img src={Cart} alt='Cart icon' className='inline-block'/>
                Add to Cart
              </button>
            </div>
            <p>{dat.category}</p>
            <h2>{dat.name}</h2>
            <p>${dat.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}