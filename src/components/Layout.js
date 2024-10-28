import React, { useState, useEffect,Children,cloneElement } from 'react';
import languageState from '../lib/LanguageState';


export default function Layout({ children }) {

  const [state, setState] = useState(languageState.getSharedState());

  useEffect(() => {
    const handleStateChange = () => {
      setState(languageState.getSharedState());
    };

    languageState.on('stateChange', handleStateChange);

    return () => {
      languageState.off('stateChange', handleStateChange);
    };
  }, []);
   // Pass `state` as a prop to each child
   const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, { state })
  );

  return (
    <div className="container-fluid p-0">
        {childrenWithProps}
    </div>

  );
}

