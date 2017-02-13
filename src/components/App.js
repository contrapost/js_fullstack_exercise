import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';
// import axios from 'axios';
// import data from '../testData';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

const onPopState = handler => {
    window.onpopstate = handler;
};

class App extends React.Component{

    static propTypes = {
      initialData: React.PropTypes.object.isRequired
    };

    state = this.props.initialData;

    //Life cycle
   componentDidMount() {
       onPopState((event) => {
           this.setState({
               currentContestId: (event.state ||{}).currentContestId
           })
       });

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
       onPopState(null);

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

    fetchContestList = () => {
        pushState(
            { currentContestId: null },
            `/`
        );

        api.fetchContestList().then(contests => {
            this.setState({
                currentContestId: null,
                contests
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
           return <Contest
               contestListClick={this.fetchContestList}
               {...this.currentContest()} />;
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