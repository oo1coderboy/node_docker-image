# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/app

# Copy your application code into the container
COPY . .

# Install application dependencies
RUN npm i

# Expose a port your application will listen on
EXPOSE 3001

# Define the command to run your application
CMD node server.js