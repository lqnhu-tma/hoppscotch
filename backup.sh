# Copy from hoppscotch-app container
docker cp hoppscotch-app:/usr/prod_run.mjs ./backup/hoppscotch-app/prod_run.mjs
docker cp hoppscotch-app:/etc/caddy/selfhost-web.Caddyfile ./backup/hoppscotch-app/selfhost-web.Caddyfile
docker cp hoppscotch-app:/site ./backup/hoppscotch-app/site

# Copy from hoppscotch-sh-admin container
docker cp hoppscotch-sh-admin:/usr/prod_run.mjs ./backup/hoppscotch-sh-admin/prod_run.mjs
docker cp hoppscotch-sh-admin:/etc/caddy/sh-admin-multiport-setup.Caddyfile ./backup/hoppscotch-sh-admin/sh-admin-multiport-setup.Caddyfile
docker cp hoppscotch-sh-admin:/etc/caddy/sh-admin-subpath-access.Caddyfile ./backup/hoppscotch-sh-admin/sh-admin-subpath-access.Caddyfile
docker cp hoppscotch-sh-admin:/site ./backup/hoppscotch-sh-admin/site

# Copy from hoppscotch-backend container
docker cp hoppscotch-backend:/usr/src/app/packages/hoppscotch-backend/backend.Caddyfile ./backup/hoppscotch-backend/backend.Caddyfile
docker cp hoppscotch-backend:/usr/src/app/packages/hoppscotch-backend/prod_run.mjs ./backup/hoppscotch-backend/prod_run.mjs
docker cp hoppscotch-backend:/usr/src/app/aio_run.mjs ./backup/hoppscotch-backend/aio_run.mjs

# Repeat for other containers if needed (e.g., hoppscotch-old-sh-admin, hoppscotch-old-app, hoppscotch-aio, hoppscotch-old-backend)
