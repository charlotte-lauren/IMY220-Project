# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 5000

# Command to run the Express server
CMD ["npm", "start"]
