import React, { useState } from 'react';

const Form = () => {
    const [formState, setFormState] = useState({
        name: '',
        date: '',
        time: '',
      });
    
      const handleChange = (event) => {
        setFormState({
          ...formState,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            Date:
            <input type="date" name="date" onChange={handleChange} />
          </label>
          <label>
            Time:
            <input type="time" name="time" onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    };
    
export default Form;