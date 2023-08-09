import { useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { Modal } from './components/modal/Modal';
import { Button } from './components/utils/button/Button';
import { Navbar } from './components/navbar/Navbar';

function App() {
  const dateTime = new Date()
  const currentDate = dateTime.toLocaleDateString()

  const [name, setName] = useState("World " + currentDate)

  const showAlert = () => {
    alert("hello world! " + currentDate)
  } 

  return (
    <div>
      <Navbar />
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <p>Hello {name}</p>
      </div>
      <div className='cards'>
        <Card 
          title={"I'm Chris Griffin"} 
          text={"Hello world"}
          button={"click here"}
          picture={"/Chris-Griffin.jpeg"}
          buttonEvent={showAlert}
        />
        <Card 
          title={"I'm Meg Griffin"} 
          text={"Hello world"}
          button={"click here"}
          picture={"/Meg-Griffin.jpeg"}
          buttonEvent={showAlert}
        />
        <Card 
          title={"I'm Peter Griffin"} 
          text={"Hello world"}
          button={"click here"}
          picture={"/Peter Griffin.jpg"}
          buttonEvent={showAlert}
        />
        {/* <Modal
          buttonAccept={"Accept"}
          buttonDecline={"Decline"}
        /> */}
      </div>
    </div>
  );
}

export default App;
