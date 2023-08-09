
import { useSelector, useDispatch} from 'react-redux'
import { modalActions, desmodalActions, cartActions, moneyActions} from '../store/store.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Cart() {
  let modal = useSelector((state) => {return state.modal})
  let desmodal = useSelector((state) => {return state.desmodal})
  let cart = useSelector((state) => {return state.cart})
  let prototal = useSelector((state) => {return state.prototal})

  let dispatch = useDispatch()
  let navi = useNavigate()
  let [num,setNum] = useState('')
  let [chkbox, setChkbox] = useState('')
  
  // let prototal = cart.price;
  let fintotal = 2000 + prototal;

  // <-- 전체선택 클릭시
  let statuschkbox = () => {
    if(chkbox == '') {
      setChkbox('check')
    } else {
      setChkbox('')
    }
  }
  // 전체선택 클릭시 -->


  let [clicked, setClicked] = useState('')


  return(
    <div className='Wrap'>
      {/* 상품삭제 모달창 */}
      { modal == true ? <Countmodal num={num} cart={cart}></Countmodal> : null }

      <h4>장바구니</h4>
      <ul className='allSelect'>
        <li onClick={()=> {statuschkbox(); setClicked(cart.id)}}>전체선택</li>
        <li>|</li>
        <li onClick={()=> {dispatch(cartActions.remove(clicked))}}>선택삭제</li>
      </ul>
      <div className='cartWrap'>
        {/* 왼쪽 장바구니 박스 */}
        <div className='cartwrapInner'>
          {
            cart.map(function(a,i){
              return(
                <div key={i} className='leftBox'>
                  <div>
                    <label for={'name0' + cart[i].id} onClick={()=>{setClicked(cart[i].id)}}>
                      <input type="checkbox" id={'name0' + cart[i].id}/>
                      <span className={'ckbox ' + chkbox}></span>
                    </label>
                    <img src={'/pic_' +(cart[i].id+1) + '.png'} className='cartImg'/>
                    <span className='name' onClick={ ()=> {
                      navi('/detail/' + cart[i].id)
                    }}>{cart[i].name}</span>
                  </div>
                    
                  <div className='countBtn'>
                    <span className='xiarr xi-angle-up-thin' onClick={()=> {
                      dispatch(cartActions.incCount(cart[i].id,cart[i].price))
                    }}></span>
                    <span>{cart[i].count}</span> 
                    <span className='xiarr xi-angle-down-thin' onClick={()=> {
                      dispatch(cartActions.decCount(cart[i].id,cart[i].price))
                    }}></span>
                    { cart[i].count < 1? <Countmodal num={i} cart={cart}></Countmodal> : null}
                  </div>
                  
                  <div className='priceBtn'>
                    <span>{cart[i].price*cart[i].count}원</span>
                    <span className='xiclose xi-close-thin' onClick={()=> {
                      dispatch(modalActions.modalOpen(true)); setNum(i);
                      dispatch(moneyActions.prototal(cart[i]));
                      document.body.style.overflow = "hidden";
                    }}></span>
                  </div>
                </div>
              )
            })
          }
        </div>

        {/* 우측 주문금액 박스 */}
        <div className='rightBox'>
          <div>
            <h6>주문금액</h6>
            <ul>
              <li>총 상품금액</li>
              <li>{prototal}원</li>
            </ul>
            <ul>
              <li>배송비</li>
              <li>2000 원</li>
            </ul>
            <ul>
              <li>총 결제금액</li>
              <li> {fintotal}원</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Cart

// 상품삭제 모달창 component
function Countmodal(props) {

  let dispatch= useDispatch()



  return(
      <div className='cartModalll'>
        <div className='cartModalll_fir'>
          <div className='cartModalll_seco'>
            <h5>"{props.cart[props.num].name}" 을 삭제하시겠습니까?</h5>
            <ul>
              <li onClick={()=> {
                dispatch(modalActions.modalOpen(false));
                dispatch(desmodalActions.desmodalOpen(false));
                document.body.style.overflow = "unset";
              }}>취소</li>
              <li onClick={ ()=> {
                dispatch(cartActions.remove(props.num))
                dispatch(modalActions.modalOpen(false));
                document.body.style.overflow = "unset";
              }}>확인</li>
            </ul>
          </div>
        </div>
      </div>
  )
}


