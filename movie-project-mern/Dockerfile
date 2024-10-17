# Stage 1: Build the application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR ./

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install serve
RUN npm install -g serve

# Copy application files
COPY . .

# Build the application
RUN npm run build

#Run the Index.html
CMD ["serve", "-s", "build", "-l", "80"]
