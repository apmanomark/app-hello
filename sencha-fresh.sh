

mkdir -p ./unpack/

curl -o ./unpack/sencha-cmd.run.zip http://cdn.sencha.com/cmd/5.0.0.160/SenchaCmd-5.0.0.160-linux.run.zip

mkdir ./${SENCHA_DIR}/


unzip -p ./unpack/sencha-cmd.run.zip >./unpack/sencha-cmd.run
rm  ./unpack/sencha-cmd.run.zip

chmod +x ./unpack/sencha-cmd.run
./unpack/sencha-cmd.run --mode unattended 
rm  ./unpack/sencha-cmd.run

