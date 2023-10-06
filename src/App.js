import './App.css';
import { useState } from 'react';
import Detail from './pages/Detail.js'
import Cart from './pages/cart.js'
import { Routes, Route, useNavigate} from 'react-router-dom'
// import axios from 'axios';
import data from './data.js'





// 컴포넌트 import
import { Footer } from './component/footer';
import { Nav } from './component/header';
import { Tabcont } from './component/maintabContent';
import { Topbtn } from './component/topbtn';



function App () {

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
  //       // console.log("result" + JSON.stringify(result))
  //     })
  //     .catch((Error) => {
  //       console.log('error')
  //     })
  // },[]);
  {/* mysql - node.js 연동 */}


  let [tab,setTab] = useState(0)
  let [currenttab, clickTab] = useState(0)
  let [tabbtn] = useState(['sunset', 'travel', 'light', 'daily', 'winter'])
  let buttonHandle = (index) => {clickTab(index)}
  let [pagenum, setPagenum] = useState(0)
  let slice = pagenum + 9;




  return (
      <div>
        <Nav></Nav>
        <Routes>

          {/* main page */}
          <Route path='/' element={
            <>
              <div className='mainImg' style={ {backgroundImage: 'url(process.env.PUBLIC_URL/main_final_02.png)'}}></div>
              <div className='mainText'>
                <h4 className='mainTitle'>DAILY PHOTO</h4>
                <div className="mainPicture">
                  <div>
                    {
                      shoes.slice(0,slice).map(function(a,pagenum) {
                        return(
                            <Card shoes={shoes[pagenum]} i={pagenum}></Card>
                        )
                      })
                    }
                  </div>
                  <button className={"mpbtn " + (pagenum == 27 ? "display" : null)} onClick={()=>{setPagenum(pagenum +9)}}>More View</button>
                </div>     
              </div>
              <div className='mainImg' style={ {backgroundImage: 'url(process.env.PUBLIC_URL/main_.jpg)'}}></div>
              <div className='mainText'>
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
          }/>
          
          {/* detail page */}
          <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>

          {/* cart page */}
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='*' element={<div>없는 페이지</div>} />
        </Routes>

        {/* Top button */}
        <Topbtn></Topbtn>

        {/* footer */}
        <Footer></Footer>
      </div>
    )
  }




// 중간 컨텐츠 component
const Card = ({shoes, i}) => {

let [numb,setNumb] = useState(0)
let [modal,setModal] = useState(false)
let navi = useNavigate()

  return(
    <div className="picture">
      <div className='pictureMo'
        onMouseEnter={()=> {
          setModal(true);
          setNumb(i);
        }}
        onClick={()=> {
          navi('/detail/' + (i))
        }}
        onMouseLeave={ ()=> {
          setModal(false);
          setNumb(i)
        }}
        >
        <img src={'/pic_' + (i+1) + '.png'}/>
        { modal == true? <Hovermodal num={numb} shoes={shoes}></Hovermodal> : null}
      </div>
    </div>
  )
}


// 중간 컨텐츠 - 호버시 모달창 component
const Hovermodal = ({shoes}) => {
  return(
    <>
      {
        <div className='pictureHv'>
          <h1>{shoes.name}</h1>
        </div>
      }
    </>
  )
}



export default App;