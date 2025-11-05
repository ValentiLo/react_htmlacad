const containerElement = document.getElementById('root');

function Message(props) {
  return <p>Вам письмо от <b>{props.from}</b></p>
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