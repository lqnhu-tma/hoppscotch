#!/bin/bash
IMAGE_NAME="hoppscotch-old-app"
IMAGE_TAG="latest"
OUTPUT_FILE="hoppscotch-old-app.tar"

# Build the Docker image
docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .

# Save the Docker image to a file
docker save -o ${OUTPUT_FILE} ${IMAGE_NAME}:${IMAGE_TAG}

# Upload to cloud storage (example using Google Drive, adjust according to your cloud storage)
# gdrive upload ${OUTPUT_FILE}

echo "Docker image saved and uploaded to cloud storage."
