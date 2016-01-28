//This is a Direct Message Component - it handles rendering the DM chat box
DMView = React.createClass({
   mixins: [ReactMeteorData],
   getMeteorData(){

    Meteor.subscribe("directmessages");
    

    return {
         message: DirectMessages.find({
                   usersAvailable: {$all: [Meteor.user().emails[0].address, this.props.user]}}).fetch(),
         currentUser: Meteor.user(),
         messageCount:GroupMessages.find().count(),
         otherUser: Groupchat.findOne({ "user" : this.props.user })
    }

  },
  componentDidUpdate(){
        //scroll to show new messages
       var mydiv = $('.chat-history');
       mydiv.scrollTop(mydiv.prop('scrollHeight'));
  },
  renderDMMessages(){
      return this.data.message.map((message) => {
        const currentUserId = this.data.currentUser && this.data.currentUser._id;
 
      return <DMMessageList
        key={message._id}
        message={message}
         />;
    });
  },
  handleInput(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();

    console.log("you've entered!");
 
     Meteor.call("addDM", text, Meteor.user().emails[0].address, this.props.user);
    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },
  render() {

 
    return (
         <div className="chat">
              <div className="chat-header clearfix">
                <img className="img-responsive img-circle chaticon" src={this.data.otherUser.avatar} alt="avatar" />
                
                <div className="chat-about">
                  <div className="chat-with">Chat with {this.props.user} </div>
                  <div className="chat-num-messages"> Messages</div>
                </div>
              </div> 
              
              <div className="chat-history">
               {<ul className="GroupChatView">
                 {this.renderDMMessages()}          
                </ul>}     
              </div> 
              
              <div className="chat-message clearfix">
                <form className="new-message" onSubmit={this.handleInput} >
                    <input className="new-message-input form-control"
                      type="text"
                      ref="textInput"
                      placeholder="Type to send a message..." />
                </form> 
                
                <button className="btn btn-primary" onClick={this.handleInput}>Send</button>

              </div>
              
         </div>              
        );
  }
});

//This is a message component 
DMMessageList = React.createClass({
  propTypes: {

    message: React.PropTypes.object.isRequired,

  },
  render() {
    return (
       <li className="clearfix">
                    <div className="message-data align-right">
                      <span className="message-data-time" >{this.props.message.date}</span> &nbsp; &nbsp;
                      <span className="message-data-name" >{this.props.message.createdBy}</span>
                      
                    </div>
                    <div className="message other-message float-right">
                      {this.props.message.message}
                    </div>
        </li>               
        );
  }
});