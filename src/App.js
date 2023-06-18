import './App.css';
import { useState } from 'react';
import bg from './main_final_02.png'
import bg02 from './main_.jpg'
import Detail from './pages/Detail.js'
import Cart from './pages/cart.js'
import { Routes, Route, useNavigate} from 'react-router-dom'

import data from './data.js'
import { increase, decrease } from "./index";



function App(){

  let [shoes, setShoes] = useState(data)
  {/* mysql - node.js 연동 */}
  // const [shoes, setShoes] = useState([
  //   {
  //     id : '',
  //     name : '',
  //     count : '',
  //     price : ''
  //   }
  // ]);

  // useEffect(()=> {
  //   axios.get("http://localhost:3001/api/product")
  //     .then((result)=>{
  //       setShoes(result.data);
  //     })
  //     .catch((Error) => {
  //       console.log('error')
  //     })
  // },[]);
  {/* mysql - node.js 연동 */}




  let [tab,setTab] = useState(0)
  let [currenttab, clickTab] = useState(0)
  let [tabbtn] = useState(['sunset', 'travel', 'light', 'daily', 'winter'])
  let buttonHandle = (index) => {
    clickTab(index)
  }
  let [more, setMore] = useState('')
  console.log(more)


  const dispatch = useDispatch(); // store의 dispatch 함수 사용
  // store 객체의 getState() 역할
  const state = useSelector((state) => state); // store에 있는 state 값을 가져오는 역할
  
  const plusNum = () => {
    dispatch(increase());
  };

  const minusNum = () => {
    dispatch(decrease());
  };



  return (
      <div>
        <div className='mainPop'>일상 속 다양한 순간들을 만나보세요</div>
        <Nav></Nav>
        <Routes>
          {/* 메인페이지 */}
          <Route path='/' element={
            <>
              {/* 상단 메인 이미지 */}
              <div className='main-bg' style={ {backgroundImage: 'url(' + bg + ')'}}></div>

              {/* ]중간 컨텐츠*/}
              <div className='wrap'>
                <h4 className='mainTitle'>DAILY PHOTO</h4>

                <div className="mainPicture">
                  <div>
                    {
                      shoes.slice(0,6).map(function(a,i) {
                        return(
                          <div>
                            <Card shoes={shoes[i]} i={i}></Card>
                          </div>
                        )
                      })
                    }
                    <button onClick={()=>{setMore(1)}}>더보기</button>
                  </div>

                  <div className={more == 1 ? "display" : null}>
                    {
                      shoes.slice(6,12).map(function(a,i) {
                        return(
                          <div>
                            <Card shoes={shoes[i]} i={i+6}></Card>
                          </div>
                        )
                      })
                    }
                    <button onClick={()=>{setMore(2)}}>더보기</button>
                  </div>

                  <div className={more == 2 ? "display" : null}>
                    {
                      shoes.slice(12,18).map(function(a,i) {
                        return(
                          <div>
                            <Card shoes={shoes[i]} i={i+12}></Card>
                          </div>
                        )
                      })
                    }
                    <button onClick={()=>{setMore(3)}}>더보기</button>
                  </div>

                  <div className={more == 3 ? "display" : null}>
                    {
                      shoes.slice(18,24).map(function(a,i) {
                        return(
                          <div>
                            <Card shoes={shoes[i]} i={i+18}></Card>
                          </div>
                        )
                      })
                    }
                    <button onClick={()=>{setMore(4)}}>더보기</button>
                  </div>

                  <div className={more == 4 ? "display" : null}>
                    {
                      shoes.slice(24,30).map(function(a,i) {
                        return(
                          <div>
                            <Card shoes={shoes[i]} i={i+24}></Card>
                          </div>
                        )
                      })
                    }
                  </div>

                    {/* <button onClick={()=>{
                      setLoad(true)

                      axios.get('https://codingapple1.github.io/shop/data2.json')
                      .then((결과)=>{

                        let copy = [...shoes, ...결과.data]
                        setShoes(copy)
                        console.log(copy)
                        console.log(shoes)
                      })

                    }}>More view</button> */}
                </div>     
              </div>

              {/* 하단 photo type 탭메뉴 */}
              <div className='main-bg' style={ {backgroundImage: 'url(' + bg02 + ')'}}></div>
              <div className='wrap'>
                <h4 className='mainTitle'>PHOTO TYPE :</h4>
                  <div className='tabBtn'>
                    {
                      tabbtn.map(function(a,i) {
                        return(
                          <button className={ i == currenttab? 'on' : 'none' } onClick={()=> {
                            setTab(i);
                            buttonHandle(i)
                            }}>{tabbtn[i]}</button>
                        )
                      })
                    }
                  </div>
                <Tabcont tab={tab}></Tabcont>
              </div>
            </>
          } 
          />

          {/* 상세페이지 */}
          <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
          {/* 장바구니페이지 */}
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='*' element={<div>없는 페이지</div>} />
        </Routes>

        {/* 탑버튼 - 모든페이지 */}
        <i className="fa fa_arr fa-arrow-up top_btn" onClick={()=> {
          window.scroll({
            top : 0,
            behavior : 'smooth'
          })
        }}></i>

        {/* footer */}
        <Footer></Footer>
      </div>
    )
  }

