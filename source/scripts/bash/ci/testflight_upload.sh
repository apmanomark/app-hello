# Testflight is iOS only ***
 
  curl http://testflightapp.com/api/builds.json 
    -F file=@build.ipa
    -F dsym=@build.app.dSYM.zip
    -F api_token='${TESTFLIGHT_API_TOKEN}' 
    -F team_token='${TEAM_TOKEN}' 
    -F notes='This build was uploaded FROM CIRCLE CI via the upload API' 
    -F notify=True 
    -F distribution_lists='Internal, QA' # can set this as a variable later