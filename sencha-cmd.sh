# script to intall Sencha SDK using Bash


	mkdir ./unpack/

	curl -o ./unpack/sencha-cmd.run.zip http://cdn.sencha.com/cmd/5.0.0.160/SenchaCmd-5.0.0.160-linux.run.zip
	
	unzip -p ./unpack/sencha-cmd.run.zip > ./unpack/sencha-cmd.run
	rm ./unpack/sencha-cmd.run.zip

	chmod +x ./unpack/sencha-cmd.run
	./unpack/sencha-cmd.run --mode unattended --prefix ./sencha/
	rm ./unpack/sencha-cmd.run
	
	rmdir ./unpack/