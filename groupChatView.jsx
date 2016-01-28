//This is a group chat component - it handles rendering the group chat 
GroupChatView = React.createClass({
   mixins: [ReactMeteorData],
   getMeteorData(){
    return {
         message: GroupMessages.find().fetch(),
         currentUser: Meteor.user(),
         messageCount:GroupMessages.find().count()
    }

  },
  componentDidUpdate(){
        //scroll to show new messages
       var mydiv = $('.chat-history');
       mydiv.scrollTop(mydiv.prop('scrollHeight'));
  },
  rendergroupMessages(){
      return this.data.message.map((message) => {
        const currentUserId = this.data.currentUser && this.data.currentUser._id;
 
      return <GroupMessageList
        key={message._id}
        message={message}
         />;
    });
  },
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();
 
    Meteor.call("addGroupMessage", text);

    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },
  render() {

 
    return (
         <div className="chat">
              <div className="chat-header clearfix">
                <img className="img-responsive img-circle chaticon" src="http://s8.postimg.org/f5766p7wx/chat_messages.jpg" alt="avatar" />
                
                <div className="chat-about">
                  <div className="chat-with">Chat with Group</div>
                  <div className="chat-num-messages">{this.data.messageCount} Messages</div>
                </div>
              </div> 
              
              <div className="chat-history">
               {<ul className="GroupChatView">
                 {this.rendergroupMessages()}          
                </ul>}     
              </div> 
              
              <div className="chat-message clearfix">
                <form className="new-message" onSubmit={this.handleSubmit} >
                    <input className="new-message-input form-control"
                      type="text"
                      ref="textInput"
                      placeholder="Type to send a message...." />
                </form> 
                
                <button className="btn btn-primary" onClick={this.handleSubmit}>Send</button>

              </div>
              
         </div>              
        );
  }
});

GroupMessageList = React.createClass({
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