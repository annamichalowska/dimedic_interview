import { useState } from "react";
import { create } from "zustand";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const useCarrotStore = create((set) => ({
    carrots: 0,
    increasePopulatioOrangen: () => set((state) => ({ carrots: state.carrots + 1 })),
    removeAllCarrot: () => set({ carrot: 0 }),
  }));

  //function CarrotCounter() {
  const carrots = useCarrotStore((state) => state.carrots);
  //return <h1>{bears} around here ...</h1>;
  //}

  //function Controls() {
  const increasePopulation = useCarrotStore(
    (state) => state.increasePopulation
  );
  //return <button onClick={increasePopulation}>one up</button>;
  //}

  return (
    <div className="App">
      <button onClick={increasePopulationOrange}>one up orange</button>;
      <h1>{carrots} Carrot orange</h1>;
      <button onClick={increasePopulation}>one up violet</button>;
      <h1>{carrots} Carrot violet</h1>;
    </div>
  );
}

export default App;
