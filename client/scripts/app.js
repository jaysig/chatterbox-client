// YOUR CODE HERE:


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
    var div = '<option value="'+room+'" class="rooms">' + room + '</option>';
    $("#roomSelect").append(div);
  },
  // addMessage: function(message){
  //   //look into turning anchor tags into buttons
  //   var div = $('<div class="chats"></div>');
  //   /*div.append(this.$userElem(message));*/
  //   div.append(message.text);
  //   $("#chats").append(div);
  // },
  clearMessages: function(){
    $("#chats").empty();
  },
  fetch: function(){
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: 'order=-createdAt',
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Messages recieved Data: ', data);
      for(var i = app.chatCount; i < app.chatCount+10; i++){
        if(data.results[i].text !== undefined && data.results[i].text !== ''){
        var div = '<div class="chats">' + data.results[i].username + ':     ' + data.results[i].text + '</div>';
      } else if (data.results[i].message !== undefined){
        var div = '<div class="chats">' + data.results[i].username + ':     ' + data.results[i].message + '</div>';
      }
        $("#chats").append(div);
        app.chatCount+=1;
      }
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message. Error: ', data);
      }
    });
  },
  chatCount: 0,
  init: function(){
    /*$('#send .submit').submit(this.handleSubmit);*/
    //Call fetch
    app.fetch();
    app.chatCount = 0;
    return true;
  },
  send: function(){
    var message = {
      username: $('#userName').val(),
      text: $('#chatText').val(),
      roomname: "lobby"
    };
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

//setInterval(app.fetch, 6000);
app.init();
