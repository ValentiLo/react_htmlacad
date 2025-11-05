Существует несколько способов подключить React и ReactDOM. Вот основные подходы:

## 1. Подключение через CDN (быстрый старт)

### HTML файл:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>

    <!-- React и ReactDOM через CDN -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <!-- Babel для трансформации JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- Ваш React код -->
    <script type="text/babel">
        function App() {
            return React.createElement('h1', null, 'Привет, React!');
        }
        
        ReactDOM.render(
            React.createElement(App),
            document.getElementById('root')
        );
    </script>
</body>
</html>
```

## 2. Создание проекта через Create React App (рекомендуемый способ)

```bash
# Установка Create React App
npx create-react-app my-app
cd my-app
npm start
```

### Структура проекта:
```
my-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
└── package.json
```

### src/index.js:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### src/App.js:
```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Привет, React!</h1>
    </div>
  );
}

export default App;
```

## 3. Ручная настройка с Webpack

### Установка зависимостей:
```bash
npm init -y
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-react html-webpack-plugin
```

### webpack.config.js:
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    port: 3000
  }
};
```

### .babelrc:
```json
{
  "presets": ["@babel/preset-react"]
}
```

## 4. Использование с JSX

### С Babel в браузере:
```html
<script type="text/babel">
  function Welcome(props) {
    return <h1>Привет, {props.name}!</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Алиса" />
        <Welcome name="Боб" />
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
```

### В проекте с сборкой:
```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Компонент с JSX</h1>
      <p>Это работает благодаря Babel</p>
    </div>
  );
};

export default MyComponent;
```

## 5. Современный способ (React 18+)

### Использование createRoot:
```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <h1>Привет из React 18!</h1>;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

## Рекомендации:

1. **Для обучения**: Используйте CDN подход
2. **Для проектов**: Create React App или Vite
3. **Для продакшена**: Собственная сборка с оптимизацией

Какой способ вас интересует больше?
