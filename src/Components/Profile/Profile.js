import React, { useState } from 'react';
import logo from '../../images/my-image-1.jpg'
import Detail from './Exercise-details/Detail';
import './Profile.css'
const Profile = (props) => {

    const Times = [10, 20, 30, 40, 50,]
    const [BreakTime, Setbreaktime] = useState(0)

    const addTime = (y) => {
        Setbreaktime(y);
        localStorage.setItem('break-Time', y)
    }

    return (
        <div className='profile'>
            <div className='self'>

                <img src={logo} alt="" />
                <span>
                    <h3>Mahmudur Rahman</h3>
                    <p>Dhaka ,Bangladesh</p>
                </span>
            </div>
            <div className='parsonal-details'>
                <p>95 <small>kg</small>
                    <h5>Weight</h5>
                </p>
                <p>6.5
                    <h5>Height</h5>
                </p>
                <p>30 <small>year</small>
                    <h5>Weight</h5>
                </p>

            </div>
            <div className='Add-Break'>
                <h2>Add a break</h2>
                <p>
                    {
                        Times.map(x => <button key={x} className='btn-break' onClick={() => addTime(x)} >{x}s</button>)
                    }
                </p>
            </div>

            {
                <Detail breaktime={BreakTime} sum={props.sum} ></Detail>
            }





        </div>
    );
};

export default Profile;