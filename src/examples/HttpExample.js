import React from 'react';
import TrvHttp from '@trv-ent-web/http';
import { TdsButton } from '@trv-tds/react';

function HttpExample() {
  let trvHttp = new TrvHttp({
    appName: 'some app',
    baseUrl: 'base url',
    correlationId: 'correlation id',
    sessionId: 'session id'
  });

  const handleOnClick = () => {
    console.log(trvHttp.get('http://whatever.whatever'));
  };

  return (
    <div className="tds-mb-l">
      <h4>HTTP Example</h4>
      <TdsButton id="http" variant="primary" onClick={handleOnClick}>HTTP GET</TdsButton>
    </div>
  );
}

export default HttpExample;
