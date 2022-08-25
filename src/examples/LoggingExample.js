import React from 'react';
import { createLogger } from '@trv-ent-web/logging';
import { TdsButton } from '@trv-tds/react';

function LoggingExample() {
  let logger = createLogger({ name: 'example logger' });

  const handleOnClick = () => {
    logger.info('Logging some info');
  };

  return (
    <TdsButton id="logging" variant="primary" onClick={handleOnClick}>Log INFO</TdsButton>
  );
}

export default LoggingExample;
