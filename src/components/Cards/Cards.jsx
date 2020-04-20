import React from 'react';
import {Card , CardContent , Typography ,Grid} from '@material-ui/core';
import styles from  './Cards.module.css';
import { typography } from '@material-ui/system';

const Cards = () =>{
    return (
        <div className = {styles.container}>
            <Grid container space = {3} justify ="center">
                <Grid item component = {Grid}>
                    <CardContent>
                        <typography color = "textSecondary" gutterBottom> Infected</typography>
                        <typography variant = "h5"> Real Data</typography>
                        <typography color = "textSecondary" > Date</typography> 
                        <typography variant = "body2"> Number of active Cases of Covid19</typography>
                    </CardContent>    
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;