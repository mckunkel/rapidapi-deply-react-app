import React from 'react';
import init from '@trv-ent-web/omni-channels';
import { TdsButton } from '@trv-tds/react';

function OmniExample() {

  const clickChat = () => {
    console.log('chat clicked');
  };

  const clickCoBrowse = () => {
    console.log('cobrowse clicked');
  };

  init({
    configs: {
      chat: {                       
        form: {            
          inputs: [
            {
              id: 'cx_webchat_form_nickname',
              label: '@i18n:webchat.ChatFormFirstName',
              maxlength: '100',
              name: 'nickname',
              placeholder: '@i18n:webchat.ChatFormPlaceholderFirstName',                
              validate: (event, form, input) => {
                if (input) {
                  return !!input[0].value;
                }
                return false;
              },
            },
            {
              id: 'cx_webchat_form_firstname',
              label: '@i18n:webchat.ChatFormFirstName',
              maxlength: '100',
              name: 'firstname',
              placeholder: '@i18n:webchat.ChatFormPlaceholderFirstName',                
              type: 'hidden',
              value: 'test',
            },
            {
              id: 'cx_webchat_form_lastname',
              label: '@i18n:webchat.ChatFormLastName',
              maxlength: '100',
              name: 'lastname',
              placeholder: '@i18n:webchat.ChatFormPlaceholderLastName',                
              type: 'hidden',
              value: 'user',
            },
            {
              id: 'cx_webchat_form_subject',
              label: '@i18n:webchat.ChatFormSubject',
              maxlength: '100',
              name: 'subject',
              placeholder: '@i18n:webchat.ChatFormPlaceholderSubject',                
              type: 'hidden',
              value: () => {
                let url = window.location.pathname + window.location.hash;
                ['/#/', '/'].some(character => {
                  let done = false;
                  if (url && url.startsWith(character)) {
                    url = url.substr(character.length);
                    [url] = url.split('?');
                    done = true;
                  }
                  return done;
                });
                return url;
              },
            },
          ],
          wrapper: '<table></table>'
        },
        gmsUrl: 'https://cct-gms-devsecure.dvllb.travp.net/genesys/2/chat/PIChat',
        surveyLink: 'https://travelers.co1.qualtrics.com/jfe/form/SV_9Ab3i6pBuQbHpid',
        triggerClass: 'chat__start', 
        userData: {
          LOB: 'PI',
          userId: 'testuser',
        }
      },
      cobrowse: {          
        src: 'https://cct-cobrowse-dev.dvllb.travp.net/cobrowse/js/gcb.js',
        triggerClass: 'cobrowse__start',
        url: 'https://cct-cobrowse-dev.dvllb.travp.net/cobrowse'
      }
    },
    urls: {
      chatCobrowse: {
        cssUrl: 'https://www.travelers.com/media-assets/channels/chat/v2.0/css/channels.min.css',
        jsUrl: 'https://www.travelers.com/media-assets/channels/chat/v2.0/js/channels.min.js',
      },
      virtualAssistant: {
        jsUrl: 'https://dev2-selfservice.dev.travelers.com/virtual-assistant-js/virtualAssistant.js',
      },
    }
  });

  return (
    <div className="tds-row tds-mb-xl">
      <div className="tds-col-lg-3">
        <TdsButton id="chat" variant="primary" className="chat__start"
          onClick={clickChat}>Chat</TdsButton>
      </div>
      <div className="tds-col-lg-3">
        <TdsButton id="co-browse" variant="primary" className="cobrowse__start" 
          onClick={clickCoBrowse}>Co-Browse</TdsButton>
      </div>
    </div>
  );
}

export default OmniExample;
