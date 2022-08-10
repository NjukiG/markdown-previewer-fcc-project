import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';



function App() {
  const [newText, setNewText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  1. First item
  2. Second item
  3. Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `);

  marked.setOptions({
    breaks: true
  })

  function handleChanges(e){
    setNewText(e.target.value)
  }


  return (
    <div className="App">
      <h1>MarkDown Previewer</h1>
      <textarea rows={10} id='editor' placeholder='This is the text area' onChange={handleChanges} value={newText}></textarea>
      <h2>The Output:</h2>
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(newText)}}></div>
     
    </div>
  );
}

export default App;
