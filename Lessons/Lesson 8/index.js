// Get the container element //
const container = document.querySelector('#root');

// Initialize the root from the container //
const root = ReactDOM.createRoot(container);

// Create a navbar //
const navbar = (
  <nav>
    <h1>Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

// Render the navbar //
root.render(navbar);
