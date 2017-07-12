FROM debian

LABEL Description="File Searcher" Vendor="Carlos Raffellini" Version="0.1"

RUN mkdir -p /opt/searcher
ADD * /opt/searcher/

RUN apt-get update && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_4.x | bash - && apt-get install -y nodejs && cd /opt/searcher && npm install

CMD ["node", "/opt/searcher/index.js"]

EXPOSE 8080