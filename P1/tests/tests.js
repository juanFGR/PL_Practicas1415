var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed


var foobar = {
  titleApp: function() {
  		
  //	alert($("#original").val());
    return $("#title").html();
  },
    placeHolder: function() {
    return calculate();
  }
  
};
describe('Test realizado', function() {
	before(function() {
   $("#original").val("25C");
  });
  
  describe('#AppValues()', function() {
    it('title value-> should work with assert', function() {
      assert.equal(foobar.titleApp(), 'Temperature Converter');
    })

    it('title value-> should work with expect', function() {
      expect(foobar.titleApp()).to.equal('Temperature Converter');
    })

    it('title value-> should work with should', function() {
      foobar.titleApp().should.equal('Temperature Converter');
    })
    it('simulation-> should work with should', function() {
   
      foobar.placeHolder().should.equal('77F');
    })
  });
  });
  

