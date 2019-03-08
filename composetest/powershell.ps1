param (
    [string]$imageIdName = "275"
 )
 
cd\

cd \agent\_work\r2\a\_container-test\drop
Write-Host $Env:AGENT_WORKFOLDER
Write-Host $Env:AGENT_BUILDDIRECTORY
Write-Host $Env:AGENT_ID
Write-Host $Env:BUILD_ARTIFACTSTAGINGDIRECTORY
Write-Host $Env:BUILD_STAGINGDIRECTORY
Write-Host $Env:SYSTEM_DEFAULTWORKINGDIRECTORY
Write-Host $Env:BUILD_SOURCESDIRECTORY
Write-Host $Env:BUILD_DEFINITIONNAME

$Env:APP_IMAGE = "$imageIdName"

docker-compose up -d

echo Done!
