#!/bin/bash

# Iron Idols - Rebuild and restart Docker container
# This script rebuilds the Docker image and restarts the container

CONTAINER_NAME="iron-idols-dev"
IMAGE_NAME="iron-idols-web"
PORT_EXTERNAL=8333
PORT_INTERNAL=5173

echo "🎸 Iron Idols - Rebuilding Docker container..."
echo "================================================"

# Stop and remove existing container if it exists
echo "Stopping existing container..."
docker stop $CONTAINER_NAME 2>/dev/null
docker rm $CONTAINER_NAME 2>/dev/null

# Build the Docker image
echo "Building Docker image..."
docker build -t $IMAGE_NAME .

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to build Docker image"
    exit 1
fi

# Start the container
echo "Starting container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p $PORT_EXTERNAL:$PORT_INTERNAL \
  -v "$(pwd):/app" \
  -v /app/node_modules \
  -e NODE_ENV=development \
  --restart unless-stopped \
  $IMAGE_NAME

# Check if container is running
if [ $? -eq 0 ]; then
    echo "================================================"
    echo "✅ Success! Container is running"
    echo "🌐 Website available at: http://192.168.1.249:8333"
    echo ""
    echo "Useful commands:"
    echo "  View logs:    docker logs -f $CONTAINER_NAME"
    echo "  Stop:         docker stop $CONTAINER_NAME"
    echo "  Restart:      docker restart $CONTAINER_NAME"
    echo "  Remove:       docker rm -f $CONTAINER_NAME"
    echo "================================================"
else
    echo "❌ Error: Failed to start container"
    exit 1
fi
