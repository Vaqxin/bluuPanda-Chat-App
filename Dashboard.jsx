// Dash component - represents the whole app 
Dashboard = React.createClass({
  mixins: [ReactMeteorData],

 getInitialState(){
    return {
      hideCompleted: false
    }
  },

  getMeteorData(){
  
    let query = {};
 
    if (this.state.hideCompleted) {
         // If hide completed is checked, filter tasks
         query = {checked: {$ne: true}};
    }

 
    return {
         group: Groupchat.find().fetch(),
         message: GroupMessages.find().fetch(),
         currentUser: Meteor.user(),
         messageCount:GroupMessages.find().count(),
         avatar: Groupchat.findOne({user: Meteor.user().emails[0].address})
    };
    

  },
  getLogOut(){
     return <span>
      <button onClick={this.logout}>Logout</button>
    </span>
  },
  logout() {
    Meteor.logout();
    FlowRouter.go('/');
  },
 
  renderContacts() {
    return this.data.group.map((group) => {
        const currentUserId = this.data.currentUser && this.data.currentUser._id;
 
      return <Group
        key={group._id}
        group={group}
         />;
    });
  },
  renderDM(){
       
  },
  toggleHideCompleted() {
    this.setState({
      hideCompleted: ! this.state.hideCompleted
    });
  },
 
  render() {
    return (
      <div className="container-fluid">
        <div className="row fullHeight">
            <div className="col-md-3 col-sm-3 col-xs-4 Nav">
                   {/* <div className="Avatar"><img src="{this.data.avatar}" alt="..." className="img-circle img-responsive"></img>
                     </div>*/}
                   {<Avatar avatar={this.data.avatar}/>}  
              <h3 className="userName">Welcome, {this.data.currentUser.emails[0].address}</h3>
              <button type="" onClick={this.logout}>logout</button>


              <div className="row">
                <div className="navbutton">  
                    <a href="/home" >GROUP CHAT</a>
                </div>
              </div>

             {/* <div className="row">
                <div className="navbutton">
                  <a href="" >DIRECT MESSAGES</a>
                </div>
              </div>*/}
           </div>
            <div className="col-md-8 Chatview">
              <h1 className="contacts">Contacts</h1>
              <div className="people-list" id="people-list">
                    <ul className="list">
                        {this.renderContacts()}
                    </ul>
              </div>


              {this.props.chatview}
            </div>
        </div>
     

        </div>            
    );
  }
});