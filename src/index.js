import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Tabs from './modules/Tabs'

class Content extends React.Component {
  render () {
    return (
      <Tabs/>
    )
  }
}

ReactDOM.render(<Content/>, document.getElementsByTagName('body')[0])

// Add effects to tab changes
const tabEvents = () => {
  const tabs = document.querySelectorAll('.tab')
  const cubes = document.querySelectorAll('.tab-content')
  const highLightTab = (tabID) => {
    tabs.forEach(tab => tab.classList.remove('selected-tab'))
    document.getElementById(tabID).classList.add('selected-tab')
  }
  const highLightSquare = (childNumber) => {
    cubes.forEach(square => square.classList.remove('cube-active'))
    cubes[childNumber].classList.add('cube-active')
  }
  tabs.forEach(element => element
    .addEventListener('click', event => {
      tabEventHandler(event.target.id)
    }))
  const tabEventHandler = (tabID) => {
    switch (tabID) {
      case 'about-btn':
        highLightTab(tabID)
        highLightSquare(0)
        break
      case 'home-btn':
        highLightTab(tabID)
        highLightSquare(1)
        break
      case 'menu-btn':
        highLightTab(tabID)
        highLightSquare(2)
        break
      case 'contact-btn':
        highLightTab(tabID)
        highLightSquare(3)
        break
    }
  }
}
tabEvents()
