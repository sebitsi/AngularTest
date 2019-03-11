param (
    [string]$imageIdName = "275",
    [string]$artifactPath = "_containertest/drop/"
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
Write-Host $Env:BUILD_DEFINITIONID
Write-Host $Env:BUILD_BUILDID
Write-Host $Env:BUILD_BUILDNUMBER
Write-Host $Env:BUILD_REPOSITORYNAME


cd\
cd $Env:SYSTEM_DEFAULTWORKINGDIRECTORY\$artifactPath

$Env:APP_IMAGE = "$imageIdName"

docker-compose up -d

echo Done!
