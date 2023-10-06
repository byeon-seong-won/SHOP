import { useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { loginmodalActions } from '../store/store.js'
import { LoginModal } from './modal.js'
import styled from 'styled-components'


const Nav = () => {

  let navi = useNavigate();
  let dispatch= useDispatch()
  let [scroll, setScroll] = useState('');
  let loginmodal = useSelector((state) => {return state.loginmodal})



  // 스크롤시 헤더 밑줄
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
    <Navbox className={'none ' + scroll}>
      <div className={'mainPop ' + scroll}>일상 속 다양한 순간들을 만나보세요</div>
      <div className='navBar'>
        <h1 onClick={()=> {navi('/')}}>wwpi.c</h1>
        <ul>
          <li onClick={()=> {navi('/cart')}}>
            <i className="fa fa-shopping-cart"></i>
            CART
          </li>
          { loginmodal == true? <LoginModal></LoginModal> : null }
          <li onClick={()=> {dispatch(loginmodalActions.loginModal(true)); document.body.style.overflow = "hidden";}}>
            <i className="fa fa-user"></i>
            LOGIN
          </li>
        </ul>
      </div>
    </Navbox>
  )
}






// styled components
let Navbox = styled.div `
  &.none {background-color: transparent;width: 100%;position: fixed;z-index: 10000;top: 0;}
  &.scroll {background-color: #fff;border-bottom: 1px solid #ddd;}  
  &>div.mainPop {
    background-color: #00b6b8;
    color: #fff;
    font-family: 'NanumSquareNeo-Variable';
    height: 40px;
    width: 100%;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    @media (min-width:360px) and (max-width:767px) {
      display: none
    }
    &.scroll {display: none;}
  }
  &>div.navBar {
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0 40px;
    height:90px;
    @media (min-width:360px) and (max-width:767px) {
      padding: 0 30px;
      height : 60px;
    }
    &>h1 {
      font-size: 55px;
      color: #333;
      width: 80%;
      font-family: 'Oleo Script', cursive;
      cursor: pointer;
      font-weight: lighter;
      @media (min-width:360px) and (max-width:767px) {
        font-size: 26px;
        width: 60%;
      }
    }
    &>ul {
      display: flex;
      width: 20%;
      align-items: center;
      justify-content: space-around;
      @media (min-width:360px) and (max-width:767px) {
        width: 40%;
        padding-left: 0;
      }
      &>li {
        font-size: 18px;
        cursor: pointer;
        flex: 1;
        text-align: center;
        cursor: pointer;
        font-family: 'Caprasimo', cursive;
        color: #333;
        @media (min-width:360px) and (max-width:767px) {
          font-size: 13px;
          text-align: right;
        }
        &>i {
          margin-right: 10px;
          @media (max-width:1024px) {
            display: none;
          }
        }
      }
    }
  }

  }
`;












export {Nav}