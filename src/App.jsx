import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffee] = useState(loadedCoffees);

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-purple-600 text-center my-20'>Total Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffee={setCoffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
