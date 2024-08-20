// import { useState } from 'react';

// //Explicación: useState devuelve un array con dos valores: el estado actual (count) y una función para actualizarlo (setCount).
// //Permite agregar estado a un componente funcional.

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

//////////////////Explicación: useEffect se ejecuta después de que el componente se renderiza. Aquí, realiza una llamada a una API y actualiza el estado con la respuesta.
//Permite realizar efectos secundarios en componentes funcionales, como suscripciones o llamadas a APIs. 

// import React, { useState, useEffect } from 'react';

// function DataFetcher() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []); // El array vacío [] asegura que este efecto solo corra una vez.

//   return (
//     <div>
//       <p>Fetched Data: {data ? data.title : 'Loading...'}</p>
//     </div>
//   );
// }

////////////////// Explicación: useContext permite acceder al valor del contexto (UserContext) directamente en el componente UserProfile, sin necesidad de pasar props.
//Permite compartir valores entre componentes sin necesidad de pasar props manualmente en cada nivel del árbol de componentes.

// import React, { useState, useContext, createContext } from 'react';

// const UserContext = createContext();

// function UserProvider({ children }) {
//   const [user, setUser] = useState('John Doe');
//   return (
//     <UserContext.Provider value={user}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// function UserProfile() {
//   const user = useContext(UserContext);
//   return <p>Username: {user}</p>;
// }

// function App() {
//   return (
//     <UserProvider>
//       <UserProfile />
//     </UserProvider>
//   );
// }


//////////////////  Explicación: useRef crea una referencia que se puede asignar a un elemento DOM, permitiendo el acceso directo a su propiedad current.
// Permite crear una referencia mutable que persiste durante el ciclo de vida completo del componente.
// import { useRef } from 'react';

// function FocusInput() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

//Memoriza el resultado de una función para evitar cálculos costosos en cada renderizado.
////////////////// Explicación: useMemo guarda el resultado de la función hasta que num cambie, lo que evita recalcular expensiveValue en cada renderizado.

// import React, { useState, useMemo } from 'react';

// function ExpensiveCalculation({ num }) {
//   const [count, setCount] = useState(0);

//   const expensiveValue = useMemo(() => {
//     console.log('Calculating...');
//     return num * 2;
//   }, [num]);

//   return (
//     <div>
//       <p>Expensive Calculation: {expensiveValue}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
//     </div>
//   );
// }


////////////////// //Memoriza una función para evitar su recreación en cada renderizado.
////////////////// Explicación: useCallback evita la recreación de handleClick a menos que cambie alguna de sus dependencias, evitando renderizados innecesarios de Button.

// import React, { useState, useCallback } from 'react';

// function Button({ onClick }) {
//   console.log('Button rendered');
//   return <button onClick={onClick}>Click me</button>;
// }

// function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//   }, []);

//   return (
//     <div>
//       <Button onClick={handleClick} />
//       <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
//     </div>
//   );
// }

///Permite manejar el estado más complejo con un reductor, similar a Redux.
//////////////////Explicación: useReducer ofrece una forma más estructurada de manejar el estado utilizando acciones y un reductor.
// import React, { useReducer } from 'react';

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//     </div>
//   );
// }