export default App;


// 중간 컨텐츠 component
function Card(props) {

let [numb,setNumb] = useState(0)
let [modal,setModal] = useState(false)
let navi = useNavigate()

  return(
    <div className="picture">
      <div className='picture_mo'
        onMouseEnter={()=> {
          setModal(true);
          setNumb(props.i);
        }}
        onClick={()=> {
          navi('/detail/' + (props.i))
        }}
        onMouseLeave={ ()=> {
          setModal(false);
          setNumb(props.i)
        }}
        >
        <img src={'/pic_' + (props.i+1) + '.png'}/>
        { modal == true? <Hovermodal num={numb} shoes={props.shoes}></Hovermodal> : null}
      </div>
    </div>
  )
}




// nav바 component
function Nav() {

  let navi = useNavigate()

  return(
    <nav className='navBar'>
      <p onClick={()=> {navi('/')}}>wwpi.c</p>
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
    </nav>
  )
}


// 중간 컨텐츠 - 호버시 모달창 component
function Hovermodal({num,shoes}) {
  return(
    <div>
      {
        <div className='pictureHv'>
          <h4>{shoes.name}</h4>
        </div>
      }
    </div>
  )
}


// 하단 photo type 탭 컨텐츠
function Tabcont({tab}) {
  return(
    <div>
      {[
        <div className='tabImg'>
          <img src={process.env.PUBLIC_URL + '/pic_10.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_2.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_3.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_16.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_11.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_14.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_26.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_27.png'}/>
        </div>, 
        <div className='tabImg'>
          <img src={process.env.PUBLIC_URL + '/pic_5.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_6.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_4.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_19.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_21.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_30.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_31.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_32.png'}/>
        </div>,
        <div className='tabImg'>
          <img src={process.env.PUBLIC_URL + '/pic_7.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_13.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_24.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_22.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_6.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_4.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_12.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_27.png'}/>
        </div>,
        <div className='tabImg'>
          <img src={process.env.PUBLIC_URL + '/pic_17.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_9.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_1.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_8.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_18.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_12.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_23.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_24.png'}/>
        </div>,
        <div className='tabImg'>
          <img src={process.env.PUBLIC_URL + '/pic_15.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_20.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_28.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_29.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_17.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_18.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_12.png'}/>
          <img src={process.env.PUBLIC_URL + '/pic_22.png'}/>
        </div>
      ][tab]
    }
    </div>
  ) 
}



// footer
function Footer() {
  let navi = useNavigate()
  const url = "https://www.instagram.com/wwpi.c"

  return(
    <div className='footer'>
      <div>
        <h3 onClick={()=> {navi('/')}}>wwpi.c
          <i className="fa fa_insta fa-instagram" onClick={()=> {
            window.open(url)
          }}></i>
        </h3>
      </div>
      <hr></hr>
      <p>
        사진찍기를 좋아하는 사람의 평범한 일상 속 순간들입니다.<br/>
        인스타그램에서 더 많은 순간들을 만나보세요.
      </p>
    </div>
  )
}