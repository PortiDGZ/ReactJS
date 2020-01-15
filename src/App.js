import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class User extends React.Component{

  render() {

    return(

        <li>
          {this.props.name} {this.props.email}
        </li>

    )
  }

}

class UserList extends React.Component{

  render() {

    return(

        <ul>

          {this.props.users.map(u => {

            return(

                <User key={u.id}
                      name={u.name}
                      email={u.email}
                />
            )
          })
          }
        </ul>
    )
  }
}

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      users: [
        {id:1, name: "miguel", email: "test@miguelgomez.io"},
        {id:2, name: "test", email: "test@test.es"}
      ]

    };
  }

  handleOnAddUser(event){

    event.preventDefault();

    let user = {

      name: event.target.name.value,

      email: event.target.email.value
    };
    this.setState({

      users: this.state.users.concat([user])
    });
  }

  render() {

    return(
        <div>
        <UserList users={this.state.users} />

        <UserForm onAddUser={this.handleOnAddUser.bind(this)} />

        </div>
    );
  }
}

export default class UserForm extends React.Component{
  render() {

    return(

        <form onSubmit={this.props.OnAddUser}>

          <input type={"text"} placeholder={"Nombre"} name={"name"} />

          <input type={"email"} placeholder={"Email"} name={"email"}/>

          <input type={"submit"} value={"Guardar"}/>

        </form>

    );
  }

}