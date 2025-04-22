import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Signatures from './components/Signatures';
import Alert from './components/Alert';
import './App.css';

/**
 * Main application component.
 * @returns {JSX.Element}
 */
function App() {
  const [signatures, setSignatures] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    getSignatures();
  }, []);

  /**
   * Retrieve form signatures from the server.
   * @returns {Promise<void>}
   * @throws {Error} If the request fails.
   */
  const getSignatures = async () => {
    try {
      const response = await fetch('http://localhost:4000/signatures');
      const data = await response.json();
      setSignatures(data);
    } catch (e) {
      console.error('Failed to retrieve signatures:', e);
      setAlert({
        show: true,
        message: 'Failed to retrieve signatures',
        type: 'danger'
      });
    }
  };

  /**
   * Add a new signature to the server.
   * @param {Object} formSignature - The form signature to add.
   * @returns {Promise<boolean>} - True if the signature was added successfully, false otherwise.
   * @throws {Error} If the request fails. 
   */
  const addSignature = async (formSignature) => {
    try {
      const response = await fetch('http://localhost:4000/signatures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formSignature)
      });
      const data = await response.json();
      if (data.success) {
        setSignatures([data.submission, ...signatures]);
        setAlert({
          show: true,
          message: 'Signature Added!',
          type: 'success'
        });
        return true;
      } else {
        setAlert({
          show: true,
          message: data.message,
          type: 'danger'
        });
        return false;
      }
    } catch {
      console.error('Failed to submit signature:', e);
      setAlert({
        show: true,
        message: 'Submission Failed, please try again!',
        type: 'danger'
      });
      return false;
    }
  };

  return (
    <div>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Contact</a>
      </div>
      <div className="container">
        <h1 className="header">Move CptS 489 to Afternoon in Winter!</h1>
        <div className="content">
          <div className="text">
            <p>
              The image you see on the right is a representation of our professor every 
              morning, right before his much-needed coffee that helps thaw him out a bit. 
              Imagine having to wake up at 4 or 5 AM in the dead of winter just to prepare 
              for class. Technically, since the sun hasn’t even risen yet, can we really call 4 
              AM "morning"? The frigid cold, combined with the mental fog of early hours, 
              is an unfair battle both for students and faculty alike. No one should have to 
              endure sub-zero temperatures just to attend an 8 AM lecture. Morning brain 
              freeze inevitably leads to null pointer exceptions in our heads! For these 
              reasons, we humbly request the administration to consider shifting CPTS 489 
              to a more humane afternoon time slot.
            </p>
          </div>
          <div className="image">
            <img src="/public/images/midterm_image_asset.jpg" alt="Professor" />
          </div>
        </div>
        {alert.show && <Alert message={alert.message} type={alert.type} onClose={() => setAlert({...alert, show: false })} />}
        <Form onAddSignature={addSignature} />
        <Signatures signatures={signatures} />
      </div>
    </div>
  );
}

export default App;
