import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';
// import axios from 'axios';
// import data from '../testData';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

class App extends React.Component{
    state = {
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

        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            })
        });


    };

   pageHeader() {
       if(this.state.currentContestId) {
            return this.currentContest().contestName;
       }

       return 'Naming Contests';
   }

   currentContest() {
       return this.state.contests[this.state.currentContestId];
   }

   currentContent() {
       if(this.state.currentContestId) {
           return <Contest {...this.currentContest()} />;
       }

       return <ContestList
           onContestClick={this.fetchContest}
           contests={this.state.contests} />;
   }

    render() {
        return (
            <div className="App">
                <Header message={this.pageHeader()} />
                { this.currentContent()}
            </div>
        );
    }
}

export default App;