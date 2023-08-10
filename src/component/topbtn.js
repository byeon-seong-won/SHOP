
const Topbtn = () => {
   return(
    <div>
        <i className="fa faArr fa-arrow-up" onClick={()=> {
          window.scroll({
            top : 0,
            behavior : 'smooth'
          })
        }}></i>
    </div>
   )
}

export {Topbtn}