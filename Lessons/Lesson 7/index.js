/*
// Get the container element //
const container = document.querySelector('#root');

// Initialize the root from the container //
const root = ReactDOM.createRoot(container);

// Intialize Custom Component //
function MainContent() {
  return <h1>I'm Learning React!</h1>;
}

// Render some output //
root.render(<h1>Hello, React!</h1>);
*/

// Recreate with Vanilla JS
const headingOne = document.createElement('h1');
headingOne.textContent = 'Hello, React!';
headingOne.className = 'header';
document.querySelector('#root').appendChild(headingOne);
