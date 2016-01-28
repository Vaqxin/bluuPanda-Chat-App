Group = React.createClass({
  propTypes: {
    // This component gets the contact to display through a React prop.
    // We can use propTypes to indicate it is required
    group: React.PropTypes.object.isRequired
    // showPrivateButton: React.PropTypes.bool.isRequired
  }, 
   handleDM(event) {
    console.log("DM ME BUTTON!");
    
    var dmUser = "/DM/" + this.props.group.user;
    FlowRouter.go(dmUser);
  },
  render() {
    return (

       <li className="clearfix">
                  <img src={this.props.group.avatar} className="img-reponsive img-circle avatar-img" alt="avatar"></img>
                  <div className="about">
                    <div className="name">{this.props.group.user}</div>
                    <div className="status">
                      <i className="fa fa-circle online"></i> online
                    </div>
                    <button onClick={this.handleDM}>DM</button>
                  </div>
       </li>
    );
  }
});