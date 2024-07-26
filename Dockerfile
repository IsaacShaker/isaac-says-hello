# Use the official Node.js 18.17.1 image as the base image
FROM node:20.10.0

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Specify the command to run the application
CMD [ "yarn", "dev" ]