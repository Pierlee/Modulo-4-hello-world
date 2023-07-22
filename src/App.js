import { useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { Modal } from './components/modal/Modal';

function App() {

  return (
    <div className='cards'>
      <Card 
        title={"I'm Chris Griffin"} 
        text={"Hello world"}
        button={"click here"}
        picture={"/Chris-Griffin.jpeg"}
      />
      <Card 
        title={"I'm Meg Griffin"} 
        text={"Hello world"}
        button={"click here"}
        picture={"/Meg-Griffin.jpeg"}
      />
      <Card 
        title={"I'm Peter Griffin"} 
        text={"Hello world"}
        button={"click here"}
        picture={"/Peter Griffin.jpg"}
      />
      {/* <Modal
        buttonAccept={"Accept"}
        buttonDecline={"Decline"}
      /> */}
    </div>
  );
}

export default App;
