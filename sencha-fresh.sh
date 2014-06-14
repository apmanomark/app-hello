curl -o ./$SENCHA_DIR http://cdn.sencha.com/cmd/$SENCHA_CMD_VERSION/SenchaCmd$SENCHA_CMD_VERSION-linux-x64.run.zip

unzip -q SenchaCmd${SENCHA_CMD_VERSION}-linux-x64.run.zip

chmod +x SenchaCmd${SENCHA_CMD_VERSION}-linux-x64.run

./SenchaCmd${SENCHA_CMD_VERSION}-linux-x64.run --mode unattended

