const containerElement = document.getElementById('root');

function Message({from}) {
  return <p>Вам письмо от <b>{from}</b></p>
}

function App() {
  return (
    <section>
      <Message from="Keks" />
    </section>
  )
}

const root = ReactDOM.createRoot(containerElement);
root.render(<App />);
