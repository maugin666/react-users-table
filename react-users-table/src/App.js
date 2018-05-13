import React, { Component } from 'react';
import './App.css';

const users = [
  {id: 0, name: 'Вася', role: 'admin', phone: '555-55-55', age: 30},
  {id: 1, name: 'Петя', role: 'manager', phone: '777-77-77', age: 25},
  {id: 2, name: 'Максим', role: 'seller', phone: '888-88-88', age: 48},
  {id: 3, name: 'Егор', role: 'buyer', phone: '999-99-99', age: 22}
];

const buttons = {
  add: {
    className: 'button delete',
    label: 'Add'
  },
  more: {
    className: 'button delete',
    label: 'More'
  },
  edit: {
    className: 'button delete',
    label: 'Edit'
  },
  delete: {
    className: 'button delete',
    label: 'Delete'
  }
};

/*function UserList(props){
  const users = props.users;
  const items = users.map((user) => <tr key={user.id}>
    <td>{user.name}</td>
    <td>{user.role}</td>
    <td>{user.phone}</td>
    <td>{user.age}</td>
    <td>
      <button className="button more" onClick={this.showInfo}>More</button>
      <button className="button edit" onClick={this.editUser}>Edit</button>
      <button className="button delete" onClick={this.deleteUser}>Delete</button>
    </td>
  </tr>);
  return (<tbody className="table-body">{items}</tbody>)
}*/

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <tbody className="table-body">
        {this.props.users.map((user) => (<tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>{user.phone}</td>
        <td>{user.age}</td>
        <td>
          <button className="button more" onClick={(e) => this.showInfo(user.id, e)}>More</button>
          <button className="button edit" onClick={(e) => this.editUser(user.id, e)}>Edit</button>
          <button className="button delete" onClick={(e) => this.deleteUser(user.id, e)}>Delete</button>
        </td>
      </tr>))}
      </tbody>);
  }
}
class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    constructor(props) {
      super(props);
      this.props = props;

      // Привязка необходима, чтобы сделать this доступным в коллбэке
      this.showInfo = this.showInfo.bind(this);
      this.editUser = this.editUser.bind(this);
    }
  }

  showInfo(userId, event){
    event.preventDefault();
    console.log(userId, event);
    /*this.setState(prevState => ({
     temperature: prevState.temperature + 1
     }))*/
  }

  editUser(userId, event){
    event.preventDefault();
    this.setState(prevState => ({
      temperature: prevState.temperature - 1
    }))
  }
  deleteUser(userId, event){
    event.preventDefault();
    const index = this.props.users.find((element, index) => {
      if (element.id === userId) {
        return index;
      }
    });
    this.setState(() => (
      this.props.users.splice(index, 1)
    ))
  }

  addUser(event){
    event.preventDefault();
    const user = {
      id: this.props.users.length,
      name: '000',
      role: '0',
      phone: '000-00-00',
      age: 0
    };
    this.setState(() => (
      this.props.users.push(user)
    ))
    console.log(this.props.users);
  }

  render() {
    return (<button className={this.props.button.className} onClick={(e) => this.addUser(e)}>{this.props.button.label}</button>);
  }
}
class App extends Component {

  render() {
    return (
    <div>
      <table className="table" cellSpacing="0">
        <thead className="table-head">
        <tr>
          <td>Name</td>
          <td>Role</td>
          <td>Phone</td>
          <td>Age</td>
          <td></td>
        </tr>
        </thead>
        <UserRow users={users}/>
      </table>
      <Button users={users} button={buttons.add}/>
    </div>
    );
  }
}

export default App;
