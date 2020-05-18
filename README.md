# rekeep

> Simple state management using react context and hooks

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

2. To get store data and update function import useRekeep hook.
```tsx
import React from 'react'
import { useRekeep } from 'rekeep'

const App = () => {
   const { store, update } = useRekeep();
   const name = store['NAME'];

   render() {
      return <div>
         <p> {name}</p>
         <button onClick={() => update('NAME', 'Alfred')}> Update name to Alfred</button>
      </div>
   }
}
```

### Store
Store is where you put your global state, its an object that has a key and a value.

### Spdate
Update is a function to change the value of a specifies store key


## License

MIT © [tuxrace](https://github.com/tuxrace)
