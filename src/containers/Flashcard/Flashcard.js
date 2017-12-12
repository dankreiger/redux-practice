import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Flashcard.css'

class Flashcard extends Component {
  render() {
    return(
      <div className='Flashcard'>
        <button onClick={this.props.nextCard}>Next</button>
        <div className='text'>{this.props.cardNr}</div>
        <button onClick={this.props.prevCard}>Prev</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardNr: state.cardNr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextCard: () => dispatch({type: 'NEXT_CARD'}),
    prevCard: () => dispatch({type: 'PREV_CARD'})
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);
