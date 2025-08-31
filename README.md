## Exploring Docker

### Creating the new docker image
**1.Here is the way through which we can create the docker image:**
- Create the Dockerfile and inside that we can write this code:
```
    FROM node:latest
    WORKDIR /usr/app
    COPY . .
    RUN npm i
    EXPOSE 3001
    CMD node server.js
```
---


### Building docker image
- Run the below command to build the image
```
    docker build -t reapedjuggler/nodeexamplewithdocker:firstimage1.0.1 .
```

--- 
### See the images
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

### Summary

```
    Build:-> docker build -t reapedjuggler/nodeexamplewithdocker:firstimage1.0.1 .

    Run:-> docker run -d -p 3001:3001 --name mynodeapp reapedjuggler/nodeexamplewithdocker:firstimage1.0.1

    Access:-> http://localhost:3001
```

