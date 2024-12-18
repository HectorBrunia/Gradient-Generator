import { SketchPicker } from "react-color";

const ColorPicker = (color, setCOlors) => (
  <SketchPicker
    color={color}
    onChangeComplete={(updatedColor) => setCOlors(updatedColor.hex)}
  />
);

export default ColorPicker;
