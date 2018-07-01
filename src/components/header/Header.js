
import React from 'react'
import Grid from '@material-ui/core/Grid';

export default class Import extends React.Component {
    render() {
        return (
            <Grid id='header' container spacing={16}>
                <Grid item xs={12} sm={3} >
                    <p className='headerTxt' > Math Ladkrabang </p>
                </Grid>
                <Grid item xs={12} sm={6} />
                <Grid item xs={12} sm={3} >

                    <button className='btnHeader'>Print</button>
                    <button className='btnHeader'>btn2</button>
                    <button className='btnHeader'>btn3</button>

                </Grid>
            </Grid>
        );
    }
}

