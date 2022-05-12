import React from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import db from '../utilities/Firebase';

import '../styles/create.css';

class Create extends React.Component {

  constructor() {
    super();
    this.state = {
      displayName: '',
      userName: ''
    };
  }

  onChangeDisplayName(event) {
    this.setState({
      displayName: event.target.value
    });
  }

  onChangeUserName(event) {
    this.setState({
      userName: event.target.value
    });
  }

  async create() {
    const docRef = await addDoc(collection(db, 'users'), {
      displayName: this.state.displayName,
      userName: this.state.userName
    });
    this.setState({
      displayName: '',
      userName: ''
    });
    console.log('Document written with ID: ', docRef.id);
  }

  render() {

    const onChangeDisplayName = (event) => this.onChangeDisplayName(event);
    const onChangeUserName = (event) => this.onChangeUserName(event);

    return (
      <main>
        <h2>Create</h2>

        <form>
          <div className='form-item'>
            <span>Display name</span>
            <input value={this.state.displayName} onChange={onChangeDisplayName}/>
          </div>

          <div className='form-item'>
            <span>User name</span>
            <input value={this.state.userName} onChange={onChangeUserName}/>
          </div>
        </form>

        <button onClick={this.create.bind(this)}>Add</button>
      </main>
    );
  }
}

export default Create;