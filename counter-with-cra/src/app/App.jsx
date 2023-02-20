import './App.css';
import { Counter } from '../components';

function App() {
  return(
    <div className="App">
      <Counter count={2} />
      <Counter step={3} />
    </div>
  );
}

export default App;

// import logo from './assets/logo.svg';

// function App() {
//   console.log('rendering App Component')

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="리액트" />
//         <p>
//           <code>src/App.js</code> 파일을 수정하면 {' '}
//           <abbr></abbr>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

