[build]
command = "npm run build"
publish = "dist"

[context.production.environment]
NODE_VERSION = "20"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200

[[headers]]
for = "/icons/*"
[headers.values]
    Access - Control - Allow - Origin = "*"
