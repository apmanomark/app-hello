
curl -o ./unpack/sencha-cmd.run.zip http://cdn.sencha.com/cmd/${SENCHA_CMD_VERSION}/SenchaCmd${SENCHA_CMD_VERSION}-linux-x64.run.zip

mkdir ./unpack/
unzip -p ./unpack/sencha-cmd.run.zip >./${SENCHA_DIR}/sencha-cmd.run
rm ./unpack/sencha-cmd.run.zip

chmod +x ./${SENCHA_DIR}/sencha-cmd.run
./${SENCHA_DIR}/sencha-cmd.run --mode unattended 

export PATH=~/$SENCHA_DIR/Sencha/Cmd/$SENCHA_CMD_VERSION/:$SENCHA_DIR/node_modules/karma/bin:$SENCHA_DIR/node_modules/coffee-script/bin:$PATH

