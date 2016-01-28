//Inserts components into their respective areas in other components - cool stuff!

FlowRouter.route('/', {
	action() {		
		ReactLayout.render(MainLayout, {content: <AppView />});
	}
});

FlowRouter.route('/home', {
  action() {    
    ReactLayout.render(Dashboard, {chatview: <GroupChatView />});
  }
});

//Here I'm passing a param user so that I can render the DM chat box with the correct data
FlowRouter.route('/DM/:user', {
  action(params) {
  		ReactLayout.render(Dashboard, {chatview: <DMView user={params.user} />});
  }
});
