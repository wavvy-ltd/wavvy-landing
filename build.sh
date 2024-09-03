#/bin/bash
set -e
IMAGE=michameiu/wavvy-landing

VERSION=v1.0.4
echo "Building $IMAGE:$VERSION"

git push origin main

npm run build-prod

docker build -t $IMAGE:$VERSION.arm . --platform=linux/arm64
docker build -t $IMAGE:$VERSION . --platform=linux/amd64
docker push $IMAGE:$VERSION
