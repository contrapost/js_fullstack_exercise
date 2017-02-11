import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
// import axios from 'axios';
// import data from '../testData';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

class App extends React.Component{
    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };

    //Life cycle
   componentDidMount() {
        // console.log('did mount'); // Can be used to ajax-call or to fire a timer or listeners to events
        // debugger;
       /*axios.get('/api/contests')
           .then(response => {
               this.setState({
                   contests: response.data.contests
               });
           })
           .catch(console.error);
*/
    }

    componentWillUnmount() {
        // console.log('will unmount'); // Clean timers or listeners
        // debugger;
    }

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );

        this.setState({
            pageHeader: this.state.contests[contestId].contestName,
            currentContestId: contestId
        })
    };

   currentContent() {
       if(this.state.currentContestId) {
           return <Contest {...this.state.contests[this.state.currentContestId]} />;
       }

       return <ContestList
           onContestClick={this.fetchContest}
           contests={this.state.contests} />;
   }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                { this.currentContent()}
            </div>
        );
    }
}

export default App;