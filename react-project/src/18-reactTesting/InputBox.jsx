import { useState } from "react";
function InputBox() {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Type here"
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
}

export default InputBox;