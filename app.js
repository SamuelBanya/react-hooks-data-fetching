import React, { useState, useEffect } from "react";

function App() {
  const [peopleInSpace, setPeopleInSpace] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // This is an example of adding a handler function for a click event for a button:
  function handleClick() {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        setPeopleInSpace(data.people);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <div>
      {peopleInSpace.map((person) => person.name)}
      <button onClick={handleClick}>Click to Fetch!</button>
    </div>
  );
}

export default App;
