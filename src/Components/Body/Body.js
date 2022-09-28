import './Body.css'


import React, { useEffect, useState } from 'react';
import Practice from './Practice/Practice';

const Body = () => {
    const [practices, SetPractices] = useState([]);
    useEffect(() => {
        fetch('items.json').then(res => res.json()).then(data => SetPractices(data))
    }, [])

    console.log(practices)

    return (
        <div className='body'>
            <div className='main'>
                <h1>Active For Health</h1>
                <h3>Select Todays Exercise</h3>

                <div className='Practice'>
                    {
                        practices.map(practice => <Practice practice={practice} key={practice._id}></Practice>)

                    }
                </div>




            </div>








            <div> result</div>

        </div>
    );
};

export default Body;