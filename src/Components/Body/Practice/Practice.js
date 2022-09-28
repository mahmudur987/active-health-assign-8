import React from 'react';
import './Practice.css'
const Practice = (props) => {
    console.log(props.practice)
    const { name, Time, about, picture, age } = props.practice
        ; return (
            <div className='exercise'>
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <p>{about.slice(1, 100) + '....'}</p>
                <h4>Age :{age}</h4>
                <h4>Time requred :{Time}</h4>
                <button><p>Add To List</p></button>
            </div>
        );
};

export default Practice;