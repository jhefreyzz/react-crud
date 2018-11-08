import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { add_contact } from './app/phoneBook/phoneBookActionCreator';
import ContactList from './ContactList';

const AppContainer = styled.div`
  display: flex
  margin: 0 auto;
`;

const AppColumn = styled.div`
  flex: 50%

  padding: 5rem
`;

const PhoneForm = styled.form`
  width: 30rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 1.4rem;
  border: none;
  margin: 0;
  padding: 1rem;
  position: relative;
  border: 2px solid #eee;
  margin-bottom: 1rem;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  font-size: 1.4rem;
  border-radius: 0.3rem;
  color: white;
  width: 30rem;
  font-weight: 700;
  background-color: #3490dc;
  padding: 0.5rem 1rem;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const payload = { ...this.state };

    this.props.add_contact(payload);

    this.setState({
      name: '',
      email: '',
      phoneNumber: ''
    });
  };

  render() {
    return (
      <AppContainer>
        <AppColumn>
          <h1>Enter Phonebook Information</h1>
          <PhoneForm onSubmit={this.handleSubmit}>
            <Input
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Input
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Input
              name="phoneNumber"
              placeholder="Enter phone number"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
            <Button type="submit">Submit</Button>
          </PhoneForm>
        </AppColumn>
        <AppColumn>
          <ContactList />
        </AppColumn>
      </AppContainer>
    );
  }
}

export default connect(
  null,
  { add_contact }
)(App);
