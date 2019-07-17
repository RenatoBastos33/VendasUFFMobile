import React, { Component } from 'react';

import { View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Container } from './styles';

class src extends Component {
    render() {
        console.log(this.props)
        return (
            <View >
                {this.props.view}
            </View>);
    }
}

const mapStateToProps = state => ({
    view:state.navigation.view
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(src);
