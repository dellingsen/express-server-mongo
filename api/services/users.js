var User = require('../models/user');

exports.createUser = function(body, callback) {
  // Create a new instance of the User model
  var newUser = new User(body);

  console.log('body:')
  console.log(body)

  // Save the user and check for errors - return object result in callback
  newUser.save(function (err, result) {
    console.log('mongo save callback')
    if (err) {
      console.log('mongo error')
      console.log(err)
      callback(err)
    }
    else {
      console.log('mongo success')
      console.log(result)
      callback(result)
    }
  })
}

exports.getUsers = function(callback) {
  // Use the User model to find all users
  User.find(function(err, users) {
    if (err) {
      callback(err);
    }
    else {
      callback(users);
    }
  });
};

exports.getUser = function(userid, callback) {
  // Use the User model to find a specific user
  console.log("find by userid: " + userid)
  User.findById(userid, function(err, user) {
    if (err)
      callback(err);

    console.log("found user: " + user)
    callback(user);
  });
};

exports.putUser = function(userid, body, callback) {
  // Use the User model to find a specific user
  User.findById(userid, function(err, user) {
    if (err)
      callback(err);

    // Update the existing user email
    user.email = body.email;

    // Save the user and check for errors
    user.save(function(err) {
      if (err)
        callback(err);

      callback(user);
    });
  });
};

exports.deleteUser = function(userid, callback) {
  // Use the User model to find a specific user and remove it
  User.findByIdAndRemove(userid, function(err) {
    if (err)
      callback(err);

    callback({ message: 'User has been removed' });
  });
};

exports.deleteAll = function(callback) {
  // Use the User model to find a specific user and remove it
  User.remove().exec(function(err) {
    if (err) {
      console.log('error removing user documents')
      console.log(err)
    }
    else {
      console.log('successfully deleted user documents')
    }
  })
  callback({message: 'all users have been deleted'})
}