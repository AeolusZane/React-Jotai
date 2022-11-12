import { atom, useAtom } from "jotai";
import logo from "./logo.svg";
import "./App.css";
import { DarkMode } from "./DarkMode";
// import Input from "./Todo";
// import { Redux } from "./Redux";
import { atomWithReset, useResetAtom } from "jotai/utils";


export const countAtom = atomWithReset(1); // 商品个数
const priceAtom = atomWithReset(67);
const totalAtom = atom((get) => get(countAtom) * get(priceAtom));

const Total = () => {
  const [total] = useAtom(totalAtom);
  const [count, setCount] = useAtom(countAtom);
  const reset = useResetAtom(countAtom);
  return (
    <>
      <div>总价：{total}</div>
      <button onClick={() => setCount((count) => count + 1)} >商品个数：{count}</button>
      <button onClick={() => {
        reset();
      }}>重置(useResetAtom在React17上不支持)</button>
    </>
  );
};

const Price = () => {
  const [price] = useAtom(priceAtom);
  const count = useAtom(countAtom);
  return (
    <>
      <div>商品单价：{price}</div>
    </>
  );
};

function App() {
  const [count] = useAtom(countAtom);
  return (
    <div className={'App transition duration-700 bg-white dark:bg-[#282c34] dark:text-white'}>
      <header className="App-header flex flex-col ">
        <img src={logo} className="App-logo" alt="logo" />
        <DarkMode />
        <Price />
        <Total />
        {/* <Input /> */}
        <p>
          <button type="button" >
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
