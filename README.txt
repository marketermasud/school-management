স্কুল ম্যানেজমেন্ট সিস্টেম

hosting/          → শুধু এই ফোল্ডারের ভেতরের সব ফাইল আপনার সাইটে তুলুন (Netlify / Cloudflare Pages / Firebase Hosting)
firestore.rules   → Firebase Console > Firestore Database > Rules-এ পুরোটা বসিয়ে Publish করুন
source/           → মূল কোড। কিছু বদলালে source ফোল্ডারে ./build.sh চালিয়ে নতুন hosting তৈরি করুন

প্রথমবার চালুর আগে Firebase Console-এ:
1. Authentication > Sign-in method > Email/Password চালু করুন
2. Firestore Database তৈরি করুন (Production mode)
3. Firestore > Rules-এ firestore.rules বসান
4. Authentication > Settings > Authorized domains-এ নিজের সাইটের ডোমেইন যোগ করুন
5. সাইট খুলে "প্রথমবার সেটআপ" পূরণ করুন। এই ইমেইলই হবে একমাত্র অ্যাডমিন
