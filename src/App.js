import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import bg from './main_final_02.png'
import bg02 from './main_.jpg'
import {Detail} from './pages/Detail.js'
import Cart from './pages/cart.js'
import { Routes, Route, useNavigate} from 'react-router-dom'
import { decrease, increase, openfirstmo, opensecomo, hvmodal } from './actions/index.js'
import data from './data.js'



// component
import { Tabcont } from './component/tabContent';
import { Nav } from './component/header';
import { Footer } from './component/footer';
// import { Card } from './component/hovermodal';


function App() {

  let [pic, setPic] = useState(data)
  const hvmodalstate = useSelector(state => state.hvmodalstate)
  
  let [tab,setTab] = useState(0)
  let [currenttab, clickTab] = useState(0)
  let [tabbtn] = useState(['sunset', 'travel', 'light', 'daily', 'winter'])
  let buttonHandle = (index) => {
    clickTab(index)
  }


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


  // 디스패치 함수
  const dispatch = useDispatch();
  const decrease = (state) => dispatch(decrease(state));
  const increase = (color) => dispatch(increase(color));
  const openfirstmo = (status) => dispatch(openfirstmo(status));
  const opensecomo = (status) => dispatch(opensecomo(status));
  const hvmodal = (status) => dispatch(hvmodal(status))

  // let [more, setMore] = useState('')



  // const dispatch = useDispatch(); 

  // const state = useSelector((state) => state); 
  
  // const plusNum = () => {
  //   dispatch(increase());
  // };

  // const minusNum = () => {
  //   dispatch(decrease());
  // };



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
                      pic.map(function(a,i) {
                        return(
                          <div>
                            <Card pic={pic[i]} i={i}></Card>
                          </div>
                        )
                      })
                    }
                    {/* <button onClick={()=>{setMore(1)}}>더보기</button> */}
                  </div>

                  {/* <div className={more == 1 ? "display" : null}>
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
                  </div> */}

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
          <Route path="/detail/:id" element={<Detail pic={pic}/>}/>
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
          { modal == true? <Hovermodal num={numb} pic={props.pic}></Hovermodal> : null}
        </div>
      </div>
    )
  }
// 중간 컨텐츠 - 호버시 모달창 component
function Hovermodal({num,pic}) {
  return(
    <div>
      {
        <div className='pictureHv'>
          <h4>{pic.name}</h4>
        </div>
      }
    </div>
  )
}










export {App}