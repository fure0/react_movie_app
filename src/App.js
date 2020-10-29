import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

const foodIlike = [
  {name:"kimchi"},
  {name:"pizza"},
  {name:"chicken"},
  {name:"rice"},
  {name:"bread"}
];

function App(props) {
  return (
    <div>
      {foodIlike.map(dish => <Food fav={dish.name}/> )}
    </div>
  );
}

export default App;
