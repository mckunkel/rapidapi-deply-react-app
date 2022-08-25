import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import axios from 'axios';
import {getTime} from '../functions';

const ENDPOINT = "http://localhost:3000";
//const axios = require('axios')
export default function SocketComponent(props) {
    const [response, setResponse] = useState("");
    const [isConnected, setIsConnected] = useState(null);
    const [lastPong, setLastPong] = useState(null);
    
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
          setResponse(data);
        });
        socket.on('connect', () => {
            setIsConnected(true);
            console.log('server connected');
            console.log(socket.id);
          });
        socket.on('connect_error', ()=>{
            setTimeout(()=>socket.connect(),5500);
        })
    
        socket.on('disconnect', () => {
            setIsConnected(false);
            console.log('server disconnected');
        });
        socket.on("FromAPI", data => {
            setResponse(data);
        });
        socket.on("message", async (message) => {
            this.messages.unshift({
                content: message,
                time: getTime(),
            });
            // Handle received message differently based on message type
            switch (message["@type"]) {
                case "did:sov:123456789abcdefghi1234;spec/relationship/1.0/invitation":
                props.inviteDetailQRCode = (
                    await axios.post("/qr", { url: message.inviteURL })
                ).data;
                document.getElementById("invite-detail-modal").style.display =
                    "block";
                break;
            }
        });
        // CLEAN UP THE EFFECT
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('FromAPI');
            socket.off('connect_error');
            socket.off('FromAPI');
            socket.off('message');
            socket.disconnect();
        }
      }, []);
    
      return (
        <p>
          It's <time dateTime={response}>{response}</time>
        </p>
      );
}