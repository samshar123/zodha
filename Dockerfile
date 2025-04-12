# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files first to install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js project
RUN npm run build

# Stage 2: Setup the production image
FROM node:18-alpine
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app ./

# Expose the port your Next.js app uses (default: 3000)
EXPOSE 3000

# Start the Next.js app in production mode
CMD [ "npm", "start" ]
