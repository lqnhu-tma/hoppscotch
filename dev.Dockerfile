# Base builder stage
FROM node:20-alpine3.19 as base_builder

WORKDIR /usr/src/app
ENV HOPP_ALLOW_RUNTIME_ENV=true

RUN apk add python3 make g++ && npm install -g pnpm
COPY pnpm-lock.yaml .
RUN pnpm fetch
COPY . .

# Backend stage
FROM base_builder as backend
RUN apk add caddy
WORKDIR /usr/src/app/packages/hoppscotch-backend
COPY ./backup/hoppscotch-backend/backend.Caddyfile /etc/caddy/backend.Caddyfile
RUN rm "../../.env"
ENV PRODUCTION="true"
ENV PORT=8080
ENV APP_PORT=${PORT}
ENV DB_URL=${DATABASE_URL}
CMD ["node", "/usr/src/app/packages/hoppscotch-backend/prod_run.mjs"]
EXPOSE 80
EXPOSE 3170

# Frontend builder stage
FROM base_builder as fe_builder
WORKDIR /usr/src/app/packages/hoppscotch-selfhost-web
# No need to run generate again as we use backed-up files

# Frontend application stage
FROM caddy:2-alpine as app
WORKDIR /site
COPY ./backup/hoppscotch-app/prod_run.mjs /usr/prod_run.mjs
COPY ./backup/hoppscotch-app/selfhost-web.Caddyfile /etc/caddy/selfhost-web.Caddyfile
COPY ./backup/hoppscotch-app/site /site
RUN apk add nodejs npm && npm install -g @import-meta-env/cli
EXPOSE 80
EXPOSE 3000
CMD ["/bin/sh", "-c", "node /usr/prod_run.mjs && caddy run --config /etc/caddy/selfhost-web.Caddyfile --adapter caddyfile"]

# Admin builder stage
FROM base_builder as sh_admin_builder
WORKDIR /usr/src/app/packages/hoppscotch-sh-admin
# No need to run build again as we use backed-up files

# Admin application stage
FROM caddy:2-alpine as sh_admin
WORKDIR /site
COPY ./backup/hoppscotch-sh-admin/prod_run.mjs /usr/prod_run.mjs
COPY ./backup/hoppscotch-sh-admin/sh-admin-multiport-setup.Caddyfile /etc/caddy/sh-admin-multiport-setup.Caddyfile
COPY ./backup/hoppscotch-sh-admin/sh-admin-subpath-access.Caddyfile /etc/caddy/sh-admin-subpath-access.Caddyfile
COPY ./backup/hoppscotch-sh-admin/site /site
RUN apk add nodejs npm && npm install -g @import-meta-env/cli
EXPOSE 80
EXPOSE 3100
CMD ["node", "/usr/prod_run.mjs"]

# All-in-one stage
FROM backend as aio
RUN apk add caddy tini && npm install -g @import-meta-env/cli
COPY ./backup/hoppscotch-app/site /site/selfhost-web
COPY ./backup/hoppscotch-sh-admin/site /site/sh-admin
COPY aio-multiport-setup.Caddyfile /etc/caddy/aio-multiport-setup.Caddyfile
COPY aio-subpath-access.Caddyfile /etc/caddy/aio-subpath-access.Caddyfile
ENTRYPOINT ["tini", "--"]
RUN apk --no-cache add curl
COPY --chmod=755 healthcheck.sh .
HEALTHCHECK --interval=2s CMD /bin/sh ./healthcheck.sh
CMD ["node", "/usr/src/app/aio_run.mjs"]
EXPOSE 3170
EXPOSE 3000
EXPOSE 3100
EXPOSE 80
