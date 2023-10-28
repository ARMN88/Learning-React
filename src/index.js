// Get the container element //
const container = document.querySelector('#root');

// Initialize the root from the container //
const root = ReactDOM.createRoot(container);

// Intialize Custom Component //
function MainContent() {
  return <h1>I'm Learning React!</h1>;
}

// Render some output //
root.render(
  <div>
    <MainContent />
  </div>
);
