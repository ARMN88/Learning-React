const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

// Create navbar element //
const navbar = (
  <nav>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </nav>
);

// Doesn't Work! //
// document.querySelector('#root').append(navbar);

root.render(navbar);
