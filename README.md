# FinalProject


# 1- Download node js 
  https://nodejs.org/en/download version: v24.12.0(LTS)

# 2- Install required libraries:
Create project folder:
mkdir FinalProject
cd FinalProject

Initialize npm project:
npm init -y

Install React dependencies:
npm install react react-dom next

Install UI library:
npm install lucide-react

Install backend dependencies:
npm install express mysql2 bcrypt jsonwebtoken cors

Install dev dependencies:
npm install -D tailwindcss postcss autoprefixer @types/node @types/react

npx tailwindcss init -p


# 3- Project Structure

```text
FinalProject/
├── src/
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── SignInPage.js
│   │   ├── LoginPage.js
│   │   ├── UserPage.js
│   │   ├── SubscriptionsPage.js
│   │   └── AdminPage.js
│   ├── app.js
│   ├── index.js
│   └── styles/
│       └── globals.css
│   ├── components/
│   │   ├── Footer.js
│   │   └── Header.js
├── server/
│   └── server.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```




# 4. MongoDB
Install MongoDB Compass
https://www.mongodb.com/products/tools/compass

Install MongoDB 
https://www.mongodb.com/try/download/community


npm install mongoose bcrypt jsonwebtoken

cd "C:\Program Files\MongoDB\Server\8.2\bin" 
.\mongod --dbpath C:\data\db
mkdir C:\data\db

Open MongoDB Compass → New Connection → Use:
mongodb://localhost:27017


npm install nodemon concurrently --save-dev


# 5.run
npm run server → starts backend on port 5000

npm run client → starts frontend on port 3000/3001

npm run dev → runs both at the same time



CapstoneProject/
├── BackEnd/
│   ├── config/             # ملفات الإعدادات (مثل ربط قاعدة البيانات)
│   │   └── db.js
│   ├── middleware/         # ملفات التحقق والوسائط البرمجية
│   │   ├── auth.js
│   │   └── error.js
│   ├── models/             # تعريف نماذج البيانات (Database Schemas)
│   │   ├── Alert.js
│   │   ├── Branch.js
│   │   ├── Subscription.js
│   │   └── User.js
│   ├── routes/             # تعريف المسارات (API Endpoints)
│   │   └── [أضف ملفات المسارات هنا، مثلاً: userRoutes.js]
│   ├── controllers/        # (مقترح) منطق العمليات لكل مسار لفصل الكود عن الـ routes
│   ├── .env                # ملف المتغيرات البيئية (لا يرفع على GitHub)
│   ├── .env.example        # نسخة توضيحية للمتغيرات البيئية (يرفع على GitHub)
│   ├── .gitignore          # لتحديد الملفات التي لا تريد رفعها (node_modules, .env)
│   ├── package.json        # معلومات المشروع والمكتبات المستخدمة
│   ├── package-lock.json
│   └── server.js           # نقطة الدخول الرئيسية للتطبيق
├── FrontEnd/               # (إذا كنت ستبدأ في صفحة الشات بوت التي ذكرتها سابقاً)
└── README.md               # شرح للمشروع وكيفية تشغيله (مهم جداً لـ GitHub)




