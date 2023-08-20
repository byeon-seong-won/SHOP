
import { useSelector, useDispatch} from 'react-redux'
import { modalActions, desmodalActions, cartActions} from '../store/store.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Cart() {
  let modal = useSelector((state) => {return state.modal})
  let desmodal = useSelector((state) => {return state.desmodal})
  let cart = useSelector((state) => {return state.cart})
  let dispatch = useDispatch()
  let navi = useNavigate()
  let [num,setNum] = useState('')
  let [chkbox, setChkbox] = useState('')



  // 총 가격 계산
  const priceSum = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].count;
    }
    return sum;
  }
  const totalSum = priceSum() + 2000;


  // <-- 전체선택 클릭시 스타일링
  const statuschkbox = () => {
    if(chkbox == '') {
      setChkbox('check')
    } else {
      setChkbox('')
    }
  }
  let [check, setCheck] = useState(false)



  return(
    <div className='cartContent'>
      {/* 상품삭제 모달창 */}
      { modal == true ? <Modal num={num} cart={cart}></Modal> : null }
      


      <h4>장바구니</h4>
      <ul className='allSelect'>
        <li onClick={()=> {statuschkbox(); }}>전체선택</li>
        <li>|</li>
        <li onClick={()=> {dispatch(cartActions.remove(cart.id))}}>선택삭제</li>
      </ul>
      <div className='cartcontWrap'>
        {/* 왼쪽 장바구니 박스 */}
        <div className='leftboxWrap'>
          {
            cart.map(function(a,i){
              return(
                <div key={i} className='leftBox'>
                  <div className='proInfo'>
                    <input type="checkbox" id={'name0' + cart[i].id}  onClick={()=> {check == true? setChkbox('check'):setChkbox('')}}/>
                    <span className={'ckbox ' + chkbox}></span>
                    <img src={'/pic_' +(cart[i].id+1) + '.png'} className='cartImg'/>
                    <span className='name' onClick={ ()=> {
                      navi('/detail/' + cart[i].id)
                    }}>{cart[i].name}</span>
                  </div>
                    
                  <div className='countBtn'>
                    <span className='xiarr xi-angle-up-thin' onClick={()=> {
                      dispatch(cartActions.incCount(cart[i].id));
                    }}></span>
                    <span>{cart[i].count}</span> 
                    <span className='xiarr xi-angle-down-thin' onClick={()=> {
                      dispatch(cartActions.decCount(cart[i].id));
                    }}></span>
                    { cart[i].count < 1? <Modal num={i} cart={cart}></Modal> : null}
                  </div>
                  
                  <div className='priceBtn'>
                    <span>{cart[i].price*cart[i].count}원</span>
                    <span className='xiclose xi-close-thin' onClick={()=> {
                      dispatch(modalActions.modalOpen(true)); setNum(i);
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
          <h1>주문금액</h1>
          <div>
            <ul>
              <li>총 상품금액</li>
              <li>{priceSum()}원</li>
            </ul>
            <ul>
              <li>배송비</li>
              <li>2000 원</li>
            </ul>
            <ul>
              <li>총 결제금액</li>
              <li>{totalSum}원</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


// 상품삭제 모달창 component
const Modal = ({cart, num}) => {

  let dispatch= useDispatch()

  return(
      <div className='modal'>
        <div>
          <div className='modalInner'>
            <h5>"{cart[num].name}" 을 삭제하시겠습니까?</h5>
            <ul>
              <li onClick={()=> {
                dispatch(modalActions.modalOpen(false));
                // dispatch(desmodalActions.desmodalOpen(false));
                document.body.style.overflow = "unset";
              }}>취소</li>
              <li onClick={ ()=> {
                dispatch(cartActions.remove(num))
                dispatch(modalActions.modalOpen(false));
                document.body.style.overflow = "unset";
              }}>확인</li>
            </ul>
          </div>
        </div>
      </div>
  )
}



export default Cart
