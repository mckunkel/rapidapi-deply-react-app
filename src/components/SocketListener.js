import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../useSocket";

export default () => {
    const socket = useSocket();
    const [message, setMessage] = useState();

    const onMessage = useCallback((message) => {
        console.log(message?.data);
        // const data = JSON.parse(message?.data);
        setMessage(message?.data);
    }, []);

    useEffect(() => {
        socket.addEventListener("message", onMessage);

        return () => {
            socket.removeEventListener("message", onMessage);
        };
    }, [socket, onMessage]);

    return (
        <div>{message}</div>
    );
};
