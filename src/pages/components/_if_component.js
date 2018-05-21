import React, {Component} from 'react';

export default class If extends Component {
    render() {
        if(this.props.condition) {
            return this.props.children;
        }
        else {
            return false;
        }
    }
};

If.childContextTypes = {
    condition: React.PropTypes.object.isRequired,
};