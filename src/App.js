
import './App.css';
import Props from  './Props';
import ComponentWithProps from './ComponentWithProps';
import Game from "./Game"
import Effect from "./Effect";
import Login from "./User";
import Car from "./Car"
import Products from "./Products";


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Props 
            name="Brian Wilson"
            animal="Elephant"
            age="22"
            breed="mammal"
         />
      
      </header>

      <div>
          <ComponentWithProps
             header="Hello and welcome to the page"
             content="Elephants are too gentle"
             number="22 text"
             nocontent="nothing here"
          />

          <Game />
          <Effect />
          <Login />
          <Car />
          <Products />
        
      </div>
    </div>
  );
}

export default App;
