MainLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
  logout() {
    Meteor.logout();
  },
  getLogoutButton() {
    return <span>
      &nbsp;
      <button onClick={this.logout}>Logout</button>
    </span>
  },
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
});
