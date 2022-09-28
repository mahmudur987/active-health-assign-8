import './Body.css'


import React, { useEffect, useState } from 'react';
import Practice from './Practice/Practice';
import Profile from '../Profile/Profile';

const Body = () => {
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

    console.log(sumWithInitial);
    // console.log(numbers)
    return (
        <div className='body'>
            <div className='main'>
                <h1>Active For Health</h1>
                <h3>Select Todays Exercise</h3>

                <div className='Practice'>
                    {
                        practices.map(practice => <Practice practice={practice} addtime={addTime} key={practice._id}> </Practice>)

                    }
                </div>
            </div>
            <div>
                <Profile sum={sumWithInitial}></Profile>

            </div>

        </div>
    );
};

export default Body;