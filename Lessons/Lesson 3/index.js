// Get the container element //
const container = document.querySelector('#root');

// Initialize the root from the container //
const root = ReactDOM.createRoot(container);

// Render some output //
root.render(<h1>Hello, everyone!</h1>);
