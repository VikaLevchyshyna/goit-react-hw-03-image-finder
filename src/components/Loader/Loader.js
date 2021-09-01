import { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  render() {
    return (
      <Loader
        type="Hearts"
        color="#00BFFF"
        height={60}
        width={60}
        timeout={3000} //3 secs
        className="loader"
      />
    );
  }
}
