import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';
// import data from '../testData';

class App extends React.Component{
    state = {
        pageHeader: 'Naming Contests',
        contests: []
    };

    //Life cycle
   componentDidMount() {
        // console.log('did mount'); // Can be used to ajax-call or to fire a timer or listeners to events
        // debugger;
       axios.get('/api/contests')
           .then(response => {
               this.setState({
                   contests: response.data.contests
               });
           })
           .catch(console.error);

    }

    componentWillUnmount() {
        // console.log('will unmount'); // Clean timers or listeners
        // debugger;
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;