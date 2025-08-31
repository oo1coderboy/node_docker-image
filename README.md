# 🚀 Exploring Docker with Node.js

This project demonstrates how to containerize a simple **Node.js Express server** using Docker.  
The guide below explains everything you need to know — from building the first image, running a container, stopping/removing containers, and rebuilding after code changes.

---

## 📌 Prerequisites
- Install **[Docker](https://docs.docker.com/get-docker/)** on your machine.
- Basic knowledge of Node.js and Express.

---



---

## 🐳 Dockerfile Example

```dockerfile
# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port (the app will run on this inside container)
EXPOSE 3001

# Define the command to start the app
CMD ["node", "server.js"]
```
---


### Build a Docker Image
- Build the image from your Dockerfile:
```
    docker build -t reapedjuggler/nodeexamplewithdocker:firstimage1.0.1 .
```

 - -t adds a tag (name:version).
 - Example:
 - reapedjuggler/nodeexamplewithdocker → image name
 - firstimage1.0.1 → image version tag

--- 
### List Docker Images
- Run the below command in your terminal to see the lists of docker images.
```
    docker images
```

---

### See Running Containers
```
    docker ps
```
---

### To see all containers (including stopped):
```
    docker ps -a
```    
---

### Run a Container
 - Run a container from the built image:
 ```
    docker run -d -p 3000:3000 --name mynodeapp reapedjuggler/nodeexamplewithdocker:firstimage1.0.1
 ```

   - -d → run in detached mode (background)
   - -p 3000:3000 → maps host port:container port
   - --name mynodeapp → easy to identify your container
   - Access the app at 👉 http://localhost:3001

---

### Stop & Remove Containers
 - Stop a container:
 ```
 docker stop mynodeapp
```

 - Remove a container:
 ```
 docker rm mynodeapp
```

### Rebuild After Code Changes
 - When you modify code locally:
 **1.Stop & remove the old container:**
 ```
 docker stop mynodeapp
 docker rm mynodeapp
```

 **2. Build a new image (with updated tag):**
 ```
 docker build -t reapedjuggler/nodeexamplewithdocker:firstimage1.0.2 .
 ```
 **3. Run a new Container:**
 ```
 docker run -d -p 3001:3001 --name mynodeapp reapedjuggler/nodeexamplewithdocker:firstimage1.0.2
 ```
[!terminal-commands](images/rebuild.png)
---
 ### Clean Up Unused Resources
  - Remove unused containers, images, networks:
```
  docker system prune -f
```

### Quick Summary:

```
# Build
docker build -t reapedjuggler/nodeexamplewithdocker:firstimage1.0.1 .

# Run
docker run -d -p 3001:3001 --name mynodeapp reapedjuggler/nodeexamplewithdocker:firstimage1.0.1

# Stop
docker stop mynodeapp

# Remove
docker rm mynodeapp

# Rebuild (with new version tag)
docker build -t reapedjuggler/nodeexamplewithdocker:firstimage1.0.2 .

# Rerun
docker run -d -p 3001:3001 --name mynodeapp reapedjuggler/nodeexamplewithdocker:firstimage1.0.2
```