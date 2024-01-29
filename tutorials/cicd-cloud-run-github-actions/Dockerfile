FROM golang:alpine

# Install any necessary dependencies
# Example: RUN apk add --no-cache <dependency>

# Set the working directory
WORKDIR /app

# Copy the source code into the Docker image
COPY . .

# Build the Go application
RUN go build -o main .

# Expose the port on which the application will run
EXPOSE 8080

# Specify the command to run the application
CMD [ "./main" ]
