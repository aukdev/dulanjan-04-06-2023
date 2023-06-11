import { useContext, useState } from "react";
import { CartContextAPI } from "./context/CartContext";

const simple = ["a", "b", "c"];
const capital = ["A", "B", "C"];
const symbol = ["@", "#"];
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const App = () => {
  // const [error, setError] = useState("");

  const { cart, setCart } = useContext(CartContextAPI);

  // const handlePassword = (e) => {
  //   e.preventDefault();

  //   let s = false;
  //   let c = false;
  //   let sy = false;
  //   let n = false;

  //   const editStr = String(e.target.value).split("");
  //   console.log(editStr);
  //   simple.forEach((ele) => {
  //     editStr.forEach((i_ele) => {
  //       if (ele == i_ele) {
  //         s = true;
  //       }
  //     });
  //   });
  //   capital.forEach((ele) => {
  //     editStr.forEach((i_ele) => {
  //       if (ele == i_ele) {
  //         c = true;
  //       }
  //     });
  //   });
  //   symbol.forEach((ele) => {
  //     editStr.forEach((i_ele) => {
  //       if (ele == i_ele) {
  //         sy = true;
  //       }
  //     });
  //   });
  //   number.forEach((ele) => {
  //     editStr.forEach((i_ele) => {
  //       if (ele == i_ele) {
  //         n = true;
  //       }
  //     });
  //   });

  //   console.log(s, c, sy, n);
  // };

  return (
    <div>
      {/* <input type="password" onChange={handlePassword} /> */}
      <h1>Amila</h1>
      <h3>{cart}</h3>
      <button onClick={() => setCart((pre) => ++pre)}>click</button>
    </div>
  );
};

export default App;
