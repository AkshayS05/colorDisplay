import './display.css';
const Display = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <main
      className="display"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#000' : '#fff',
      }}
    >
      <p>{colorValue ? colorValue : 'Empty Value'}</p>
      <p>{hexValue ? hexValue : ''}</p>
    </main>
  );
};

export default Display;
