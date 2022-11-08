import {useState} from 'react'
const orders = [100, 200, 300];
function App() {
  
  // const [counter, setCounter] = useState(1);
  // useState with initial is function 
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });
  const handleIncrease = () => {
    // setCounter(counter + 1);
    // callback
    setCounter(prevState => prevState + 1)
  }
  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Ha Noi'
  })
  const handleUpdate = () => {
    // setInfo({
    //   ...info,
    //   bio: 'yeu mau hong'
    // });
    setInfo(prev => {
      // logic...
      return {
        ...prev,
      bio: 'yeu mau huong'
      }
    })
  }
  return (
    <div className="App">
     <h1>{counter}</h1>
     <button onClick={handleIncrease}>Increase</button>
     <button onClick={handleUpdate}>Change info</button>
     <p>{JSON.stringify(info)}</p>
    </div>
  );
}

export default App;
