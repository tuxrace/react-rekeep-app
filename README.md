#  📦 rekeep

> Simple state management using react context and hook.

### Demo app using rekeep
https://tuxrace.github.io/react-rekeep-app/#/create

## Install

```bash
npm install
npm install --save lib/rekeep
npm start
```

## Usage

1. Import Provider from rekeep and wrap Provider to your app then set an initialStore.

```tsx
import React from 'react'
import { Provider } from 'rekeep'

const App = () => {
   // An initialStore must always have a default state.
   const initialStore = {
      'NAME': 'Jim'
   };

  render() {
    return <Provider store={store}> <MyApp> </Provider>
  }
}
```

2. Get store data and update function anywhere in your app, using the useRekeep hook.
```tsx
import React from 'react'
import { useRekeep } from 'rekeep'

const Name = () => {
   const { store, update } = useRekeep();
   const name = store['NAME'];

   render() {
      return <div>
         <p> My name is {name}</p>
         <button onClick={() => update('NAME', 'Alfred')}> Update name to Alfred</button>
      </div>
   }
}
```
## UseRekeep hook

| Properties    | Type      | Optional |
| :---          | :---      | :---     |
| store         | object    | Yes      |
| update        | method    | Yes      |

### Store
Store is where you put your global state, its an object that has a key and a value. If you want to get a value of a key from the store e.g ```'NAME'```
```js
   const { store } = useRekeep();
   const name = store['NAME'];

   console.log(name);
```

### Update
Update is a function to change the value of a specifies store key
if you want to change a value in the store e.g. ```'NAME'```

```js
   const { store } = useRekeep();

   update('NAME', 'Alfred');
```

### Limitations
Since we use hook to access store data, rekeep can only be used inside a react component.

## Run test with coverage
- npm run test -- --coverage

## License

MIT © [tuxrace](https://github.com/tuxrace)
