import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Cretificate</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <div key={index} className="mywork-item">
                    <img src={work.w_img} alt="" />
                </div>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
        </div>
    </div>
  )
}

export default MyWork
