param (
    [string]$imageIdName = "275"
 )
 
dir

Write-Host $Env:AGENT_WORKFOLDER
Write-Host $Env:AGENT_BUILDDIRECTORY
Write-Host $Env:AGENT_ID
Write-Host $Env:BUILD_ARTIFACTSTAGINGDIRECTORY
Write-Host $Env:BUILD_STAGINGDIRECTORY
Write-Host $Env:SYSTEM_DEFAULTWORKINGDIRECTORY
Write-Host $Env:BUILD_SOURCESDIRECTORY
Write-Host $Env:BUILD_DEFINITIONNAME

cd\
cd C:\agent\_work\r2\a\_containertest\drop

$Env:APP_IMAGE = "$imageIdName"

docker-compose up -d

echo Done!
