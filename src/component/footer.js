import { useNavigate} from 'react-router-dom'
import styled from 'styled-components'



const Footer = () => {
    let navi = useNavigate()
    const url = "https://www.instagram.com/wwpi.c"
  
    return(
      <Footerbox>
        <div>
          <h1 onClick={()=> {navi('/')}}>wwpi.c
            <i className="fa fa_insta fa-instagram" onClick={()=> {
              window.open(url)
            }}></i>
          </h1>
        </div>
        <hr></hr>
        <p className='footerText'>
          사진찍기를 좋아하는 사람의 평범한 일상 속 순간들입니다.<br/>
          인스타그램에서 더 많은 순간들을 만나보세요.
        </p>
      </Footerbox>
    )
  }
  


// styled components
let Footerbox = styled.div `
  height: 250px;
  background-color: #333;
  padding: 40px 60px;
  &>div {
    display: flex;
    justify-content: space-between;
    &>h1 {
      font-family: 'Oleo Script', cursive;
      color: #fff;
      font-size: 30px;
      cursor: pointer;
      &>.fa_insta {
        font-size: 25px;
        margin-left: 20px;
        transform: translateY(3px);
        cursor: pointer;
      }
    }
  } 
  &>hr {
    color: #fff;
    width: 100%;
    margin: 20px 0;
    @media (min-width:360px) and (max-width:767px) {
      margin: 0;
    }
  }
  &>p.footerText {
    color: #fff;
    font-family: 'NanumSquareNeo-Variable';
    line-height: 35px;
    font-size: 18px;
    letter-spacing: -0.5px;
    @media (min-width:360px) and (max-width:767px) {
      font-size: 16px;
    }
  }
  @media (min-width:360px) and (max-width:767px) {
    padding:20px
  }
`;









  export {Footer}