import React, { useState } from 'react';

//import { TdsField, TdsButton } from '@trv-tds/react';
import NewConnection from './NewConnection';
import {sendMessage} from '../functions';


function CarInsurance(props) {
  const [person, setPersonData] = useState({
    firstname: "",
    lastname: ""
  });
  const institutionName = "The Travelers"
  const [loadClient, setLoadClient] = useState(true);

  const newConnection = async(event) => {
    setPersonData(event);
    try {
      const message = {
        label: institutionName
      };
      console.log(message)
      await sendMessage("relationship", "1.0", "create", message);
    } catch (err) {
      console.error(err);
      alert(
        "Failed to create connection. See console for more details."
      );
    }
  }
  return (
    <section>
      {/* LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        STOP CLIENT
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <props.SocketComponent /> : null}
      <div>
        <NewConnection newConnection={newConnection} />
      </div>
      <p>The person info from the new connection component: <strong>{person.firstname}</strong>, <strong>{person.lastname}</strong> </p>
      <br />
    </section>
  );
}

export default CarInsurance;
