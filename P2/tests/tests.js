var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed


var foobar = {
  titleApp: function() {
    return "Comma Separated Value Analyzer";
  },
    localStore: function() {

    if(localStorage){
        return "true";
    }else{
        return "false";
    }

  },
    existTextArea: function() {
    	if($("textarea") != null)
    	    return "true";
    	else return "false";
  },
    exisButtonTest: function() {
       	if($("textarea") != null)
    	    return "true";
    	else return "false";
  }
  
};

describe('Texto', function() {
	before(function() {
  });
  
  describe('#Banco de pruebas()', function() {
  	
    it('title value-> devuelve el titulo de la app', function() {
      assert.equal(foobar.titleApp(), 'Comma Separated Value Analyzer');
    })

    it('localstorage true-> devuelve true si es posible usar localstorage', function() {
      expect(foobar.localStore()).to.equal('true');
    })
    
     it('existTextArea true-> devuelve true si es existe TextArea', function() {
      expect(foobar.existTextArea()).to.equal('true');
    })
    
     it('existButtons true-> devuelve true si todos los botones estan bien', function() {
      expect(foobar.exisButtonTest()).to.equal('true');
    })
    

  });
  });
 
