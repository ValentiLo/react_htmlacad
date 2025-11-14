**Пропсы (props)** в React — это параметры, которые передаются от родительского компонента к дочернему. Они доступны только для чтения.

## Основы пропсов

### 1. Передача пропсов

```jsx
// Родительский компонент
function App() {
  return (
    <div>
      <User name="John" age={25} isOnline={true} />
    </div>
  );
}

// Дочерний компонент
function User(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Status: {props.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
```

### 2. Деструктуризация пропсов

```jsx
// Способ 1 - в параметрах
function User({ name, age, isOnline }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
      <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}

// Способ 2 - в теле функции
function User(props) {
  const { name, age, isOnline } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
}
```

### 3. Передача разных типов данных

```jsx
function App() {
  const userData = {
    name: "Alice",
    hobbies: ["Reading", "Swimming", "Coding"]
  };

  return (
    <div>
      <Profile 
        user={userData}
        scores={[95, 87, 92]}
        isActive={true}
        callback={() => console.log("Clicked!")}
        component={<span>Custom element</span>}
      />
    </div>
  );
}

function Profile({ user, scores, isActive, callback, component }) {
  return (
    <div onClick={callback}>
      <h2>{user.name}</h2>
      <p>Active: {isActive ? "Yes" : "No"}</p>
      <p>Hobbies: {user.hobbies.join(", ")}</p>
      <p>Average score: {(scores.reduce((a, b) => a + b) / scores.length).toFixed(1)}</p>
      {component}
    </div>
  );
}
```

### 4. Пропс children

```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Card title="My Card">
      <p>This is content inside the card</p>
      <button>Click me</button>
    </Card>
  );
}
```

### 5. Значения по умолчанию

```jsx
function Greeting({ name, greeting = "Hello" }) {
  return <h1>{greeting}, {name}!</h1>;
}

// Использование
<Greeting name="John" /> {/* Hello, John! */}
<Greeting name="Jane" greeting="Hi" /> {/* Hi, Jane! */}
```

### 6. PropTypes для проверки типов

```jsx
import PropTypes from 'prop-types';

function Product({ name, price, inStock }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inStock: PropTypes.bool
};

Product.defaultProps = {
  inStock: false
};
```

### 7. Spread оператор с пропсами

```jsx
function Button({ style, ...props }) {
  return (
    <button 
      style={{ padding: "10px 20px", ...style }}
      {...props}
    />
  );
}

function App() {
  const buttonProps = {
    onClick: () => alert("Clicked!"),
    children: "Click me",
    style: { backgroundColor: "blue" }
  };

  return <Button {...buttonProps} />;
}
```

## Важные особенности пропсов:

1. **Только для чтения** - пропсы нельзя изменять
2. **Однонаправленный поток** - данные передаются только сверху вниз
3. **Могут быть любого типа** - строки, числа, массивы, объекты, функции, JSX
4. **Обязательные и необязательные** - можно задавать значения по умолчанию

## Пример с классовым компонентом

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Использование
<Welcome name="Sara" />
```

Пропсы — это основной способ передачи данных между компонентами в React и фундаментальная концепция для понимания работы приложения.
