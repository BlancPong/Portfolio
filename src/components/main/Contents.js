import React from 'react'
import './common.css'
export default function Content(props) {
    const classes = 'Contents ' + props.className;
    return <div className={classes}>{props.children}</div>;
}