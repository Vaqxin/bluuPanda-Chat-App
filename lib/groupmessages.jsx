// Define a collection to hold our Group messages
GroupMessages = new Mongo.Collection("groupmessages");

if (Meteor.isClient) {
   Meteor.subscribe("groupmessages");

 
}

if (Meteor.isServer) {
   Meteor.publish("groupmessages", function () {
    return GroupMessages.find();
  });
}

GroupMessages.attachSchema(new SimpleSchema({
  createdBy:{
      type:String,
      autoValue:function(){return Meteor.user().emails[0].address}
  },
  message: {
    type: String
  },
  date:{
  	type: String
  }
}));

