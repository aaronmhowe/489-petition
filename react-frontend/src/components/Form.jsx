import React, { useState } from 'react';

/**
 * Form component for signing the petition.
 * @param {function} onAddSignature - Function to call when a signature is added.
 * @returns {JSX.Element} - The rendered form component.
 * @throws {Error} If the form submission fails.
 */
function Form({ onAddSignature }) {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    City: '',
    State: ''
  });

  /**
   * onChange event handler for form inputs.
   * @param {Event} e - The event object.
   */
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * onSubmit event handler for form submission.
   * @param {Event} e - The event object.
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.Name.length < 5 || formData.Name.length > 20) {
      alert('Name must be at least 5 characters or at most 20 characters in length!');
      return;
    }
    if (!formData.Email.includes('@')) {
      alert('Email must have an \`@\` symbol!');
      return;
    }
    if (formData.State.length !== 2 || formData.State !== formData.State.toUpperCase()) {
      alert('State must only be its two letter abbreviation and uppercase!');
      return;
    }
    const success = await onAddSignature(formData);
    if (success) {
      setFormData({
        Name: '',
        Email: '',
        City: '',
        State: ''
      });
    }
  };

  return (
    <div className="petitionform">
      <h2>Sign the Petition</h2>
      <form id="petition" onSubmit={onSubmit}>
        <div className="participant">
          <input 
            type="text"
            id="name"
            name="Name"
            placeholder="Your Name"
            value={formData.Name}
            onChange={onChange}
            required
          />
        </div>
        <div className="participant">
          <input 
            type="email"
            id="email"
            name="Email"
            placeholder="Your Email"
            value={formData.Email}
            onChange={onChange}
            required
          />
        </div>
        <div className="participant">
          <input 
            type="text"
            id="city"
            name="City"
            placeholder="City"
            value={formData.City}
            onChange={onChange}
          />
        </div>
        <div className="participant">
          <input 
            type="text"
            id="state"
            name="State"
            placeholder="State (e.g., WA)"
            value={formData.State}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="form-submission">Sign Petition</button>
      </form>
    </div>
  );
}

export default Form;