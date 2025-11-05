const containerElement = document.getElementById('root');

function Message() {
  return <p><b>Вам письмо!</b></p>
}

function App() {
  return (
    <section>
      <Message />
      <Message />
    </section>
  )
}

const root = ReactDOM.createRoot(containerElement);
root.render(<App />);
