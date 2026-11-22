#!/bin/bash
# প্রকাশের জন্য ছোট ও এক ফাইলে বাঁধা সংস্করণ তৈরি করে: dist/
set -e
cd "$(dirname "$0")"
ESB=${ESBUILD:-npx esbuild}
rm -rf dist && mkdir -p dist/assets
SRC="js/ui.js js/cloud.js js/store.js js/core.js js/dashboard.js js/people.js js/academic.js js/finance.js js/misc.js js/documents.js js/settings.js"
{ echo '(()=>{"use strict";'; cat $SRC; echo 'boot();})();'; } > /tmp/sms_app.js
{ echo '(()=>{"use strict";'; cat js/ui.js js/cloud.js js/store.js js/verify.js; echo '})();'; } > /tmp/sms_v.js
$ESB /tmp/sms_app.js --minify --legal-comments=none --target=es2019 --outfile=/tmp/sms_app.min.js --log-level=warning
$ESB /tmp/sms_v.js --minify --legal-comments=none --target=es2019 --outfile=/tmp/sms_v.min.js --log-level=warning
cat js/vendor/c-app.js js/vendor/c-auth.js js/vendor/c-store.js js/vendor/qrcode.js js/vendor/html2canvas.min.js js/vendor/jspdf.umd.min.js /tmp/sms_app.min.js > dist/assets/app.js
cat js/vendor/c-app.js js/vendor/c-store.js /tmp/sms_v.min.js > dist/assets/v.js
cat css/bootstrap.min.css css/app.css css/docs.css > /tmp/sms.css
$ESB /tmp/sms.css --minify --outfile=dist/assets/app.css --log-level=warning
python3 - <<'PY'
import re
for src,dst,js in [('index.html','dist/index.html','assets/app.js'),('verify.html','dist/verify.html','assets/v.js')]:
    h=open(src).read()
    h=re.sub(r'\s*<link rel="stylesheet" href="css/[^"]+">','',h)
    h=h.replace('</head>','<link rel="stylesheet" href="assets/app.css">\n</head>')
    h=re.sub(r'\s*<script src="js/[^"]+"></script>','',h)
    h=h.replace('<script>boot();</script>','')
    h=h.replace('</body>',f'<script src="{js}"></script>\n</body>')
    open(dst,'w').write(h)
PY
echo "dist তৈরি হয়েছে"; ls -la dist dist/assets
