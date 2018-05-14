import React, { Component } from 'react';

import Button from './Button';

const users = [
  {id: 0, name: 'Вася', role: 'admin', phone: '555-55-55', age: 30},
  {id: 1, name: 'Петя', role: 'manager', phone: '777-77-77', age: 25},
  {id: 2, name: 'Максим', role: 'seller', phone: '888-88-88', age: 48},
  {id: 3, name: 'Егор', role: 'buyer', phone: '999-99-99', age: 22}
];

const buttons = {
  add: {
    className: 'button add',
    label: 'Add'
  },
  more: {
    className: 'button more',
    label: 'More'
  },
  edit: {
    className: 'button edit',
    label: 'Edit'
  },
  delete: {
    className: 'button delete',
    label: 'Delete'
  }
};

class UserRow extends Component {
  showInfo = (userId) => {

  };

  editUser = (userId) => {

  };

  deleteUser = (userId) => {
    const index = users.find((element, index) => {
      if (element.id === userId) {
        return index;
      }
    });

    this.setState(() => (
      users.splice(index, 1)
    ));
  };

  render() {
    return (
      <tbody className="table-body">
      {users.map((user) => (<tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>{user.phone}</td>
        <td>
          <Button className={buttons.more.className} onClick={this.showInfo} userId={user.id} text={buttons.more.label} />
          <Button className={buttons.edit.className} onClick={this.editUser} userId={user.id} text={buttons.edit.label} />
          <Button className={buttons.delete.className} onClick={this.deleteUser} userId={user.id} text={buttons.delete.label} />
        </td>
      </tr>))
      }
      </tbody>
    );
  }
}

export default UserRow;
