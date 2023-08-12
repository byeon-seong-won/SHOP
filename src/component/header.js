import { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'



const Nav = () => {

  let navi = useNavigate()
  let [scroll, setScroll] = useState('');

  const handleScroll = () => {
   let offset = window.scrollY;
   if(offset > 10) {
      setScroll('scroll')
    } else {
      setScroll('')
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
  },[])



  return (
    <nav className={'none ' + scroll}>
      <div className={'mainPop ' + scroll}>일상 속 다양한 순간들을 만나보세요</div>
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