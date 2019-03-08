 param (
    [string]$imageIdName = "275"
 )
 
cd\

cd \agent\_work\r2\a\_container-test\drop

$Env:APP_IMAGE = "$imageIdName"

docker-compose up -d

echo Done!
