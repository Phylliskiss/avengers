import logo from './logo.svg';
import './App.css';


// rafc short cut for arrow functions
// import React from 'react'

// const App = () => {
//   return (
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h1>
//             Codetrain is awesome, react works!!!!

//             </h1>
//             <p>
//     My First React APP ....Hooray!!        </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//     Avengers        </a>
//           </header>
//         </div>
//   );
// }

// export default App



// rcc short cut for class functions
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
            Codetrain is awesome, react works!!!!

            </h1>
            <p>
    My First React APP ....Hooray!!        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
    Avengers        </a>
          </header>
      </div>
    )
  }
}
export default App


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
// My First React APP ....Hooray!!        </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
// Avengers        </a>
//       </header>
//     </div>
//   );
// }

// export default App;
