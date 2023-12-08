import { useBearStore } from "../../store/bearStore";
import { useState } from "react";
export default function AboutPage() {
  const [bearName, setBearName] = useState("");
  const bears = useBearStore((state) => state.bears);
  const bearsName = useBearStore((state) => state.bearsName);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const addBearName = useBearStore((state) => state.addBearName);
  const handleChange = (e) => {
    e.preventDefault();
    console.log(bearName);
    addBearName(bearName);
    setBearName("");
  };
  return (
    <div>
      AboutPage
      <p>{bears} cuenta</p>
      <p>
        {bearsName?.map((bear) => (
          <span key={bear}>{bear}</span>
        ))}
      </p>
      <form onSubmit={handleChange}>
        <input
          type='text'
          id='bearName'
          name='bearName'
          value={bearName || ""}
          onChange={(e) => setBearName(e.target.value)}
          className='text-black'
        />
        <button type='submit'>Nombrar Oso</button>
      </form>
      <button onClick={increasePopulation}>Sumale 1</button>
    </div>
  );
}
