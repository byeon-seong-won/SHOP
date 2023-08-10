import { useNavigate} from 'react-router-dom'
const Footer = () => {
    let navi = useNavigate()
    const url = "https://www.instagram.com/wwpi.c"
  
    return(
      <div className='footer'>
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
      </div>
    )
  }
  

  export {Footer}