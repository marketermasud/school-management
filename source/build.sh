#!/bin/bash
# প্রকাশের জন্য ছোট ও এক ফাইলে বাঁধা সংস্করণ তৈরি করে: ../hosting/
# ব্যবহার: bash build.sh   (esbuild লাগবে: npm i -g esbuild)
set -e
cd "$(dirname "$0")"
ESB=${ESBUILD:-npx esbuild}
OUT=${OUT:-../hosting}
mkdir -p "$OUT/assets"
$ESB js/app.js --minify --legal-comments=none --target=es2019 --outfile=/tmp/sms_app.min.js --log-level=warning
$ESB js/verify.js --minify --legal-comments=none --target=es2019 --outfile=/tmp/sms_v.min.js --log-level=warning
cat js/vendor/c-app.js js/vendor/c-auth.js js/vendor/c-store.js js/vendor/qrcode.js js/vendor/html2canvas.min.js js/vendor/jspdf.umd.min.js /tmp/sms_app.min.js > "$OUT/assets/app.js"
cat js/vendor/c-app.js js/vendor/c-store.js /tmp/sms_v.min.js > "$OUT/assets/v.js"
cat css/app.css css/extra.css > /tmp/sms.css
$ESB /tmp/sms.css --minify --outfile="$OUT/assets/app.css" --log-level=warning
python3 - "$OUT" <<'PY'
import re,sys
out=sys.argv[1]
for src,dst,js in [('index.html','index.html','assets/app.js'),('verify.html','verify.html','assets/v.js')]:
    h=open(src).read()
    h=re.sub(r'\s*<link rel="stylesheet" href="css/[^"]+">','',h)
    h=h.replace('</head>','<link rel="stylesheet" href="assets/app.css">\n</head>')
    h=re.sub(r'\s*<script src="js/[^"]+"></script>','',h)
    h=h.replace('</body>',f'<script src="{js}"></script>\n</body>')
    open(f'{out}/{dst}','w').write(h)
PY
echo "তৈরি হয়েছে: $OUT"; ls -la "$OUT" "$OUT/assets"
