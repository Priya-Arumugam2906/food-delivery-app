import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Hot & Delicious Food Delivered in Minutes </h2>
            <p>From spicy street food to healthy meals, we bring everything to your table.  
Experience lightning-fast delivery and unbeatable taste every time.  
Your favorite food is just a few clicks away.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header