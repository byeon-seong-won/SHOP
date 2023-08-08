// 하단 photo type 탭 컨텐츠
const Tabcont = ({tab}) => {
    return(
      <div>
        {[
          <div className='tabImg'>
            <img src={process.env.PUBLIC_URL + '/pic_10.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_2.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_3.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_16.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_11.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_14.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_26.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_27.png'}/>
          </div>, 
          <div className='tabImg'>
            <img src={process.env.PUBLIC_URL + '/pic_5.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_6.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_4.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_19.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_21.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_30.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_31.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_32.png'}/>
          </div>,
          <div className='tabImg'>
            <img src={process.env.PUBLIC_URL + '/pic_7.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_13.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_24.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_22.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_6.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_4.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_12.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_27.png'}/>
          </div>,
          <div className='tabImg'>
            <img src={process.env.PUBLIC_URL + '/pic_17.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_9.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_1.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_8.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_18.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_12.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_23.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_24.png'}/>
          </div>,
          <div className='tabImg'>
            <img src={process.env.PUBLIC_URL + '/pic_15.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_20.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_28.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_29.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_17.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_18.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_12.png'}/>
            <img src={process.env.PUBLIC_URL + '/pic_22.png'}/>
          </div>
        ][tab]
      }
      </div>
    ) 
  }

  export {Tabcont}