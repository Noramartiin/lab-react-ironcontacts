// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  //PUT THE INFORMATION
  state = {
    contacts: contacts.splice(0, 5),
  };

  //ADD A RANDOM CONTACT
  handleAdd = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let randomContact = contacts[randomIndex];
    this.setState({
      contacts: [...this.state.contacts, randomContact],
    });
  };

  //SORT BY NAME
  sortName = () => {
    //copy the info
    let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts));
    // let clonedContacts = [...this.state.contacts];

    //sort the cloned one
    clonedContacts.sort((a, b) => {
      //sort for the name!!!
      if (a.name > b.name) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      } else {
        return 0;
      }
    });

    //update the one that is NOT cloned
    this.setState({
      contacts: clonedContacts,
    });
  };

  //SORT BY POPULARITY
  sortPopularity = () => {
    //copy the info
    let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts));
    // let clonedContacts = [...this.state.contacts];

    //sort the cloned one
    clonedContacts.sort((a, b) => {
      //sort for the popularity!!!
      if (a.popularity > b.popularity) {
        return -1;
      } else if (b.popularity > a.popularity) {
        return 1;
      } else {
        return 0;
      }
    });

    //update the one that is NOT cloned
    this.setState({
      contacts: clonedContacts,
    });
  };

  //DELETE
  delete = (contactId) => {
    console.log(contactId);
    let filteredContacts = this.state.contacts.filter((singleContact) => {
      return singleContact.id !== contactId;
    });
    console.log(filteredContacts);
    this.setState({
      contacts: filteredContacts,
    });
  };

  // delete = (contactId) => {
  //   let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts));
  //   clonedContacts.splice(contactId,1)
  //   return(
  //     this.setState({contacts:clonedContacts})
  //   )
  // };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleAdd}>Add Contact</button>
        <button onClick={this.sortName}>Sort By Name</button>
        <button onClick={this.sortPopularity}>Sort By Popularity</button>

        {this.state.contacts.map((singleContact, index) => {
          return (
            <ul>
              <li>
                <img src={singleContact.pictureUrl} alt="img"></img>
              </li>
              <li>{singleContact.name}</li>
              <li>{singleContact.popularity}</li>
              <li>{index}</li>
              <li>
                <button
                  onClick={() => {
                    this.delete(singleContact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default App;
