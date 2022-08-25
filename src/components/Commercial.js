import React from 'react';
import { useSocket } from '../useSocket';

export default () => {
    const socket = useSocket();
    return (
        <>
            <div>Commercial</div>
            <button onClick={() => socket.send('Commercial')}>Send</button>
        </>
    );
};

