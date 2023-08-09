import './App.css';
import { useState, useEffect } from 'react';
import bg from './main_final_02.png'
import bg02 from './main_.jpg'
import Detail from './pages/Detail.js'
import Cart from './pages/cart.js'
import { Routes, Route, useNavigate} from 'react-router-dom'
import axios from 'axios';

import data from './data.js'


// 컴포넌트
import { Footer } from './component/footer';
import { Nav } from './component/header';
import { Tabcont } from './component/tabContent';


function App(){

  // let [shoes, setShoes] = useState(data)
  {/* mysql - node.js 연동 */}
  const [shoes, setShoes] = useState([
    {
      id : '',
      name : '',
      count : '',
      price : ''
    }
  ]);

  useEffect(()=> {
    axios.get("http://localhost:3001/api/product")
      .then((result)=>{
        setShoes(result.data);
        // console.log("result" + JSON.stringify(result))
      })
      .catch((Error) => {
        console.log('error')
      })
  },[]);
  {/* mysql - node.js 연동 */}



  let [load, setLoad] = useState(false);
  let [tab,setTab] = useState(0)
  let [currenttab, clickTab] = useState(0)
  let [tabbtn] = useState(['sunset', 'travel', 'light', 'daily', 'winter'])
  let buttonHandle = (index) => {
    clickTab(index)
  }
  let [pagenum, setPagenum] = useState(0)
  let slice = pagenum + 9;




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

              {/* 중간 컨텐츠*/}
              <div className='wrap'>
                <h4 className='mainTitle'>DAILY PHOTO</h4>
                <div className="mainPicture">
                  <div className='display'>
                    {
                      shoes.slice(0,slice).map(function(a,pagenum) {
                        return(
                          <div>
                            <Card shoes={shoes[pagenum]} i={pagenum}></Card>
                          </div>
                        )
                      })
                    }
                  </div>
                  <button className={"mpbtn " + (pagenum == 27 ? "display" : null)} onClick={()=>{setPagenum(pagenum +9)}}>More View</button>

                  {/* <div className={more ==1 ? "display" : "none"}>
                    {
                      shoes.slice(9,18).map(function(a,i) {
                        return(
                          <div>
                            <Card shoes={shoes[i+10]} i={i+10}></Card>
                          </div>
                        )
                      })
                    }
                    <button className={"mpbtn " + (more == 2? "display" : null)} onClick={()=>{
                      setLoad(true)

                      axios.get("http://localhost:3001/api/product")
                      .then(결과=>{
                        console.log("결과" + JSON.stringify(결과))
                        let copy = [...결과.data]
                        console.log(copy[18])
                        setMore(2)
                      })
                    }}>More view</button>
                  </div>


                  <div className={more == 2 ? "display" : "none"}>
                    {
                      shoes.slice(18,27).map(function(a,i) {
                        return(
                          <div>
                            <Card shoes={shoes[i+19]} i={i+19}></Card>
                          </div>
                        )
                      })
                    }
                    <button className={"mpbtn " + (more == 3? "display" : null)} onClick={()=>{
                      setLoad(true)

                      axios.get("http://localhost:3001/api/product")
                      .then(결과=>{
                        console.log("결과" + JSON.stringify(결과))
                        let copy = [...결과.data]
                        console.log(copy[27])
                        setMore(3)
                      })
                    }}>More view</button>
                  </div>


                  <div className={more == 3 ? "display" : "none"}>
                    {
                      shoes.slice(27,29).map(function(a,i) {
                        return(
                          <div>
                            <Card shoes={shoes[i+28]} i={i+28}></Card>
                          </div>
                        )
                      })
                    }
                  </div> */}




{/* 
                   <div className={more == 1 ? "display" : null}>
                    {
                      shoes.slice(10,19).map(function(a,i) {
                        return(
                          <div>
                            <Card shoes={shoes[i+9]} i={i+9}></Card>
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
                  </div>  */}

                    {/* <button onClick={()=>{
                      setLoad(true)

                      axios.get("http://localhost:3001/api/product")
                      .then((결과)=>{

                        let copy = [...shoes, ...결과.data]
                        setShoes(copy)
                        console.log("copy" + copy)
                        console.log("shoes" + shoes)
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



export default App;