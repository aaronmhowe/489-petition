import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Signatures from './components/Signatures';
import Alert from './components/Alert';
import './App.css';
import { set } from '../../app/app';

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

    </div>
  );
}

export default App;
