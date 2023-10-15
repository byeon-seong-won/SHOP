import { useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {addmodalActions, cartActions} from '../store/store.js'
import data from "../data.js"
import { AddModal, MoveModal} from '../component/modal.js'


const Detail = ({shoes}) => {

  let {id} = useParams(null); 
  let [tab, setTab] = useState(0)
  let addmodal = useSelector((state) => {return state.addmodal})
  let movemodal = useSelector((state) => {return state.movemodal})
  let [pro,setPro] = useState('0')
  let navi = useNavigate()
  let dispatch = useDispatch()
  let [currentTab, setCurrentTab] = useState(0)
  let buttonHandle = (index) => {
    setCurrentTab(index)
  }


  return(
    <>
      {/* 모달창 팝업 */}
      { addmodal == true ? <AddModal pro={pro}></AddModal> : null }
      { movemodal == true ? <MoveModal></MoveModal> : null }

      <div className="detailContent">
        {/* 상단 이미지와 설명 */}
        <div className="detailCon">
          <img className="product" src={process.env.PUBLIC_URL + '/pic_' + (shoes[id].id+1) + '.png'} width="100%" />
          <div>
            <h4>{shoes[id].name}</h4>
            <table>
              <tbody>
              <tr>
                <td>작가</td>
                <td>변성원 </td>
              </tr>
              <tr>
                <td>작품정보</td>
                <td>{shoes[id].name} <br/>(800 x 860), 2022</td>
              </tr>
              <tr>
                <td>작품코드</td>
                <td>2022-A7131{shoes[id].id}</td>
              </tr>
              <tr>
                <td>구매가</td>
                <td>{shoes[id].price} 원</td>
              </tr>
              <tr>
                <td>렌탈가</td>
                <td>월 {shoes[id].price} 원</td>
              </tr>
              <tr>
                <td>렌탈기간</td>
                <td>3개월 (기본)</td>
              </tr>
              <tr>
                <td>최종 구매가</td>
                <td>{shoes[id].price} 원</td>
              </tr>
              </tbody>
            </table>

            <button className="btn btnPur" onClick={ ()=> {
              let addpro = shoes[id]
              dispatch(cartActions.addItem(addpro))
              navi('/cart')
            }}>구매하기</button> 
            <button className="btn btnCart" onClick={ ()=> {
              let addpro = shoes[id]
              dispatch(addmodalActions.addModal(true)); 
              setPro(addpro)
              document.body.style.overflow = "hidden";
            }}>장바구니 담기</button> 
            <p>* 출장비 및 설치비는 별도입니다.</p>
            <p>* 작품에 따라 액자 처리 되어 있을 수 있습니다.</p>
          </div>
        </div>

        {/* 하단 탭 메뉴 */}
        <div className="detailTab">
          <div className="Tab">
            <button className={currentTab == 0 ? 'on' : 'none'} onClick={ ()=> {
              setTab(0); 
              buttonHandle(0)
            }}>작품 감상하기</button>
            <button className={currentTab == 1 ? 'on' : 'none'} onClick={ ()=> {
              setTab(1)
              buttonHandle(1)
            }}>문의</button>
          </div>
          {/* 하단 탭 컨텐츠 */}
          <Tabcont tab={tab} shoes={shoes[id]}></Tabcont>
        </div>
      </div>
    </> 
  )
}




// 하단 탬 컨텐츠
const Tabcont = ({tab, shoes}) => {

  let [fade1,setFade1] = useState('')
  let [color, setColor] = useState('')
  let [currImg] = useState(data)
  let [bg, setBg] = useState('')
  let [display, setDisplay] = useState('')
  let [click, clickStatus] = useState(0)
  let [imgclick, imgclickStatus] = useState(0)
  let [liclick, setLiclick] = useState([1,2,3,4,5,6])
  let [bgcolor] = useState(['#f8f8f8','#eeeeee','#ebe8d3','#c6d2d9','#acacab','#00b6b8','#8c110d','#3b3b3b'])


  // 오른쪽 썸네일과 현재 클릭된 이미지 확인
  let thumbimg = currImg.find((x)=> {
    return x.id == shoes.id
  })

  // 배경색 클릭된 index
  let clickindex = (index) => {
    clickStatus(index)
  }

  // 공간 클릭된 index
  let imgclickindex = (index) => {
    imgclickStatus(index)
  }


  // 자연스러운 등장효과
  useEffect(()=> {
    setTimeout(()=> {
      setFade1('end')
    },300)
    return()=> {
      setFade1('')
    }
  },[tab])


  return(
  <div className={'tabcontent ' + fade1}>
    {
      [
          // 탭컨텐츠1 - 작품감상하기
          <div className="cont">
            <h2 className="contTitle">사진 걸어보기</h2>
            <div className="picBack_inner">
              <div className="picBackImg" style={{backgroundColor : color, backgroundImage : 'URL(' + bg + ')', backgroundRepeat : "no-repeat", backgroundSize : "contain"}}>
                <img src={process.env.PUBLIC_URL + '/pic_' + (thumbimg.id) + 'back_0.png'} className={display}/>
              </div>
              <div className="rightText">
                <div className="bgImg">
                  <h5>공간</h5>
                  <div>
                    {/* 우측 공간 썸네일 이미지 */}
                    {
                      [1,2,3].map(function(a,i) {
                        let src = process.env.PUBLIC_URL + '/pic_' + (thumbimg.id) + 'back_' + i + '.png'
                        return(
                          <img src={src} className={ imgclick == i ? 'on' : 'none'} onClick={()=> {
                          setBg(src)
                          setDisplay('display')
                          imgclickindex(i)
                        }}/>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="bgColor">
                  <h5>배경색</h5>
                  <div>
                    {/* 우측 배경색 */}
                    {
                      bgcolor.map(function(a,i) {
                        return(
                          <span className={ click == i ? 'on' : 'none'} 
                            onClick={()=> {
                            setColor(bgcolor[i]);
                            clickindex(i)
                          }}></span>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>

            <h3>작품 소개</h3>
            <p>
            작가는 다양한 모습과 장식을 사물을 관찰합니다. 
            작가는 이처럼 인간과 밀접한 관계를 지닌 사물을 인간에 대한 탐구와 애정어린 심리를 담아 묘사하고 있습니다. 
            작품 속 사물들은 저마다의 특색을 지니고 마치 자화상처럼 감상자를 정면으로 응시하고 있습니다. 
            이러한 구도와 배치는 작품 속 사물을 사물이 아닌 사람으로서 생각하게끔 유도합니다. 
            각자의 개성이 모두 존중받아 마땅한 아름다움이라고 작가와 작품은 말해주고 있는 것처럼 느껴집니다.
            </p>

            <h3>큐레이터 노트</h3>
            <p>
            장소를 가리지 않고 사람이 있다면 어느 곳에서나 필요로 하며 배치되어 있는 사물은
            따라서 인간과 형태적으로 매우 유사하다. 작가는 이와 같은 의자의 특성을 사람과 유사하다 파악하며, 
            사물을 탐구하는 것이 곧 사람을 탐구하는 것임을 주장한다. 
            다양한 형태를 가진 작가의 사물은 각양각색의 모습을 한 사람들처럼 보인다. 
            또한 주로 정면, 혹은 반측면의 구도로 감상자를 응시하는듯한 사물의 배치는 이들을 사물이 아닌 사람처럼 
            감상자와 시선을 주고받게 만든다. 
            </p>
          </div>,
          
          // 탭컨텐츠2 - 문의
          <div className="cont faqWrap">
            <h2 className="contTitle">자주 묻는 질문</h2>
            <ul onClick={()=> {setLiclick(1)}}>
              <li>Q. 렌탈료는 매달 결제하나요?</li>
              <li className={ liclick == 1? 'on' : null}>첫 3개월 렌탈료는 이벤트가로 일시불 결제되며, 이후 일반 렌탈 시 매달 작품 크기에 따른 렌탈료가 결제됩니다.</li>
            </ul>
            <ul onClick={()=> {setLiclick(2)}}>
              <li>Q. 3개월마다 무조건 작품 교체해야 하나요?</li>
              <li className={ liclick == 2? 'on' : null}>연장 희망시, 오픈 갤러리와 협의해서 연장하실 수 있습니다.</li>
            </ul>
            <ul onClick={()=> {setLiclick(3)}}>
              <li>Q. 법인 명의도 가입할 수 있나요?</li>
              <li className={ liclick == 3? 'on' : null}>호텔, 카페, 사무실 등 다양한 공간에서 이용하며, 렌탈 요금에 대한 세금계산서 발급도 가능합니다.</li>
            </ul>
            <ul onClick={()=> {setLiclick(4)}}>
              <li>Q. 설치된 작품을 구매할 수도 있나요?</li>
              <li className={ liclick == 4? 'on' : null}>구매 가능하며, 렌탈 기간에 따라 가지불 렌탈료의 일부 혹은 잔액을 구매가격에서 할인해 드리고 있습니다.</li>
            </ul>
            <ul onClick={()=> {setLiclick(5)}}>
              <li>Q. 전국 어디든 이용 가능한가요?</li>
              <li className={ liclick == 5? 'on' : null}>도서산간지역 외 전국 가능하며, 지역에 따라 별도의 출장비가 부과됩니다.</li>
            </ul>
            <ul onClick={()=> {setLiclick(6)}}>
              <li>Q. 작품은 언제 설치 가능한가요?</li>
              <li className={ liclick == 6? 'on' : null}>작품 선택일로부터 영업일 기준 5일 전후 수령 가능합니다.</li>
            </ul>
          </div>
      ][tab]
    }
  </div>
  )
}









export default Detail