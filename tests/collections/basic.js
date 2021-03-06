asyncTest("Collections: create", function() {
  expect(1);

  //
  // Create
  //
  client.collection('posts').create({title: "My awesome blog post", content: "Lorem ipsum dolor sit amet."}).then(function(response) {
    ok(response.title ==  "My awesome blog post", "CREATE");
  }).otherwise(function(response) {
    ok(false, "CREATE first row");
  }).done(function() {
    start();
  });
});


asyncTest("Collections: create with data types", function() {
  expect(4);

  client.collection('posts').create({string: "Another post", int: 5, float: 9.9, bool: true}).then(function(response) {
    ok(response.string ==  "Another post", "CREATE keep string data-type");
    ok(response.int == 5, "CREATE keep integer data-type");
    ok(response.float == 9.9, "CREATE keep float data-type");
    ok(response.bool === true, "CREATE keep boolean data-type");
  }).otherwise(function(response) {
    ok(false, "CREATE with more fields");
  }).done(function() {
    start();
  });
});

asyncTest("Collections: listing without where", function() {
  //
  // Get without where
  //
  client.collection('posts').get().then(function(response) {
    ok(response.length > 0, "LIST WITHOUT where");
  }).otherwise(function(response) {
    ok(false, "LIST WITHOUT where");
  }).done(function() {
    start();
  });

});
