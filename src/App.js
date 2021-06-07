import React from 'react';
import PropTypes from 'prop-types';

function Food({name, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

// type check
// push test
Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodIlike = [
  {id:1, name:"kimchi", rating: 5},
  {id:2, name:"pizza", rating: 3},
  {id:3, name:"chicken", rating: 5},
  {id:4, name:"rice", rating: 5},
  {id:5, name:"bread", rating: 2}
];

function App(props) {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food key={dish.id} name={dish.name} rating={dish.rating}/> 
      ))}
    </div>
  );
}

export default App;
