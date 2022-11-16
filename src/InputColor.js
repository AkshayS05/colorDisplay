import './InputColor.css';
const InputColor = ({
  handleChange,
  colorValue,
  setIsDarkText,
  isDarkText,
}) => {
  return (
    <form>
      <label htmlFor="input">Add Color</label>
      <input
        autoFocus
        type="text"
        placeholder="Enter color"
        value={colorValue}
        required
        onChange={handleChange}
      />
      <br />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default InputColor;
