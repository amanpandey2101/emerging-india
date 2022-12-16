import React from 'react'
import { useState } from 'react'
import './Card.css'
import {AnimateSharedLayout} from 'framer-motion'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

function Card(props) {
    const [expanded,setExpanded] = useState(false)
  return (
    <AnimateSharedLayout>
        {
            expanded? (
                "<ExpandedCard/>"
            ):
            <CompactCard param={props}/>
        }
    </AnimateSharedLayout>
  )
}

//Compact Card

function CompactCard ({param}){
    const Png = param.png;
    return(
        <div className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}/>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </div>
    )
}

export default Card