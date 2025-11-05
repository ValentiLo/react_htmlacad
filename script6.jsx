const containerElement = document.getElementById('root');

class App extends React.Component {
  render() {
    return <h1>Hello, world!</h1>
  }
}

const root = ReactDOM.createRoot(containerElement);
root.render(<App />);
