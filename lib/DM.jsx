// Define a collection to hold our DMs
DirectMessages = new Mongo.Collection("directmessages");

if (Meteor.isClient) {
   Meteor.subscribe("directmessages");
}

if (Meteor.isServer) {
   Meteor.publish("directmessages", function () {
    return DirectMessages.find();
  });
}


DirectMessages.allow({
  insert: function(userId, doc){
    // return adminUser(userId);
    return true;
  },
  update: function(userId, doc, fields, modifier){
    // return adminUser(userId);
    return true;
  },
  remove: function (userId, docs){
    // return adminUser(userId);
    return true;
  }
});



DirectMessages.attachSchema(new SimpleSchema({
  createdBy:{
      type:String,
      autoValue:function(){return Meteor.user().emails[0].address}
  },
  message: {
    type: String
  },
  date:{
    type: String
  },
  user1:{
    type: String
  },
  user2:{
    type: String
  },
  usersAvailable: {
    type: [ String ]
  }
}));


