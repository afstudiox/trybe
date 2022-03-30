// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

// MapStateToProps : Leitura do state
const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching});

// MapDispatchToProps : Gravação no state
const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

// Connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
