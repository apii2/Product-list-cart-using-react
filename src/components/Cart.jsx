import Cake from '../assets/images/illustration-empty-cart.svg'
export default function Cart(){
  return (
    <section className='bg-white h-fit rounded-md'>
      <header className=''>Your Cart (0)</header>
      <img src={Cake} alt="Empty cart cake icon" />
      <p>Your added items will appear here</p>
    </section>
  )
}