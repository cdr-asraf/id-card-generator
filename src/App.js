// src/App.js
import React, { useState } from "react";
// import { convertToExcalidrawElements } from "@excalidraw/excalidraw";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    console.log(selectedFile);
  };
  return (
    <div style={{ height: "100vh" }}>
      <Excalidraw>
        <MainMenu>
          <MainMenu.DefaultItems.Socials />
          <MainMenu.DefaultItems.Export />

          <MainMenu.Item
            onSelect={() => document.getElementById("fileInput").click()}
          >
            Import CSV/Excel
          </MainMenu.Item>

          <input
            id="fileInput"
            type="file"
            accept=".csv,.xls,.xlsx"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
        </MainMenu>
        <WelcomeScreen>
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Logo>
              <p>" "</p>
            </WelcomeScreen.Center.Logo>
            <WelcomeScreen.Center.Heading>
              <h1>Welcome to Id Card Generator</h1>
            </WelcomeScreen.Center.Heading>
          </WelcomeScreen.Center>
        </WelcomeScreen>
      </Excalidraw>
    </div>
  );
}
export default App;
