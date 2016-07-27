var output = {};
output.newConcatenator = function(initial){
  if (initial==null) {
    initial="";
  } else {
    initial=initial+"";
  }
  var head = {
    value: initial,
    next: null
  };
  var end = head;
  var self = this;
  this.append = function(addition){
    if (addition=="") {
       return self;
    }
    addition  = "" + addition;
    end.next = {
      value: addition,
      next: null
    };
    end = end.next;
    return self;
  };
  this.getResult = function(){
    while(head.next != null) {
      var workingNode = head;
      while (workingNode != null) {
        if (workingNode.next != null) {
          workingNode.value = workingNode.value + workingNode.next.value;
          workingNode.next = workingNode.next.next;
        }
        workingNode = workingNode.next;
      }
    }
    end = head;
    return head.value;
  };
};
module.exports = exports = output;
