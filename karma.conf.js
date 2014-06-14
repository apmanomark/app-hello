// karma.conf.js

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    
    browsers: ['PhantomJS', 'PhantomJS_custom'],
    
    files: ['*.js'],
    
// you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          }
        },
        flags: ['--remote-debugger-port=9000']
      }
    }    
    
    
  });
};


