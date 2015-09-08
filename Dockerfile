FROM iojs:2.5.0-onbuild

MAINTAINER quyen@agencyrevolution.com

RUN npm install

CMD ["npm", "start"]

EXPOSE 4000
