import { useContext } from 'react';
import ReKeepContext from './RekeepContext';

function useRekeep() {
  const { store, update } = useContext(ReKeepContext);

  return {
    store,
    update
  };
}

export default useRekeep;
