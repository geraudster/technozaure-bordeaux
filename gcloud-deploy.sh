google-cloud-sdk/bin/gcloud config set app/use_appengine_api false
google-cloud-sdk/bin/gcloud config set app/promote_by_default false
echo "Authenticate with $GAE_SERVICE_ACCOUNT"
google-cloud-sdk/bin/gcloud auth activate-service-account --key-file tz-bordeaux-0805b5cdf0c5.json
echo "Deploying to tz-bordeaux"
google-cloud-sdk/bin/gcloud --project tz-bordeaux preview app deploy --version v1 --quiet dist/app.yaml
#google-cloud-sdk/bin/gcloud preview app deploy --version v1 --quiet dist/app.yaml