SENCHA_CMD_VERSION=5.0.0.160
UNPACK_FILENAME=sencha-cmd-32
INSTALLER_FILENAME=SenchaCmd-${SENCHA_CMD_VERSION}-linux

mkdir -p ./unpack/

curl -o ./unpack/${UNPACK_FILENAME}.run.zip http://cdn.sencha.com/cmd/${SENCHA_CMD_VERSION}/${INSTALLER_FILENAME}.run.zip

unzip -p ./unpack/${UNPACK_FILENAME}.run.zip >./unpack/${UNPACK_FILENAME}.run
rm  ./unpack/${UNPACK_FILENAME}.run.zip

chmod +x ./unpack/${UNPACK_FILENAME}.run
./unpack/${UNPACK_FILENAME}.run --mode unattended 
rm  ./unpack/${UNPACK_FILENAME}.run

PATH=$PATH:$HOME/bin/Sencha/Cmd/${SENCHA_CMD_VERSION}/