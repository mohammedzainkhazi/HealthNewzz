import React,{useState, useEffect} from 'react'
import { getCasesData } from './api/newsApi'
import {Card,CardContent, Typography} from '@material-ui/core'

const Covid = () => {

    const [cases,setCases] = useState([])
    useEffect(() =>{
        const getCases = async() => {
            const res = await getCasesData();
            setCases(res.statewise[0])
        }
        getCases()
    })
    return (
        <div style={{marginTop:'21px'}}>
                <Card style={{backgroundColor:'blue',color:'white'}}>
                    <CardContent>
                        <Typography variant='h4' style={{textColor:'ghostwhite'}}>
                            Total Confirmed
                        </Typography>
                        <Typography variant='h6'>
                            {cases.confirmed}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{backgroundColor:'orange',color:'white'}}>
                    <CardContent>
                        <Typography variant='h4' style={{textColor:'ghostwhite'}}>
                            Total Active
                        </Typography>
                        <Typography variant='h6'>
                            {cases.active}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{backgroundColor:'#61B33B',color:'white'}}>
                    <CardContent>
                        <Typography variant='h4' style={{textColor:'ghostwhite'}}>
                            Total Recovered
                        </Typography>
                        <Typography variant='h6'>
                            {cases.recovered}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{backgroundColor:'red',color:'white'}}>
                    <CardContent>
                        <Typography variant='h4' style={{textColor:'ghostwhite'}}>
                            Total Death
                        </Typography>
                        <Typography variant='h6'>
                            {cases.deaths}
                        </Typography>
                    </CardContent>
                </Card>
        </div>
    )
}

export default Covid  
