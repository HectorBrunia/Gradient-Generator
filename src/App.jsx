import { useEffect, useState } from "react";

import { SketchPicker } from "react-color";

function App() {
  const [colors, setColors] = useState(["#ff7eb3", "#ff758c"]);
  const [direction, setDirection] = useState("to right");
  const generateCSS = `background: linear-gradient(${direction}, ${colors.join(
    ", "
  )});`;
  useEffect(() => {
    console.log(colors);
  }, [colors]);
  return (
    <>
      <div
        style={{
          height: "50vh",
          width: "50vh",
          background: `linear-gradient(${direction}, ${colors.join(", ")})`,
        }}
      ></div>
      <SketchPicker
        color={colors[0]}
        onChangeComplete={(updatedColor) => setColors(updatedColor.hex)}
      />
      <p>{generateCSS}</p>
      <select value={direction} onChange={(e) => setDirection(e.target.value)}>
        <option value="to right">To Right</option>
        <option value="to left">To Left</option>
        <option value="to top">To Top</option>
        <option value="to bottom">To Bottom</option>
      </select>
    </>
  );
}

export default App;
