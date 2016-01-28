//This pulls in your avatar
Avatar = React.createClass({
  propTypes: {
        avatar: React.PropTypes.object.isRequired
  },
  render() {
 
    return (
          <div className="Avatar"><img src={this.props.avatar.avatar} alt="..." className="img-circle img-responsive"></img>
          </div>
        );
  }
});