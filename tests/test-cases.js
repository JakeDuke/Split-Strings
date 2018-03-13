tests({

  'lol': function() {
    eq("lol", solution([ 'lo', 'l_' ]));
  },
  'car': function() {
    eq("car", solution([ 'ca', 'r_' ]));
  },
  'beer': function() {
    eq("beer", solution([ 'be', 'er' ]));
  },
  'football': function() {
    eq("football", solution([ 'fo', 'ot', 'ba', 'll' ]));
  },
  '##&][&##': function() {
    eq("##&][&##", solution([ '##', '&]', '[&', '##' ]));
  }

});
