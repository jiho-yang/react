import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "리액트~";
  // if{name==="리액트"}{
  //   return (<h1>리액트입니다.</h1>)
  // }else{
  //   return <h2>리액트가 아닙니다.</h2>
  // }

  const style = {
    background: "black",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "bold",
    padding: "16", // 단위 없을 시 px값으로 인식함
  };
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동되니?</h2>
      {name === "리액트" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
      {name === "리액트" && <h1>리액트 입니다.</h1>}
      {name || <h1>name 값이 없습니다.</h1>} // 자주 안쓰임
      {/* <div style={style}>{name}</div> // 스타일 json 값 넣어서 사용하기 */}
      <div style={style} className="name">
        {name}
      </div>
      <br />
      <input />
    </>
  );
}

export default App;
