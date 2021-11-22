import React, { useState } from 'react';
import Title from './Title/Title';

function App() {
  const [showTitle, setShowTitle] = useState<boolean>(true);
  return (
    <div>
      <Title showTitle={showTitle} setShowTitle={setShowTitle}/>
      <div>
        
      </div>
    </div>
  );
}

export default App;
