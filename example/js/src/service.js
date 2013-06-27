(function(InboxClient, jQuery) {

  var MAIL = [
    { "subject": "Greetings"  , "from": "joe001@example.com"     , "body": "Hey Erin, come and check out this new stuff!" },
    { "subject": "Greetings"  , "from": "opportunity@example.com", "body": "Greetings, you've got to hear about this new thing ipsum blah blah" },
    { "subject": "C5 Blog"    , "from": "carbonfive@example.com" , "body": "Lorem ipsum blah blah" },
    { "subject": "Helol"      , "from": "joe004@example.com"     , "body": "Helolololololol" },
    { "subject": "Greetings"  , "from": "greeter@example.com"    , "body": "Lorem ipsum blah blah" },
    { "subject": "LA News"    , "from": "joe006@example.com"     , "body": "It's gonna be hot! Real yHot!" },
    { "subject": "Salutations", "from": "joe007@example.com"     , "body": "Lorem ipsum blah blah" },
    { "subject": "Greetings"  , "from": "trololo@example.com"    , "body": "Trolololololol Yes!!!" },
    { "subject": "GreTrologlo", "from": "joe001@example.com"     , "body": "Lorem ipsum blah blah" },
    { "subject": "Greetings"  , "from": "erin1@example.com"      , "body": "Lorem ipsum blah blah" }
  ];

  var TRASH = [
    { "subject": "Spam!"            , "from": "joe001@example.com", "body": "Cash money in your inbox!" } ,
    { "subject": "Spam!"            , "from": "joe002@example.com", "body": "Free food and free movies!" },
    { "subject": "Not so free"      , "from": "joe003@example.com", "body": "Cash lewts" }                ,
    { "subject": "Spam!"            , "from": "obama@example.com" , "body": "Cash lewts" }                ,
    { "subject": "Free for you!"    , "from": "cruyff@example.com", "body": "Cash lewts" }                ,
    { "subject": "Spam!"            , "from": "ramsey@example.com", "body": "Cash lewts" }                ,
    { "subject": "Score less goals!", "from": "kuyt@example.com"  , "body": "Cash lewts" }                ,
    { "subject": "Score more goals" , "from": "vanp@example.com"  , "body": "Cash lewts" }
  ];

  InboxClient.service = {
    "getMail": function(onError, onSuccess) {
      onSuccess(MAIL);
    },
    "getTrash": function(onError, onSuccess) {
      onSuccess(TRASH);
    }
  };

}(window.InboxClient, jQuery));
