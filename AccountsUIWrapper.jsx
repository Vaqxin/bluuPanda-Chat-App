//This is how you wrap blaze templates to render in React

AccountsUIWrapper = React.createClass({
  componentDidMount() {
    // Use Meteor Blaze to render login form
    this.view = Blaze.render(Template.atForm,
      React.findDOMNode(this.refs.container));
  },
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  },
  render() {
    // Just render a placeholder container that will be filled in
    return <span className="login" ref="container" />;
  }
});
