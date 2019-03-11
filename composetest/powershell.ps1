param (
    [string]$imageIdName = "275",
    [string]$artifactPath = "_containertest/drop/"

 )
 
cd\
cd $Env:SYSTEM_DEFAULTWORKINGDIRECTORY\$artifactPath

$Env:APP_IMAGE = "$imageIdName"

docker-compose up -d

echo Done!
