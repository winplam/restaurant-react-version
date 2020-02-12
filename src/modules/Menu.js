import React from 'react'

function Menu () {
  return (
    <div className="tab-content" id="menu">
      <h1 id="le-menu">Le Menu</h1>
      <div className="menu-images">
        <img src="img/menu1.jpg" alt="French Menu Item #1" width="200px"
             height="200px" className="menu-img"/>
        <img src="img/menu2.jpg" alt="French Menu Item #2" width="200px"
             height="200px" className="menu-img"/>
        <img src="img/menu3.jpg" alt="French Menu Item #3" width="200px"
             height="200px" className="menu-img"/>
        <img src="img/menu4.jpg" alt="French Menu Item #4" width="200px"
             height="200px" className="menu-img"/>
      </div>
    </div>
  )
}

export default Menu
