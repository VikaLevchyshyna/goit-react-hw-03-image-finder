import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import fetchPhotos from '../services/ApiService';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    largeImageURL: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
    });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    fetchPhotos(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  toggleModal = url => {
    this.setState({ largeImageURL: url ? url : '' });
  };

  render() {
    const { hits, isLoading, largeImageURL } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        {largeImageURL && (
          <Modal onClose={this.toggleModal} url={largeImageURL} />
        )}
        <ImageGallery hits={hits} onClick={this.toggleModal} />
        {hits.length > 0 && !isLoading && <Button fetchHits={this.fetchHits} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
