import { useNavigate} from "react-router-dom"
import { useDispatch} from 'react-redux'
import {addmodalActions, movemodalActions, cartActions, delmodalActions, loginmodalActions} from '../store/store.js'
import styled from 'styled-components'



// 장바구니 담기 모달창 component
const AddModal = ({pro}) => {

    let dispatch= useDispatch()
  
    return(
        <ModalBox>
          <Modal>
            <ModalInner>
              <Title>"{pro.name}" 을 장바구니에 담으시겠습니까?</Title>
              <Buttonbox>
                <Button onClick={()=> {
                  dispatch(addmodalActions.addModal(false));
                  document.body.style.overflow = "unset";
                }}>취소</Button>
                <Button onClick={ ()=> {
                  dispatch(addmodalActions.addModal(false));
                  dispatch(cartActions.addItem(pro))
                  dispatch(movemodalActions.moveModal(true))
                  document.body.style.overflow = "hidden";
                }}>확인</Button>
              </Buttonbox>
            </ModalInner>
          </Modal>
        </ModalBox>
    )
}
  
  
  
// 장바구니 이동 모달창 component
const MoveModal = () => {

  let dispatch= useDispatch()
  let navi = useNavigate()

  return(
    <ModalBox>
        <Modal>
          <ModalInner>
            <Title>장바구니로 이동하시겠습니까?</Title>
            <Buttonbox>
              <Button onClick={()=> {
                dispatch(movemodalActions.moveModal(false));
                document.body.style.overflow = "unset";
              }}>취소</Button>
              <Button onClick={ ()=> {
                dispatch(movemodalActions.moveModal(false));
                document.body.style.overflow = "unset";
                navi('/cart')
              }}>확인</Button>
            </Buttonbox>
          </ModalInner>
        </Modal>
    </ModalBox>
  )
}




// 상품삭제 모달창 component
const DelModal = ({cart, num}) => {

  let dispatch= useDispatch()
  return(
      <ModalBox>
          <Modal>
              <ModalInner>
                <Title>"{cart[num].name}" 을 삭제하시겠습니까?</Title>
                <Buttonbox>
                  <Button onClick={()=> {
                    dispatch(delmodalActions.delModal(false));
                    document.body.style.overflow = "unset";
                  }}>취소</Button>
                  <Button onClick={ ()=> {
                    dispatch(cartActions.remove(num))
                    dispatch(delmodalActions.delModal(false));
                    document.body.style.overflow = "unset";
                  }}>확인</Button>
                </Buttonbox>
              </ModalInner>
          </Modal>
      </ModalBox>
  )
}
  

// 로그인 준비중 모달창 component
const LoginModal = () => {

    let dispatch= useDispatch()
  
    return(
      <ModalBox>
            <Modal>
                <ModalInner>
                  <Title>로그인 서비스 준비중입니다. &nbsp;조금만 기다려주세요.</Title>
                  <Btnonly onClick={()=> {dispatch(loginmodalActions.loginModal(false)); document.body.style.overflow = "unset";}}>확인</Btnonly>
                </ModalInner>
            </Modal>
      </ModalBox>
    )
  }
  






// styled components
let ModalBox = styled.div`
    font-family: 'NanumSquareNeo-Variable';
    position: fixed;
    top: 0;
    left: 0;
    height : 100%;
    background-color: rgba(0, 0, 0,0.4);
    width: 100%;
    z-index: 10000;  
`;
let Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width : 90%;
    max-width: 800px;
    height: 150px;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 20px;
    text-align: center;
    padding: 60px 0;
`;
let ModalInner = styled.div `width: 90%;margin: 0 auto;font-size: 20px;`;
let Title = styled.h5 `color: #333;text-transform: uppercase;`;
let Buttonbox = styled.ul `
    display: flex;
    justify-content: space-around;
    column-gap: 10px;
    margin-top: 30px;
    width: 100%;
    padding: 0;
`;
let Button = styled.ul `
    flex: 1;
    border: 1px solid #666;
    padding: 15px 0;
    color: #333;
    border-radius: 5px;
    font-size: 16px;
    &:hover {
        background-color: #00b6b8;
        border: none;
        color: #fff;
        cursor: pointer;
    }
`;
let Btnonly = styled.button `
    font-family: 'NanumSquareNeo-Variable';
    border: 1px solid #666;
    padding: 15px 0;
    color: #333;
    border-radius: 5px;
    font-size: 16px;
    display: block;
    width: 90%;
    background-color: transparent;
    margin: 0 auto;
    &:hover {
        background-color: #00b6b8;
        border: none;
        color: #fff;
        cursor: pointer;
    }
`;




export {AddModal, DelModal, MoveModal, LoginModal}