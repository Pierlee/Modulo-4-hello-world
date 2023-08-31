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
  const [openModal, setOpenModal] = useState(false)

  const showAlertChris = () => {
    alert("I'm Chris, there is a monkey in my closet, please you have to help me. " + currentDate)
  }
  const showAlertMeg = () => {
    alert("I'm Meg and I don't know where I am " + currentDate)
  }
  const showAlertPeter = () => {
    alert("I'm Peter Griffin and I'm happy to say I'm satisfied with my wife, I mean life. " + currentDate)
  }

  return (
    <div>
      <Navbar />

      <div className='input-container'>
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div>
          <p>Hello {name}</p>
        </div>
        <button className='modal-button' onClick={() => setOpenModal(!openModal)}>Clique aqui</button>
      </div>


      <div className='cards'>
        <Card 
          title={"I'm Chris Griffin"} 
          text={"Hello world"}
          button={"click here"}
          picture={"/Chris-Griffin.jpeg"}
          buttonEvent={showAlertChris}
        />
        <Card 
          title={"I'm Meg Griffin"} 
          text={"Hello world"}
          button={"click here"}
          picture={"/Meg-Griffin.jpeg"}
          buttonEvent={showAlertMeg}
        />
        <Card 
          title={"I'm Peter Griffin"} 
          text={"Hello world"}
          button={"click here"}
          picture={"/Peter Griffin.jpg"}
          buttonEvent={showAlertPeter}
        />
          <Modal 
            isOpen={openModal}
            setOpen={setOpenModal}
          />
      </div>
    </div>
  );
}

export default App;
