# SENCHA_DIR="SENCHA"
# SENCHA_CMD_VERSION="5.0.0.160"
  
echo $SENCHA 
echo $SENCHA_CMD_VERSION 
  
# Framebuffer for Firefox

  #export DISPLAY=:99.0
  #sh -e xvfb start
  
  # Install JSDuck dependency
  
  # gem install jsduck
  
  # Download, unzip and symlink Sencha Ext JS dependency
  
  # curl -o ./$SENCHA_DIR http://cdn.sencha.com/ext/commercial/ext-4.2.1-commercial.zip
  # unzip -q ext-4.2.1-commercial.zip
  
  # ln -sv `pwd`/ext-4.2.1.883 $SENCHA_DIR/../ext
  
  # Install Sencha Cmd
  
curl -o ./$SENCHA_DIR http://cdn.sencha.com/cmd/$SENCHA_CMD_VERSION/SenchaCmd$SENCHA_CMD_VERSION-linux-x64.run.zip
unzip -q SenchaCmd$SENCHA_CMD_VERSION-linux-x64.run.zip
chmod +x SenchaCmd$SENCHA_CMD_VERSION-linux-x64.run
./SenchaCmd$SENCHA_CMD_VERSION-linux-x64.run --mode unattended
  
  # Make Sencha Cmd and CoffeeScript available in the PATH
  
  export PATH=~/$SENCHA_DIR/Sencha/Cmd/$SENCHA_CMD_VERSION/:$SENCHA_DIR/node_modules/karma/bin:$SENCHA_DIR/node_modules/coffee-script/bin:$PATH
  
  # Change directory to the package and build the package
  #- cd $TRAVIS_BUILD_DIR/packages/deft && sencha package build
  
  # Change directory back to the root of the repository ready for running tests
  #- cd $TRAVIS_BUILD_DIR