import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
const List = styled.div`
    padding: 0 2rem
    display: flex
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
    flex-direction: column;
    min-height: 18rem;
    max-height: 18rem;
    overflow-y: auto;
`;

const ListItem = styled.div`
  border-radius: 0.25rem;
  background-color: #f5f7f9;
  border: 1px dashed #eee;
  margin: 0.5rem 0;
  span {
    padding: 0.5rem;
    font-weight: 800;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  button:nth-child(1) {
    font-size: 1.2rem;
    border:none;
    border-radius: 0.3rem;
    color: white;
    width: 5rem;
    font-weight: 700;
    background: #f3be1e;
    margin-right: 1rem;
  }
  button:nth-child(2) {
    font-size: 1.2rem;
    border:none;
    border-radius: 0.3rem;
    color: white;
    width: 5rem;
    font-weight: 700;
    background: tomato;
  }
`;


const ContactList = props => {
  const contacts = props.contacts;

  return (
    <div>
      <h1>Phonebook Lists</h1>
      <List>
        
        {contacts.map(contact => (
          <ListItem key={contact.email}>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
            <h3>
              <span>Name:</span> {contact.name}
            </h3>
            <h3>
              <span>Email:</span>
              {contact.email}
            </h3>

            <h3>
              <span>Phone Number:</span>
              {contact.phoneNumber}
            </h3>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default connect(state => ({
  contacts: state.phoneBook.contacts
}))(ContactList);
