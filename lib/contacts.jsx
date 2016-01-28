// Define a collection to hold our Contacts
Groupchat = new Mongo.Collection("groupchat");

// if (Meteor.isClient) {
//    Meteor.subscribe("groupchat");
// MOVED INTO COMP FOR SPEED AND AWESOMESAUCENESS
// }

if (Meteor.isServer) {
   Meteor.publish("groupchat", function () {
    return Groupchat.find();
  });
}


Groupchat.allow({
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




