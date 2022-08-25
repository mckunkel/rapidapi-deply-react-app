import { SocketContext } from './socket-provider';
import { useContext } from 'react';

export const useSocket = () => {
  const socket = useContext(SocketContext);

  return socket;
};

