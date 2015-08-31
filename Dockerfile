FROM quyennt/iojs:2.3.4

MAINTAINER quyen@agencyrevolution.com

RUN git clone https://github.com/ntquyen/koa-api-test.git

WORKDIR /koa-api-test

RUN npm install

CMD ["npm", "start"]

EXPOSE 4000
