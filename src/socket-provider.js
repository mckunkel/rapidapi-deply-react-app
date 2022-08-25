import React, { createContext } from 'react';
import io from 'socket.io-client'

//const ws = io('http://localhost:3000')

const ws = new WebSocket('wss://70lallhxq5.execute-api.us-east-1.amazonaws.com/production');

export const SocketContext = createContext(ws);

export const SocketProvider = (props) => (
  <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
);