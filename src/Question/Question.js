import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <div className="question">
                <h2>How does react work ?</h2>
                <h3>Answer</h3>
                <p>
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                    A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab. <br />
                    <strong>Note :</strong> React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier.
                </p>
            </div>
            <div className="question">
                <h2>What is the different between loop and state in react ?</h2>
                <p>
                    <h3>Answer</h3>
                    <p>
                        <strong> <u>Loop</u></strong> <br />
                        JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.
                    </p>
                    <p>
                        <strong> <u>State</u></strong> <br />
                        React components has a built-in state object.

                        The state object is where you store property values that belongs to the component.

                        When the state object changes, the component re-renders.
                    </p>
                </p>
            </div>
            <div className="question">
                <h2>where we can use useEffect in react ?</h2>
                <h3>Answer</h3>
                <p>useEffect after render: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component. Let’s look at an example on how to use the useEffect hook as a feature that can mimic the above mentioned life-cycle methods but in functional components. </p>
            </div>





        </div>
    );
};

export default Question;