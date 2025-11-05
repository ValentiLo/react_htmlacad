const containerElement = document.getElementById('root');

// Создаём новый React-элемент
const element = React.createElement('h1', {
  className: 'title',
  children: 'Hello world!',
});

// React-элемент — это простой объект
console.log(element);

// Отрисуем элемент в контейнере
const root = ReactDOM.createRoot(containerElement);
root.render(element);
