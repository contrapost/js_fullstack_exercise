import React, { Component } from 'react';

class Contest extends Component {

    render() {
        return (

            <div className="Contest">
                {this.props.description}
            </div>
        );
    }
}

Contest.propTypes = {
    description: React.PropTypes.string.isRequired
};

export default Contest;