
import reactLogo from './assets/react.svg'
import './App.css'
import React, { lazy, Suspense, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

let MyComponent = lazy(() => import('./components/kayak/NewEquipment'));
function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = React.useState(false);

  const [equip, setEquip] = React.useState('kayak');
  const handleChange = async (event: SelectChangeEvent) => {
    setEquip(event.target.value as string);
    console.log("Did we make it", event.target.value);
    MyComponent = lazy(() => import(`./components/${event.target.value}/NewEquipment`));
    
  };
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="dropdown">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={equip}
        label="Equipment"
        onChange={handleChange}
      >
        <MenuItem value={"kayak"}>Kayak</MenuItem>
        <MenuItem value={"ski"}>Skis</MenuItem>
        
      </Select>
      <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
      </Suspense>

      </div>
      
    </div>
  )
}

export default App
