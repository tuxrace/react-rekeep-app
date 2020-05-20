import React, { useState } from 'react';
import RekeepContext from './RekeepContext';

type StoreType = {}

const Provider: React.FC<{store: StoreType}> = (props) => {
    const { store, children } = props;
    const [ state, setState ] = useState<StoreType>(store);

    const update = (key: string, value: any) => {
        const newState = {...state, [key]: value };
        setState(newState);
    }

    return(
        <RekeepContext.Provider value={{ store: state, update}}>
            {children}
        </RekeepContext.Provider>
    )
}

export default Provider
