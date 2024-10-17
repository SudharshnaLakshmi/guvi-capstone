FROM node:20-alpine

# Update certificates
RUN apk add --no-cache ca-certificates

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including development)
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port 80
EXPOSE 80

# Start the application
CMD ["serve", "-s", "build", "-l", "80"]
