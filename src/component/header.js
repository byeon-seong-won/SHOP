import { useNavigate} from 'react-router-dom'
const Nav = () => {

    let navi = useNavigate()
  
    return(
      <nav>
        <div className='mainPop'>일상 속 다양한 순간들을 만나보세요</div>
        <div className='navBar'>
          <h1 onClick={()=> {navi('/')}}>wwpi.c</h1>
          <ul>
            <li onClick={()=> {navi('/cart')}}>
              <i className="fa fa-shopping-cart"></i>
              CART
            </li>
            <li>
              <i className="fa fa-user"></i>
              LOGIN
            </li>
          </ul>
        </div>
      </nav>
    )
  }

  export {Nav}