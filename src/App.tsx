import React from 'react';
import { Mobile, PC } from './Responsive';

function App() {
  return (
    <>
      <Mobile>
        <p>Mobile</p>
      </Mobile>
      <PC>
        <p>PC</p>
      </PC>
    </>
  );
}

export default App;
