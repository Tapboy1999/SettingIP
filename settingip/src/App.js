import React, { Component } from 'react'
//css
import './bootstrap.min.css'
import './App.css'
import ListSetting from './components/ListSetting'
import ItemValue from './components/ItemValue'


export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h2 className="header">Quản lý setting</h2>
          <div className="row">
            <div className="col-md-5">
              <h3>List Setting</h3>
              <ListSetting />
            </div>
            <div className="col-md-7">
              <ItemValue/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
