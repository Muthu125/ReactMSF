import React from 'react';
import {
  Card, CardHeader, CardTitle, CardText, CardActions, Button, Toolbar, ToolbarRow,
  ToolbarSection, ToolbarTitle, Textfield, Content, onSubmitEditing, onClick, onChange,
} from 'react-mdc-web/lib';


var Parse = require('parse');
Parse.initialize("05b6e770a6189ba10731fd4686cd695a187b8612");
Parse.serverURL = 'http://35.194.184.154:80/parse/'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }
 
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

 
  submitLogin(e) {
    console.log("reached ........." + this.state.username);
    Parse.User.logIn(this.state.username, this.state.password, {
      success: function (user) {
        // Do stuff after successful login.  
        alert("Success chk: ");
      },
      error: function (user, error) {
        // The login failed. Check error to see why.
        alert("Error in app: " + error);
      }
    });
  };

  render() {
    return (
      <div>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarTitle>Inventory MSF</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <Content>
          <Textfield
            name="username"
            floatingLabel="Your name or email"
            helptext="For example, Vinayak or vinayak@gmail.com"
            autoFocus={true}
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Textfield
            name="password"
            floatingLabel="Password"
            type="password"
            minLength={8}
            helptext="Your password must be at least 8 characters"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button raised accent onClick={this.submitLogin}>Login</Button>
          {/* <Button raised accent onClick={this.navigateToPage}>Login</Button> */}


        </Content>
      </div>
    );
  }
}


export default App; 
