import React from 'react';
import logo from '../../images/my-image-1.jpg'
import Detail from './Exercise-details/Detail';
import './Profile.css'
const Profile = (props) => {



    return (
        <div>
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
                    <span>10s</span>
                    <span>20s</span>
                    <span>30s</span>
                    <span>40s</span>
                    <span>50s</span>
                </p>
            </div>
            <Detail sum={props.sum}></Detail>



        </div>
    );
};

export default Profile;