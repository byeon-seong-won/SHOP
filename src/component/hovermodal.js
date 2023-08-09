// import { useNavigate} from 'react-router-dom'
// const Card = ({pic, num}) => {

//     // let [numb,setNumb] = useState(0)
//     // let [modal,setModal] = useState(false)
//     let navi = useNavigate()
    
//       return(
//         <div className="picture">
//           <div className='picture_mo'
//             onMouseEnter={()=> {
//                 // { pic.id == num? <Hovermodal pic={pic}></Hovermodal> : null}
//             }}
//             onClick={()=> {
//               navi('/detail/' + (1))
//             }}
//             onMouseLeave={ ()=> {
//                 // { pic.id == num? null : <Hovermodal pic={pic}></Hovermodal>}
//             }}
//             >
//             <img src={'/pic_' + (num+1) + '.png'}/>
           
//           </div>
//         </div>
//       )
//     }
    
    
    
//     // 중간 컨텐츠 - 호버시 모달창 component
//     const Hovermodal = ({pic}) => {
//       return(
//         <div>
//           {
//             <div className='pictureHv'>
//               <h4>{pic.name}</h4>
//             </div>
//           }
//         </div>
//       )
//     }
    

//     export {Card}