const containerElement = document.getElementById('root');

function Message({from}) {
  return <p>Вам письмо от <b>{from}</b></p>
}

function App({children}) {
  let senderName = 'Keks'
  return (
    <section>
      <Message from={senderName} />
      {children}
    </section>
  )
}

const root = ReactDOM.createRoot(containerElement);
root.render(
  <App>
    <p>Это дочерний компонент</p>
  </App>
);
