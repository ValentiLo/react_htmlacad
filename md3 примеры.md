Покажу конкретные примеры настройки Vite и создания компонентов!

## 🛠 Детальная настройка Vite

### 1. Расширенная конфигурация Vite

**vite.config.js:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Настройки сервера разработки
  server: {
    port: 3000,
    open: true, // автоматически открывать браузер
    cors: true,
  },
  
  // Настройки сборки
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
  },
  
  // Алиасы для путей
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  
  // Переменные окружения
  define: {
    'process.env': {}
  }
})
```

### 2. Настройка с TypeScript

**vite.config.ts:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 🧩 Примеры компонентов

### 1. Базовые функциональные компоненты

**src/components/Button/Button.jsx:**
```jsx
import './Button.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button'
}) => {
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
```

**src/components/Button/Button.css:**
```css
.btn {
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn--primary {
  background-color: #646cff;
  color: white;
}

.btn--primary:hover {
  background-color: #535bf2;
}

.btn--secondary {
  background-color: #f1f1f1;
  color: #213547;
}

.btn--small {
  padding: 8px 16px;
  font-size: 14px;
}

.btn--medium {
  padding: 12px 24px;
  font-size: 16px;
}

.btn--large {
  padding: 16px 32px;
  font-size: 18px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### 2. Компонент с состоянием и хуками

**src/components/Counter/Counter.jsx:**
```jsx
import { useState, useEffect } from 'react'
import Button from '../Button/Button'
import './Counter.css'

const Counter = ({ initialValue = 0, step = 1 }) => {
  const [count, setCount] = useState(initialValue)
  const [isEven, setIsEven] = useState(true)

  useEffect(() => {
    setIsEven(count % 2 === 0)
  }, [count])

  const increment = () => setCount(prev => prev + step)
  const decrement = () => setCount(prev => prev - step)
  const reset = () => setCount(initialValue)

  return (
    <div className="counter">
      <h2>Счётчик: {count}</h2>
      <p className={`counter__status ${isEven ? 'even' : 'odd'}`}>
        Число {isEven ? 'чётное' : 'нечётное'}
      </p>
      
      <div className="counter__controls">
        <Button variant="primary" onClick={increment}>
          +{step}
        </Button>
        
        <Button variant="secondary" onClick={decrement}>
          -{step}
        </Button>
        
        <Button variant="outline" onClick={reset}>
          Сброс
        </Button>
      </div>
    </div>
  )
}

export default Counter
```

### 3. Компонент формы

**src/components/ContactForm/ContactForm.jsx:**
```jsx
import { useState } from 'react'
import Button from '../Button/Button'
import './ContactForm.css'

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await onSubmit?.(formData)
      setFormData({ name: '', email: '', message: '' })
      alert('Сообщение отправлено!')
    } catch (error) {
      alert('Ошибка отправки: ' + error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Сообщение:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        variant="primary"
        size="large"
      >
        {isSubmitting ? 'Отправка...' : 'Отправить'}
      </Button>
    </form>
  )
}

export default ContactForm
```

### 4. Компонент списка с ключами

**src/components/TodoList/TodoList.jsx:**
```jsx
import { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import Button from '../Button/Button'
import './TodoList.css'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      }])
      setInputValue('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="todo-list">
      <h2>Список задач ({completedCount}/{todos.length})</h2>
      
      <div className="todo-list__input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Введите задачу..."
        />
        <Button onClick={addTodo} variant="primary">
          Добавить
        </Button>
      </div>

      <div className="todo-list__items">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
        
        {todos.length === 0 && (
          <p className="todo-list__empty">Задач пока нет</p>
        )}
      </div>
    </div>
  )
}

export default TodoList
```

**src/components/TodoItem/TodoItem.jsx:**
```jsx
import Button from '../Button/Button'
import './TodoItem.css'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      
      <span className="todo-item__text">{todo.text}</span>
      
      <Button 
        variant="secondary" 
        size="small"
        onClick={() => onDelete(todo.id)}
      >
        Удалить
      </Button>
    </div>
  )
}

export default TodoItem
```

## 🎯 Обновленный главный компонент

**src/App.jsx:**
```jsx
import { useState } from 'react'
import Counter from './components/Counter/Counter'
import ContactForm from './components/ContactForm/ContactForm'
import TodoList from './components/TodoList/TodoList'
import Button from './components/Button/Button'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('counter')

  const handleFormSubmit = async (formData) => {
    // Имитация отправки на сервер
    console.log('Отправка формы:', formData)
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Vite + React Примеры</h1>
        <nav className="app-nav">
          <Button 
            variant={activeTab === 'counter' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('counter')}
          >
            Счётчик
          </Button>
          <Button 
            variant={activeTab === 'todos' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('todos')}
          >
            Задачи
          </Button>
          <Button 
            variant={activeTab === 'form' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('form')}
          >
            Форма
          </Button>
        </nav>
      </header>

      <main className="app-main">
        {activeTab === 'counter' && (
          <Counter initialValue={0} step={1} />
        )}
        
        {activeTab === 'todos' && (
          <TodoList />
        )}
        
        {activeTab === 'form' && (
          <ContactForm onSubmit={handleFormSubmit} />
        )}
      </main>
    </div>
  )
}

export default App
```

## 📁 Структура проекта после настройки:
```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.css
│   ├── Counter/
│   │   ├── Counter.jsx
│   │   └── Counter.css
│   ├── ContactForm/
│   │   ├── ContactForm.jsx
│   │   └── ContactForm.css
│   ├── TodoList/
│   │   ├── TodoList.jsx
│   │   └── TodoList.css
│   └── TodoItem/
│       ├── TodoItem.jsx
│       └── TodoItem.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

Эти примеры показывают:
- ✅ Разные типы компонентов
- ✅ Работу с состоянием и эффектами
- ✅ Обработку событий
- ✅ Композицию компонентов
- ✅ Стилизацию
- ✅ TypeScript поддержку

Нужны ли дополнительные примеры или объяснения по конкретным аспектам?
