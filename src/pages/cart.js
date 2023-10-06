
import { useSelector, useDispatch} from 'react-redux'
import { delmodalActions, cartActions} from '../store/store.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DelModal } from '../component/modal.js'
import styled from 'styled-components'



function Cart() {
  let delmodal = useSelector((state) => {return state.delmodal})
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
    <CartContent>
      {/* 상품삭제 모달창 */}
      {/* { desmodal == true ? setNum(desmodalId) : null } */}
      { delmodal == true? <DelModal num={num} cart={cart}></DelModal> : null }


      <h4>장바구니</h4>
      {/* <ul className='allSelect'>
        <li onClick={()=> {statuschkbox(); }}>전체선택</li>
        <li>|</li>
        <li onClick={()=> {dispatch(cartActions.remove(cart.id))}}>선택삭제</li>
      </ul> */}
      <div className='cartcontWrap'>
        {/* 왼쪽 장바구니 박스 */}
        <div className='leftboxWrap'>
          {
            cart.map(function(a,i){
              return(
                <div key={i} className='leftBox'>
                  <div className='proInfo'>
                    <input type="checkbox" id={'name0' + cart[i].id} onClick={()=> {check == true? setChkbox('check'):setChkbox('')}}/>
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
                    {/* { cart[i].count < 1? alert("수량이 없습니다"): null } */}
                  </div>
                  
                  <div className='priceBtn'>
                    <span>{cart[i].price*cart[i].count}원</span>
                    <span className='xiclose xi-close-thin' onClick={()=> {
                      dispatch(delmodalActions.delModal(true)); setNum(i);
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
    </CartContent>
  )
}





// styled components
let CartContent = styled.div `
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  box-sizing: border-box;
  margin: 0 auto 150px;
  @media (max-width:610px) {
    padding: 0 20px;
  }
  &>h4 {
    font-family: 'NanumSquareNeo-Variable';
    font-weight: 600;
    font-size: 48px;
    color: #333;
    text-align: center;
    padding: 60px 0;
    margin-bottom : 0;
    @media (min-width:610px) and (max-width : 1024px) {
      font-size : 35px;
      padding-top: 80px;
    }
    @media (max-width:767px) {
      border-bottom: 1px solid #ddd;
      padding-bottom: 30px;
    }
    @media (max-width:610px) {
      font-size : 25px;
    }
  }
  &>.cartcontWrap {
    display: flex;
    align-items: center;
    @media (max-width:1024px) {
      flex-direction : column;
    }
    &>div.leftboxWrap {
      flex: 1.5;
      // <---- 왼쪽 장바구니 항목 ---->
      &>div.leftBox {
        display: flex;
        padding: 20px 0;
        border-bottom: 1px solid #ddd;
        @media (max-width:610px) {
          flex-direction : column;
        }
        &>div {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
        }
        &>div.proInfo {
          flex: 3;
          &>input[type="checkbox"] {
            display: none;
            &:checked + .ckbox:before {background-image:url('/ckbox_ck.png');}
            &+.ckbox {position: relative;cursor: pointer;}
            &+.ckbox:before {
              content:'';
              display:inline-block;
              top: 0;
              left: 0;
              width:30px;
              height:30px;
              background-size:100%;
              background-image:url('/ckbox.png');
              background-size: cover;
              @media (max-width:610px) {
                display : none;
              }
            }
            &+.ckbox.check:before {background-image:url('/ckbox_ck.png');}
          }
          &>img.cartImg {
            width: 40%;
            padding-left: 20px;
            @media (max-width:610px) {
              width: 45%;
              padding-left: 0;
            }
          }
          &>span.name {
            color: #444;
            text-transform: uppercase;
            cursor: pointer;
            font-size: 20px;
            @media (max-width:610px) {
              font-size: 16px;
              display: inline-block;
              width: 50%;
            }
          }
        }
        &>div.countBtn {
          flex-direction: column;
          justify-content: center;
          @media (max-width:610px) {
            align-items: end;
          }
          &>span {
            font-size: 20px;
            color: #444;
            margin : 10px 9;  
          }
          &>.xiarr {cursor:pointer;margin: 0;}
          @media (max-width:610px) {
            &>span:nth-child(2) {transform : translateX(-5px);}
          }
        }
        &>div.priceBtn {
          justify-content: end;
          margin-top : 20px;
          &>span {
            font-size: 20px;
            color: #444;
            margin-right : 20px;
            @media (max-width:610px) {
              font-size: 16px;
            }
          }
          &>span.xiclose {cursor:pointer;margin: 0;}
        }
      }
    }
    // <---- 오른쪽 가격표 ---->
    &>div.rightBox {
      flex: 0.5;
      margin-left: 80px;
      padding: 50px;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      @media (max-width:1024px) {
        width : 100%;
        margin-top : 100px;
        box-sizing: border-box;
        margin-left : 0;
      }
      &>h1 {
        font-family: 'NanumSquareNeo-Variable';
        text-align: center;
        font-size: 25px;
        border-bottom: 1px solid #000;
        padding-bottom:30px;
        @media (max-width:610px) {
          font-size : 22px;
        }
      }
      &>div {
        margin-top: 30px;
        &>ul {
          display: flex;
          justify-content: space-between;
          padding-left: 0;
          &>li {font-family: 'NanumSquareNeo-Variable';}
        }
      }
    }
`;







export default Cart
