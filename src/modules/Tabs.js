import React from 'react'
import About from './About'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'

function Tabs () {
  return (
    <div id="content">
      <label className="tab" htmlFor="tab-top" id="about-btn">About</label>
      <label className="tab selected-tab" htmlFor="tab-front"
             id="home-btn">Home</label>
      <label className="tab" htmlFor="tab-bottom" id="menu-btn">Menu</label>
      <label className="tab" htmlFor="tab-back"
             id="contact-btn">Contact</label>
      <input type="radio" name="tabs" id="tab-top"/>
      <input type="radio" name="tabs" id="tab-front"/>
      <input type="radio" name="tabs" id="tab-bottom"/>
      <input type="radio" name="tabs" id="tab-back"/>
      <div className={'cube'}>
        <About/>
        <Home/>
        <Menu/>
        <Contact/>
      </div>
      <footer><a href="https://github.com/winplam/restaurant-react-version">GitHub</a></footer>
    </div>
  )
}

export default Tabs
