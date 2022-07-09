export const Person = ({ key, name, number }) => {
  return (
    <li key={key}>
      {name} {number}
    </li>
  );
};
