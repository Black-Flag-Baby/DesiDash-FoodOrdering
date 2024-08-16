import React from 'react'
import { assets } from '../../assets/asset'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app_download' id="app_download">
        <p>
            For Better Experience Download <br/> DesiDash app
        </p>
        <div className="D_platform">
            <img src={assets.f12} alt="playstore" />
            <img src={assets.f11} alt="applestore" />
        </div>

    </div>
  )
}

export default AppDownload