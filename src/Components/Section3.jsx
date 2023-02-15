import React from 'react'
import img1 from "../Images/Sec2img1.png"
import img2 from "../Images/Sec2img2.png"
import img3 from "../Images/Sec2img3.png"
import "../Styles/Section3.css"


const Section3 = () => {
  return (
    <div className='Sec3body'>
        <h4>
            Why do people get involved with Cryptocurrencies? 
        </h4>
        <div className='sec3btn'>
            {/* <button onClick={()=> }> */}
                <h6>See Less</h6>
            {/* </button> */}
            <div  className='sec3btnflex'>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Section3