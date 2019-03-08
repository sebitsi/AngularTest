
$Env:APP_IMAGE = "$(Build.BuildId)"

docker-compose up -d

echo Done!
