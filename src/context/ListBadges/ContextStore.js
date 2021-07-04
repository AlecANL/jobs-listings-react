import { useState } from 'react';
import ListContext from './ListContext';

function ContextStore({ children }) {
  const [listBadges, setListBadges] = useState([]);
  const values = {
    listBadges,
    setListBadges,
  };

  return <ListContext.Provider value={values}>{children}</ListContext.Provider>;
}

export default ContextStore;
