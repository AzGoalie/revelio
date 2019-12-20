FROM node:alpine

RUN adduser -S revelio
USER revelio

# Root path for file contents within the container
WORKDIR '/revelio'

# Entry point (express server)
COPY target/server/bundle.middleware.js .

# Static bundle chunks
COPY target/webapp/* ./target/webapp/

CMD ["node", "bundle.middleware.js"]