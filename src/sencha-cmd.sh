curl -o bundle/sencha-cmd.run.zip http://cdn.sencha.com/cmd/5.0.0.160/SenchaCmd-5.0.0.160-linux.run.zip
    unzip -p bundle/sencha-cmd.run.zip > bundle/sencha-cmd.run
    rm bundle/sencha-cmd.run.zip

    chmod +x bundle/sencha-cmd.run
    ./bundle/sencha-cmd.run --mode unattended --prefix /path/to/install/dir
    rm bundle/sencha-cmd.run