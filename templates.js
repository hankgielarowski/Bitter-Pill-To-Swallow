var templates = {};

templates.tweet = [

   "<h1><%= title %></h1>",
   "<h4><%= user %></h4>",
   "<p><%= desc %></p>",
   "<button class='btn-btn-danger delete'>delete</button>",

 ].join('');


   templates.addTweet = [
     '<form class="">',
     '<input type="text" name="title" value="" placeholder="Title">',
     '<input type="text" name="user" value="" placeholder="User">',
     '<input type="text" name="tweet" value="" placeholder="Tweet">',
     "<button class='submit'>Submit</button>",
     '</form>'
   ].join('');

module.exports = templates;
