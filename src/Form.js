import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label className="label">
          Name: <input type="text" name="name" />
        </label>
        <label className="label">
          Role: <input type="text" name="role" />
        </label>
        <label className="label">
          Phone: <input type="text" name="phone" />
        </label>
        <label className="label">
          Age: <input type="number" name="age" />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
