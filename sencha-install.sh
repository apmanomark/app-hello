	unzip -p ./unpack/sencha-cmd.run.zip >./unpack/sencha-cmd.run
	rm ./unpack/sencha-cmd.run.zip

	chmod +x ./unpack/sencha-cmd.run
	./unpack/sencha-cmd.run --mode unattended --prefix ./sencha/
	rm ./unpack/sencha-cmd.run
	
	rmdir ./unpack/
	
	# source ~/.bashrc
	
	cd ./sencha/Sencha
	ls
	export PATH=~/bin/Sencha/Cmd/5.0.0.160:$PATH
	printenv