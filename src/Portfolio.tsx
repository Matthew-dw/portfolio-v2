import React, { useState } from 'react';
import Body from './Body/Body';
import Title from './Title/Title';

function Portfolio() {
  const [showTitle, setShowTitle] = useState<boolean>(true);
  return (
    <div>
      <Title showTitle={showTitle} setShowTitle={setShowTitle}/>
      <Body showTitle={showTitle} />
    </div>
  );
}

export default Portfolio;
