const containerElement = document.getElementById('root');

function Message({from}) {
  return <p>Вам письмо от <b>{from}</b></p>
}

function App() {
  let senderName = 'Keks'
  return (
    <section>
      <Message from={senderName} />
    </section>
  )
}

const root = ReactDOM.createRoot(containerElement);
root.render(<App />);