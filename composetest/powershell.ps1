 param (
    [string]$imageIdName = "275"
 )
 
 
$Env:APP_IMAGE = "$imageIdName"

docker-compose up -d

echo Done!
