import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []); // []は初期状態

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
