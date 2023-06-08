# Base image
FROM ubuntu:22.04

# Install essential packages
RUN apt-get update && apt-get install -y curl

# Install Node.js 18.x
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Set the working directory
WORKDIR /app

# Copy the application files
COPY . /app

# Install dependencies
RUN npm install

# Start the application
CMD ["npm", "start"]
