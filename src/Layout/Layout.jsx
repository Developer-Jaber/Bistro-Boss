import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const Layout = () => {
  return (
    <div className='cinzel-font'>
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
