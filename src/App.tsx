import { Button } from "react-aria-components";
import "./App.css";
import reactLogo from "./assets/react.svg";
import {
  DialogCloseButton,
  DialogContainer,
  DialogRoot,
} from "./components/GenericDialog/GenericDialog";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <DialogRoot>
          <Button>Open dialog</Button>
          <DialogContainer
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              height: 300,
              background: "white",
              color: "black",
            }}
          >
            <h2>I'm a dialog!</h2>
            <DialogCloseButton onPress={() => console.log("on close effect")} />
          </DialogContainer>
        </DialogRoot>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
