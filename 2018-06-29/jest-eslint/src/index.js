!function(txt) {

  function greeting(txt) {
    return txt.toUpperCase();
  }
  console.log(txt + " -- " + greeting("hello"));

}("hello");
