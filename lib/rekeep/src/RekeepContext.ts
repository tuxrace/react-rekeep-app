import React from 'react';

type DefaultContextType = {
    store?: any;
    update?: any;
}

const defaultContext = {}

export default React.createContext<DefaultContextType>(defaultContext);
