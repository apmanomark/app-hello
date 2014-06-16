# cloned from https://gist.github.com/ksuayan/5565081

#!/bin/bash
 
PROJECT_DIR="anywhere"
PROJECT_NAME="Anywhere"
PACKAGE_NAME="com.globalbin.mobile"
DEV_DIR="~/Development"
SENCHA_SDK="~/touch-2.2.0"
SENCHA_CMD="~/bin/Sencha/Cmd/${SENCHA_CMD_VERSION}"
CORDOVA_VER="2.7.0"
PHONEGAP="~/phonegap-2.7.0/lib"
APP_DIR=$DEV_DIR"/"$PROJECT_DIR
 
echo "Creating Sench Touch + PhoneGap App for Android:"
echo "SENCHA_SDK="$SENCHA_SDK
echo "SENCHA_CMD="$SENCHA_CMD
echo "PHONEGAP="$PHONEGAP
echo "-------------------"
echo "Project Name: " $PROJECT_NAME
echo "Package Name: " $PACKAGE_NAME
echo "Project Directory: " $APP_DIR
 
 
echo ">>> Sencha Touch App..."
cd $SENCHA_SDK
pwd
$SENCHA_CMD/sencha generate app $PROJECT_NAME $APP_DIR
cp $PHONEGAP"/android/cordova-"$CORDOVA_VER".js" $APP_DIR
ls -al $APP_DIR
 
echo ">>> PhoneGap App ..."
$PHONEGAP/android/bin/create $APP_DIR/build/$PROJECT_NAME/android $PACKAGE_NAME $PROJECT_NAME