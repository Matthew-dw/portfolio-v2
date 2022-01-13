import { useState } from 'react';
import Body from './Body/Body';
import Title from './Title/Title';

function Portfolio() {
  const [showTitle, setShowTitle] = useState<boolean>(false);
  return (
    <div>
      <Title showTitle={showTitle} setShowTitle={setShowTitle}/>
      <Body />
    </div>
  );
}

export default Portfolio;
