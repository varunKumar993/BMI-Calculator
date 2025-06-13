import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const BMI = useMemo(() => {
    const calculatedheight = height / 100;
    return weight / (calculatedheight * calculatedheight).toFixed(1);
  }, [weight, height]);

  return (
    <>
      <div>
        <h3>BMI CALCULATOR</h3>
      </div>
      <div>
        <p>Weight : {weight} kg</p>
        <input
          type="range"
          min={1}
          max={200}
          onChange={handleWeight}
          defaultValue={0}
        />
      </div>
      <div>
        <p>Height : {height} cm</p>
        <input
          type="range"
          min={1}
          max={200}
          onChange={handleHeight}
          defaultValue={0}
        />
      </div>
      <div>
        <h3>BMI is : {BMI}</h3>
      </div>
    </>
  );
}

export default App;
