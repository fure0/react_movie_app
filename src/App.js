import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App(props) {
  return (
    <div className="App">
      <h1>hello</h1>
      <Food fav="kimchii" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
