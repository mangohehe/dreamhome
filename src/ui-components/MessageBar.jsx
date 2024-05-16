import React, { useState, useEffect, useRef } from 'react';
import './styles/styles.css'; // Assuming styles for transitions are defined here
import { listResearches } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

const MessageBar = () => {
  const [newsMessages, setNewsMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [numMessages, setNumMessages] = useState(10);
  const messageBarRef = useRef(null); // Add a ref for transitions

  useEffect(() => {
    const fetchNewsMessages = async () => {
      try {
        const result = await client.graphql({
          query: listResearches.replaceAll("__typename", ""),
          variables: { limit: numMessages },
        });
        setNewsMessages((prevMessages) => result.data.listResearches.items.map((research) => research.summary));
        setNumMessages(result.data.listResearches.items.length); // Update numMessages
      } catch (error) {
        console.error('Error fetching research content:', error);
      }
    };

    fetchNewsMessages();
  }, [numMessages]); // Only re-fetch if numMessages changes

  useEffect(() => {
    const intervalId = setInterval(() => {
      messageBarRef.current.classList.add('out'); // Add 'out' class for transition
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % numMessages);
    }, 10000); // Adjust interval as needed

    const timeoutId = setTimeout(() => {
      messageBarRef.current.classList.remove('out'); // Remove 'out' class after a delay
    }, 500); // Adjust delay as needed

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [currentMessageIndex, numMessages, messageBarRef]);

  return (
    <div className="message-bar-container">
      <div className="message-bar" ref={messageBarRef}> {/* Add the ref */}
        <span>{newsMessages[currentMessageIndex]}</span>
      </div>
    </div>
  );
};

export default MessageBar;
