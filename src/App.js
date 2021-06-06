import React from 'react';

function Food({name}) {
  return <h1>I like {name}</h1>;
}

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
        <Food key={dish.id} name={dish.name}/> 
      ))}
    </div>
  );
}

export default App;
