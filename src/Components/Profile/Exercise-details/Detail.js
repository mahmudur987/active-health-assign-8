
import React from 'react';
import './Detail.css'
const Detail = (props) => {
    // console.log(props.sum)
    return (
        <div className='details'>
            <h2>Exercise Details</h2>
            <p>Exercise Time :{props.sum}</p>
            <p>Break-Time Time :{props.breaktime}s</p>
        </div>
    );
};

export default Detail;