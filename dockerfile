# Use an official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the static site files into the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 to be able to access the web server
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
