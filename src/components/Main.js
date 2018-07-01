import React from 'react';
import Header from './header/Header'
import '../css/style.css'
import Grid from '@material-ui/core/Grid';

export default class Main extends React.Component {
  render() {
    return (
      <div id='main'>
      <Grid container spacing={16} direction="column" justify='flex-start' >
        <Grid item xs >
          <Header />
        </Grid>
        <Grid item xs >
          <Grid container spacing={16} id='body_main' direction="row" alignItems='flex-start' >
            <Grid item xs={12} sm={3} id='menu' />
            <Grid item xs={12} sm={3} id='list_menu' />
            <Grid item xs={12} sm={6} id='form' />
            {/* <Grid xs container className='all_menu' direction="row" style={{background:'red'}} >
            <Grid item xl className='menu'style={{background:'green'}}>
            </Grid>
            <Grid item xl className='list_menu' style={{background:'red'}}>
            </Grid>
          </Grid>
          <Grid xs item className='form' style={{background:'gray'}} >
          </Grid> */}
          </Grid>
        </Grid>

      </Grid>
      </div>
    )
  }
}