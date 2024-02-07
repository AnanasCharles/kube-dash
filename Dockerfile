# Stage 1: Build the React app
FROM node:14 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built React app with Nginx
FROM nginx:alpine

# Copy build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default port for Nginx)
EXPOSE 80

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
