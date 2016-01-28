//This component handles the view/sigin logic. If you're not signed in then it takes you to the sign in page
AppView = React.createClass({
  mixins: [ReactMeteorData],
  componentDidUpdate(){
      
  },
  getMeteorData() {
    var data = {
      authInProcess: Meteor.loggingIn(),
      canShow: !!Meteor.user()
    };

    return data;
  },
  getAppView() {
    return <Dashboard />;
  },
  userLogin() {
    return  <div className="signIn"><div className="logo"><img className="img-responsive" src="http://i67.tinypic.com/vzh9j9.png"/></div><Signin /></div>;
  },
  getContent() {
    return <div>
      {this.data.canShow? this.getAppView() : this.userLogin() }
    </div>;
  },
  reRender(){
    FlowRouter.go('/');
  },
  render() {
    return <div>
          {this.data.authInProcess?  <p>Loading......</p> : this.getContent()}
    </div>;
  }
});