const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

function Header() {
  return (
    <header>
      <nav>
        <img src="react-logo.png" width="40px" />
      </nav>
    </header>
  );
}

function MyPage() {
  return (
    <div>
      <Header />
      <h1>Reasons I'm Excited To Learn React</h1>
      <ol>
        <li>More Readable Code</li>
        <li>Flexible Site</li>
        <li>Popular Framework</li>
      </ol>
      <footer>
        <small>C 2023 Nofal development. All rights reserved.</small>
      </footer>
    </div>
  );
}

root.render(<MyPage />);
