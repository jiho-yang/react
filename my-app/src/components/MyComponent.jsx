import { Children } from "react";

const MyComponent = ({ name2, name, Children }) => {
  return (
    <div>
      {name2}안녕하세요, 제 이름은 {name}
      <div>{Children}</div>
    </div>
  );

  // return <div>안녕하세요, 제 이름은 {props.name2}</div>;
  // return (
  //   <div>
  //   {props.name2}안녕하세요, 제 이름은 {props.name}
  //   <div>{Children}</div></div>
  // </div>
  // );
};

export default MyComponent;
