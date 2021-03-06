describe('default i18next way', function() {

  var resStore = {
    dev: { translation: {  } },
    en: { translation: {  } },            
    'en-US': { 
      translation: {                      
        interpolationTest1: 'added __toAdd__',
        interpolationTest2: 'added __toAdd__ __toAdd__ twice',
        interpolationTest3: 'added __child.one__ __child.two__',
        interpolationTest4: 'added __child.grandChild.three__'
      } 
    }
  };
  
  beforeEach(function(done) {
    i18n.init(i18n.functions.extend(opts, { resStore: resStore }),
      function(t) { done(); });
  });

  it('it should replace passed in key/values', function() {
    expect(i18n.t('interpolationTest1', {toAdd: 'something'})).to.be('added something');
    expect(i18n.t('interpolationTest2', {toAdd: 'something'})).to.be('added something something twice');
    expect(i18n.t('interpolationTest3', { child: { one: '1', two: '2'}})).to.be('added 1 2');
    expect(i18n.t('interpolationTest4', { child: { grandChild: { three: '3'}}})).to.be('added 3');
  });

  it('it should replace passed in key/values on defaultValue', function() {
    expect(i18n.t('interpolationTest5', {defaultValue: 'added __toAdd__', toAdd: 'something'})).to.be('added something');
  });

});

describe('default i18next way - different prefix/suffix', function() {

  var resStore = {
    dev: { translation: {  } },
    en: { translation: {  } },            
    'en-US': { 
      translation: {                      
        interpolationTest1: 'added *toAdd*',
        interpolationTest2: 'added *toAdd* *toAdd* twice',
        interpolationTest3: 'added *child.one* *child.two*',
        interpolationTest4: 'added *child.grandChild.three*'
      } 
    }
  };
  
  beforeEach(function(done) {
    i18n.init(i18n.functions.extend(opts, { 
      resStore: resStore,
      interpolationPrefix: '*',
      interpolationSuffix: '*'
    }), function(t) { done(); });
  });

  it('it should replace passed in key/values', function() {
    expect(i18n.t('interpolationTest1', {toAdd: 'something'})).to.be('added something');
    expect(i18n.t('interpolationTest2', {toAdd: 'something'})).to.be('added something something twice');
    expect(i18n.t('interpolationTest3', { child: { one: '1', two: '2'}})).to.be('added 1 2');
    expect(i18n.t('interpolationTest4', { child: { grandChild: { three: '3'}}})).to.be('added 3');
  });

  it('it should replace passed in key/values on defaultValue', function() {
    expect(i18n.t('interpolationTest5', {defaultValue: 'added *toAdd*', toAdd: 'something'})).to.be('added something');
  });

});

describe('default i18next way - different prefix/suffix via options', function() {

  var resStore = {
    dev: { translation: {  } },
    en: { translation: {  } },            
    'en-US': { 
      translation: {                      
        interpolationTest1: 'added *toAdd*',
        interpolationTest2: 'added *toAdd* *toAdd* twice',
        interpolationTest3: 'added *child.one* *child.two*',
        interpolationTest4: 'added *child.grandChild.three*'
      } 
    }
  };
  
  beforeEach(function(done) {
    i18n.init(i18n.functions.extend(opts, { 
      resStore: resStore
    }), function(t) { done(); });
  });

  it('it should replace passed in key/values', function() {
    expect(i18n.t('interpolationTest1', {toAdd: 'something', interpolationPrefix: '*', interpolationSuffix: '*'})).to.be('added something');
    expect(i18n.t('interpolationTest2', {toAdd: 'something', interpolationPrefix: '*', interpolationSuffix: '*'})).to.be('added something something twice');
    expect(i18n.t('interpolationTest3', { child: { one: '1', two: '2'}, interpolationPrefix: '*', interpolationSuffix: '*'})).to.be('added 1 2');
    expect(i18n.t('interpolationTest4', { child: { grandChild: { three: '3'}}, interpolationPrefix: '*', interpolationSuffix: '*'})).to.be('added 3');
  });

  it('it should replace passed in key/values on defaultValue', function() {
    expect(i18n.t('interpolationTest5', {defaultValue: 'added *toAdd*', toAdd: 'something', interpolationPrefix: '*', interpolationSuffix: '*'})).to.be('added something');
  });

});