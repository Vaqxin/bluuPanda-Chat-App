
//Adds user to contact list after sign up
var mySubmitFunc = function(error, state) {
  if (!error) {
    if (state === 'signIn') {
      // Successfully logged in
      console.log("SIGNIN");
    }
    else if (state === 'signUp') {
      // Successfully registered
      console.log("SIGNUP");
      var randomnumber = Math.floor(Math.random() * (150 - 10 + 1)) + 10;
      let avatar = "http://api.adorable.io/avatars/" + randomnumber;   

       Groupchat.insert({
          avatar: avatar,
          user: Meteor.user().emails[0].address,
          createdAt: new Date()
          
      });
    }
  }
};



AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: false,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
      onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
     // postSignUpHook: mySignFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});


// Accounts.validateLoginAttempt(function(attempt){
//       if (attempt.error){
//                 var reason = attempt.error.reason;
//                 if (reason === "User not found" ) {
//                     throw new Meteor.Error(403, "User not found");}
//                 if( reason === "Incorrect password"){
//                   throw new Meteor.Error(403, "Incorrect password");
//                 }    
//       }
//      return attempt.allowed;
// });


