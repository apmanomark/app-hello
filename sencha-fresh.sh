

mkdir -p ./unpack/

curl -o ./unpack/sencha-cmd.run.zip http://cdn.sencha.com/cmd/$SENCHA_CMD_VERSION/SenchaCmd-${SENCHA_CMD_VERSION}-linux.run.zip

unzip -p ./unpack/sencha-cmd.run.zip >./unpack/sencha-cmd.run
rm  ./unpack/sencha-cmd.run.zip

chmod +x ./unpack/sencha-cmd.run
./unpack/sencha-cmd.run --mode unattended 
rm  ./unpack/sencha-cmd.run