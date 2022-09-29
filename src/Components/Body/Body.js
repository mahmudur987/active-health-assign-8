import './Body.css'


import React, { useEffect, useState } from 'react';
import Practice from './Practice/Practice';
import Profile from '../Profile/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Body = () => {
    const notify = () => toast.info("Wow congratulation! I can open It");
    const [practices, SetPractices] = useState([]);
    useEffect(() => {
        fetch('items.json').then(res => res.json()).then(data => SetPractices(data))
    }, [])

    const [numbers, Setnumbers] = useState([])
    const addTime = (items) => {
        let newNumbers = [];
        if (items) {
            newNumbers = [...numbers, items]
        }

        Setnumbers(newNumbers);
    }
    const initialValue = 0;
    const sumWithInitial = numbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );

    // console.log(sumWithInitial);
    // console.log(numbers)
    return (
        <div className='body'>
            <div className='main'>
                <h1><FontAwesomeIcon icon={faDumbbell} />Active For Health</h1>
                <h3>Select Todays Exercise</h3>

                <div className='Practice'>
                    {
                        practices.map(practice => <Practice practice={practice} addtime={addTime} key={practice._id}> </Practice>)

                    }
                </div>
            </div>
            <div className='Profile'>
                <Profile sum={sumWithInitial}></Profile>
                <button onClick={notify} className='btn-complete'>Activity Complets</button>


            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover


            />

        </div>
    );
};

export default Body;