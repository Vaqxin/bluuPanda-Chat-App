//Here we do all the database editing - Server side and these can be pulled into microservices 

Meteor.methods({
  addContact(){
     var randomnumber = Math.floor(Math.random() * (150 - 10 + 1)) + 10;
      let avatar = "http://api.adorable.io/avatars/" + randomnumber;   

       Groupchat.insert({
          avatar: avatar,
          user: Meteor.user().emails[0].address,
          createdAt: new Date()
          
      });
  },
  addGroupMessage(message){
      

      var date = new Date()
      var begun = moment(date).format("MM.DD.YYYY");

        GroupMessages.insert({
          message: message,
          date: begun
      });
       
  },
  addDM(message,user1,user2){

      var date = new Date()
      var begun = moment(date).format("MM.DD.YYYY");
      

      DirectMessages.insert({
          message: message,
          date: begun,
          user1: user1,
          user2: user2,
          usersAvailable:[
            user1, user2
          ] 
      });

  }
});


