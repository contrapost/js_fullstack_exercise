import React, { Component } from 'react';

class Contest extends Component {

    render() {
        return (

            <div className="Contest">
                {this.props.id}
            </div>
        );
    }
}

Contest.propTypes = {
    id: React.PropTypes.number.isRequired
};

export default Contest;