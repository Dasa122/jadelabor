# Build stage - creates static HTML, CSS, and JavaScript files
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and build
COPY . .
RUN npm run build

# Output stage - copy built files to /output for extraction
FROM scratch
COPY --from=build /app/dist /output