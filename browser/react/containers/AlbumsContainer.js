import React, {Component} from 'react';
import {connect} from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = (state, ownProps) => {
  return {
    albums: state.albums.list
  }
}

export default connect(mapStateToProps)(Albums);

/*
export default class extends Component {

  constructor() {
    super();
    this.state = store.getState().albums;
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().albums);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Albums albums={this.state.list}/>;
  }

}
*/
