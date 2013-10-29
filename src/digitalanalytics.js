// This extends the data in the digitalData object with utility
// functions 
// TODO: Confirm the param addition that allow for object
// destructuring 

// This is the generic wrapper required based on the event handling
// library used on the client site
$(document).on(
  "digitalData", 
  function(event, p1) { 
    bk_allow_multiple_calls = true;
    BKTAG
      ._reset()
      .addCtxParam(p1)
      .doTag(2);
});
