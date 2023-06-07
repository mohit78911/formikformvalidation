import React from 'react'
import ".//Navbar.css"


export default function navbar() {
    return (
        <div>
            <div className='mainNavbar'>
                <div className='rightBar'>
                    <div className='logoName'>
                        FormikFormValidation
                    </div>
                </div>
                <div className='centerBar'>
                    <div className='searchBarSet'>
                        <div className='searchIcon'>
                        <img className='logosearch' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsZsjY46D3whfdkqeE3BvzAKy61374wBUGw&usqp=CAU'/>
                        </div>
                        <input className='inputField' placeholder='Search Field' />
                    </div>
                </div>
                <div className='leftBar'>
                    <div className='textEmoji'>
                    Emojis
                        </div>
                        </div>
            </div>
        </div>
    )
}
