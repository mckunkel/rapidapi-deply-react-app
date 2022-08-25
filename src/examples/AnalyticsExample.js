import React from 'react';
import { Analytics, AnalyticsConfiguration, EventDefaults, EventData } from '@trv-ent-web/analytics';
import { TdsButton } from '@trv-tds/react';

function AnalyticsExample() {
  const analytics = new Analytics(
    new AnalyticsConfiguration({ url: 'someurl' }),
    new EventDefaults({
      appName: 'some name',
      clientId: 'xxx',
      sessionId: 'xxx',
      sourceSystem: 'DS',
      userId: ''
    })
  );

  const handleOnClick = () => {
    analytics.click(new EventData({
      emailHandoffType: '',
      source: '',
      subTopic: '',
      subject: '',
      url: '',
      value: ''
    }));
  };

  return (
    <TdsButton id="analytics" variant="primary" onClick={handleOnClick}>Fire Click Event</TdsButton>
  );
}

export default AnalyticsExample;
