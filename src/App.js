function App(props) {
    const currDate = new Date();
  
    return (
      <div>
        <h1>Hello, world! It's Julio here from Coursera</h1>
        <h2>The date now is {currDate.toLocaleDateString()}.</h2>
        <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  export default App;