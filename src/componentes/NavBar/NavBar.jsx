import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Courgette&family=Dancing+Script:wght@400;500;600;700&family=EB+Garamond:ital@1&family=Edu+TAS+Beginner:wght@400;500;600;700&family=Handlee&family=Kalnia:wght@300&family=Pacifico&family=Tangerine:wght@700&display=swap');
</style>




const NavBar = () => {
  return (
  <header className='header'>
        <h1 className='titulo'>Mateando</h1>

        <nav>
            <ul>
                <li>Comprar</li>
                <li>Nosotros</li>
                <li>Encontranos</li>
                <li>¿Quienes somos?</li>
            </ul>
        </nav>

        <CartWidget/>




  </header>

  )
}

export default NavBar
