const Counter = () => {
  let number = 0;

  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <h2>{number}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
