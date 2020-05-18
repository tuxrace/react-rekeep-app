# rekeep

> Simple state management using react context and hooks

### Demo app using rekeep
https://tuxrace.github.io/react-rekeep-app/#/create

## Install

```bash
npm install --save rekeep
```

## Usage

1. Wrap Provider to your app and set an initialStore.
```tsx
import React from 'react'
import { Provider } from 'rekeep'

const App = () => {
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

### Store
Store is where you put your global state, its an object that has a key and a value. If you want to get a value of a key from the store e.g ```'NAME'```
```js
   const { store } = useRekeep();
   const name = store['NAME'];

   console.log(name);
```

### Update
Update is a function to change the value of a specifies store key.
if you want to change a value in the store e.g. ```'NAME'```

```js
   const { store } = useRekeep();

   update('NAME', 'Alfred');
```
### Limitations
Since we use hook to access store data, rekeep can only be used inside a react component.

## Run locally
- npm install
- npm install --save lib/rekeep
- npm start

## Run test with coverage
- npm run test -- --coverage

## License

MIT © [tuxrace](https://github.com/tuxrace)
