FROM nginx:1.15
COPY dist/wavvy-landing/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf