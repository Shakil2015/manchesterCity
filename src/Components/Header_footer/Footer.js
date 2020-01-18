import React from 'react'

import CityLogo from '../UI/Icons'
const Footer = (props)=>{
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                  link={true}
                  width="70px"
                  height="70px"
                  linkTo="/"
                >

                </CityLogo>
            </div> 
            <div className="footer_discl">
                Manchester city 2020.All rights reserved.
                
            </div>           
        </footer>
    )
}

export default Footer
