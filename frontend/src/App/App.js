import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {

  constructor(props){
    super(props);


  };

  render() {
    return <div id = "main_container">

      <div id="top_bar">
        <p>Goodbye MAT137</p>

        <img id = "bird_overlay" src="https://static.wixstatic.com/media/5fa1f0_aa43f094ca524f21bb161589a9e76375~mv2.gif"></img>

        <div id='animation_carrier'>

          <img id="narutoVorochimaru" src="https://giffiles.alphacoders.com/121/12174.gif"></img>

          <img id="demonSlayerRunning" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7342616-47df-4f4a-a9ff-adc5532cb145/ddo4cx5-1a7dde25-fa11-4e54-a7e2-972772b3ca4d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MzQyNjE2LTQ3ZGYtNGY0YS1hOWZmLWFkYzU1MzJjYjE0NVwvZGRvNGN4NS0xYTdkZGUyNS1mYTExLTRlNTQtYTdlMi05NzI3NzJiM2NhNGQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wmdp6FXPx1O7X3Zf0l3KL9IfzOPAV6UgHUFn01qTCls"></img>
        </div>
        
      </div>
        

    </div>;
  }
}

export default App;
