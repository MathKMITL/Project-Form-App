
import React from 'react'
import Grid from '@material-ui/core/Grid';

export default class Import extends React.Component {
    render() {
        return (
            <Grid id='header' container spacing={24}>
                <Grid item xs={12} sm={3} >
                    <p className='headerTxt' > ATTENDANCE </p>
                </Grid>
                <Grid item xs={12} sm={6} />
                <Grid item xs={12} sm={3} > 
                    <p className='headerTxt' > {this.props.pageName} </p>
                </Grid>
            </Grid>
        );
    }
}

