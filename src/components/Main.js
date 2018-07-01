import React from 'react';
import Header from './header/Header'
import '../css/style.css'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        {/* <div>
          <Header />
        </div> */}
        <div className='menu'>
          <div className='logo_menu'>

          </div>
          <div className='list_menu'>

          </div>
        </div>
        <div className='form'>

        </div>
      </div>
    )
  }
}