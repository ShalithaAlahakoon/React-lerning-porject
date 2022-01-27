import React ,{ useState ,useEffect}from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function App(){
  const[year,setYear] = useState(2050);
  const[manager, setManager ] = useState("Alex");
  const [status,setStatus] = useState("Open")
  let button;
  let nextManager;
  if (status ==="Open") {
    button = <button onClick={() => setStatus("Close")}>Close</button>
  }else if (status ==="Close"){
    button = <button onClick={() => setStatus("Open")}>Open</button>
  }else{
    button = <button onClick={() => setStatus("Open")}>Open</button>
  }

  if(manager ==="Alex"){
    nextManager =<button onClick={() => setManager("Rachel")}>Change Manager</button>;
  }else{
    nextManager =<button onClick={() => setManager("Alex")}>Change Manager</button>;
  }
  
  return(
    <>
      <div>
        <h1>Year : {year}</h1>
        <button onClick={() => setYear(year + 1)}>New year</button>
      </div>
      <div>
        <h1>Manager on duty:{manager}</h1>
        {nextManager}
      </div>
      <div>
        <h1>Status : {status}</h1>
        {button}
        <button onClick={() => setStatus("Back in 5 min")}>Break</button>
      </div>
    </>
    
  );

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


