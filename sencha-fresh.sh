

mkdir ./unpack/
curl -o ./unpack/ http://cdn.sencha.com/cmd/${SENCHA_CMD_VERSION}/SenchaCmd${SENCHA_CMD_VERSION}-linux-x64.run.zip

mkdir ./${SENCHA_DIR}
unzip -p ./unpack/${SENCHA_CMD_VERSION}/SenchaCmd${SENCHA_CMD_VERSION}-linux-x64.run.zip >./${SENCHA_DIR}/sencha-cmd.run
rm ./unpack/${SENCHA_CMD_VERSION}/SenchaCmd${SENCHA_CMD_VERSION}-linux-x64.run.zip

chmod +x ./${SENCHA_DIR}/sencha-cmd.run
./${SENCHA_DIR}/sencha-cmd.run --mode unattended 

export PATH=~/$SENCHA_DIR/Sencha/Cmd/$SENCHA_CMD_VERSION/:$SENCHA_DIR/node_modules/karma/bin:$SENCHA_DIR/node_modules/coffee-script/bin:$PATH

