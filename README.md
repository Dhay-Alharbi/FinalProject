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



## 📁 Project Structure

```text
CapstoneProject/
├── 📂 BackEnd/
│   ├── 📂 config/           # Database connection & configurations
│   │   └── 📄 db.js
│   ├── 📂 controllers/      # Business logic (e.g., OpenRouter API logic)
│   │   └── 📄 chatbotController.js
│   ├── 📂 middleware/       # Authentication & Error handling
│   │   ├── 📄 auth.js
│   │   └── 📄 error.js
│   ├── 📂 models/           # Mongoose schemas / Database models
│   │   ├── 📄 Alert.js
│   │   ├── 📄 Branch.js
│   │   ├── 📄 Subscription.js
│   │   └── 📄 User.js
│   ├── 📂 routes/           # API Endpoints
│   │   └── 📄 userRoutes.js
│   ├── 📄 .env              # Environment variables (Private)
│   ├── 📄 .gitignore        # Files to ignore in Git
│   ├── 📄 package.json      # Dependencies and scripts
│   └── 📄 server.js         # Entry point of the application
├── 📂 FrontEnd/             # Chatbot UI & Client-side code
└── 📄 README.md             # Project documentation


## 💻 Full FrontEnd Structure

```text
CapstoneProject/
└── 📂 FrontEnd/
    ├── 📂 public/              # ملفات الـ HTML والأيقونات العامة
    │   └── 📄 index.html
    ├── 📂 src/
    │   ├── 📂 api/             # إعدادات الاتصال بالسيرفر
    │   │   ├── 📄 api.js
    │   │   └── 📄 client.js
    │   ├── 📂 assets/          # الصور والملفات المساعدة
    │   │   └── 🖼️ logo.png
    │   ├── 📂 components/      # العناصر القابلة لإعادة الاستخدام
    │   │   ├── 📄 Header.js
    │   │   ├── 📄 Skeleton.js
    │   │   └── 📄 ToastProvider.js
    │   ├── 📂 context/         # إدارة حالة المستخدم (Auth Context)
    │   │   └── 📄 AuthContext.js
    │   ├── 📂 css/             # ملفات التنسيق
    │   │   └── 📄 style.css
    │   ├── 📂 js/              # ملفات المنطق البرمجي المساعدة
    │   │   ├── 📄 api.js
    │   │   └── 📄 auth.js
    │   ├── 📂 middleware/      # حماية المسارات
    │   │   └── 📄 ProtectedRoute.js
    │   ├── 📂 pages/           # جميع صفحات النظام (ترتيب أبجدي)
    │   │   ├── 📄 AdminUsers.js
    │   │   ├── 📄 Alerts.js
    │   │   ├── 📄 AnalyticsChat.js  <-- (صفحة الشات بوت الجديدة)
    │   │   ├── 📄 Branches.js
    │   │   ├── 📄 Chatbot.js
    │   │   ├── 📄 Dashboard.js
    │   │   ├── 📄 Demo.js
    │   │   ├── 📄 Home.js
    │   │   ├── 📄 Login.js
    │   │   ├── 📄 NewChatbot.js
    │   │   ├── 📄 Onboarding.js
    │   │   ├── 📄 Profile.js
    │   │   ├── 📄 Register.js
    │   │   ├── 📄 Reports.js
    │   │   ├── 📄 Settings.js
    │   │   └── 📄 Subscription.js
    │   ├── 📄 App.js           # المكون الرئيسي لتوجيه الصفحات (Routing)
    │   └── 📄 index.js         # نقطة انطلاق التطبيق
    ├── 📄 .env.example         # نموذج مفاتيح الـ API (Frontend)
    ├── 📄 package.json         # المكتبات والاعتمادات
    └── 📄 README.md            # توثيق قسم الفرونت إند






