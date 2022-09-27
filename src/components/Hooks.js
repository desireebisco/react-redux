import React, { useState } from "react";

export const Hooks = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
      />
      <p>{inputText}</p>
      
      {historyList.map((rec) => {return <p>{rec}</p>})}
   
    </>
  );
};
