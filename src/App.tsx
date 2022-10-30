import { atom, useAtom } from "jotai";
import logo from "./logo.svg";
import "./App.css";
import { DarkMode } from "./DarkMode";

export const countAtom = atom(1); // 商品个数
const priceAtom = atom(67);
const totalAtom = atom((get) => get(countAtom) * get(priceAtom));

const Price = () => {
  const price = useAtom(priceAtom);
  const count = useAtom(countAtom);
  return (
    <>
      <div>商品单价：{price}</div>
    </>
  );
};

const Total = () => {
  const total = useAtom(totalAtom);
  const count = useAtom(countAtom);
  return (
    <>
      <div>总价：{total}</div>
      <button>商品个数：{count}</button>
    </>
  );
};


function App() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div className={'App transition duration-700 bg-white dark:bg-[#282c34] dark:text-white'}>
      <header className="App-header flex flex-col ">
        <img src={logo} className="App-logo" alt="logo" />
        <DarkMode />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
