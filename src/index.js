import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// To show life cycle methods (componentDidMount and componentWillUnmount)
/*setTimeout(() => {
    ReactDOM.render(
        <h2 className="text-center">Nothing to wait for here!</h2>,
        document.getElementById('root')
    );
}, 4000);*/

// **********************************

/*ReactDOM.render(
 React.createElement('h2', null, 'Hello React'),
 document.getElementById('root')
 );*/


// React with JSX
/*
 const color = Math.random() > 0.5 ? 'green' : 'red';

 ReactDOM.render(
 <h2 style={{color}} className="text-center">
 Hello React with JSX. Random number for now is {Math.random()}
 </h2>,
 document.getElementById('root')
 );*/


// React components in one file
/*const color = Math.random() > 0.5 ? 'green' : 'red';

 const Header = ({message}) => {
 return (
 <h2 style={{color}} className="Header text-center">
 {message}
 </h2>
 );
 };

 Header.propTypes = {
 message: React.PropTypes.string
 };

 Header.defaultProps = {
 headerMessage: 'Hello default value'
 };

 const App = () => {
 return (
 <div className="App">
 <Header message="Naming Contests" />
 <div>
 ...
 </div>
 </div>
 );
 };*/