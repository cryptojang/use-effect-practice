import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 2) {
      console.log(`현재 count 값은 ${count}`);
    }
  }, [count]);

  return (
    <div className="bg-red-100 text-center">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span className="mx-4">{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
