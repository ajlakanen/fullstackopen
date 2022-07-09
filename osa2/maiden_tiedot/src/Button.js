export const Button = ({ onClick, text, isVisible }) => {
  if (!isVisible) return <></>;
  else return <button onClick={onClick}>{text}</button>;
};
