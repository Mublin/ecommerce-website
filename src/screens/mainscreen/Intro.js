import React from "react";
import './Intro.css'


const Intro = ()=>{
    return(
        <div id="a4">
            <div id="a2">
                <div className="patterns">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="polka-dots" x="0" y="0"                    width="100" height="100"
                                patternUnits="userSpaceOnUse">
                                    <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                            </pattern>  
                            <style>
                                {/* @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i"); */}
                            </style>
                                
                        </defs>
                                        
                                {/* <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect> */}
                                
                                
                            
                        <p x="50%" y="60%" className="texting" textAnchor="middle"  >
                            WELCOME TO <wbr></wbr>
                            THE FIRST <wbr></wbr>
                            AREWA 
                            ECOMMERCE 
                            WEBSITE
                        </p>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Intro;