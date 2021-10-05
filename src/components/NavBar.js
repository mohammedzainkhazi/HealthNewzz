import React, {Component} from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
class NavBar extends Component {
    render(){
        return(
            <div style={{marginBottom:'10vh'}}>
                <AppBar position="fixed" color='primary'>
                    <Toolbar>
                        <Typography edge="start" variant="h4">VirusTracker</Typography>   
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default NavBar 
