// YOUR CODE HERE:
//var username = prompt('What is your name?') || 'anonymous';
var message = {
  username: 'Mel Brooks',
  text: 'It\'s good to be the king',
  roomname: 'lobby'
};
var message2 = {
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
};

var chatCount = 0;

var app = {
  addFriend: function(){
    //toggle friendship status with click
    var restore = function(){
      //toggle friendship status
    };
  },
  /*$userElem: function(message){
    var _this = this;
    var $elem = $('<a class="username">'+ message.username +'</a>');
    $elem.on('click', function() {
      this.addFriend(message.username);
    });
    return $elem;
  },*/
  addRoom: function(room){
    var div = '<div class="rooms">' + room + '</div>';
    $("#roomSelect").append(div);
  },
  addMessage: function(message){
    //look into turning anchor tags into buttons
    var div = $('<div class="chats"></div>');
    div.append(this.$userElem(message));
    div.append(message.text);
    $("#chats").append(div);
  },
  clearMessages: function(){
    $("#chats").empty();
  },
  handleSubmit: function(){
    /*var message = $('#message').val();
    this.send(message);*/
    //somehow handles submission
  },
  fetch: function(){
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent. Data: ', data);
      /*for(var i = chatCount; i < chatCount+10; i++){
        if(data.results[i].text !== undefined && data.results[i].text !== ''){
        var div = '<div class="chats">' + data.results[i].username + ':     ' + data.results[i].text + '</div>';
      } else if (data.results[i].message !== undefined){
        var div = '<div class="chats">' + data.results[i].username + ':     ' + data.results[i].message + '</div>';
      }
        $("#chatters").append(div);
      }
      chatCount+=10;*/
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message. Error: ', data);
      }
    });
  },
  init: function(){
    /*$('#send .submit').submit(this.handleSubmit);*/
    //Call fetch
    app.fetch();
    return true;
  },
  send: function(message){
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent. Data: ', data);
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message. Error: ', data);
      }
    });
  }
};


var writePost = function(){


  document.getElementById('chatForm').reset();
};
app.init();
