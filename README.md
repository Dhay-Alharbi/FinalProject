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
│   │   ├── DashboardPage.js
│   │   ├── BranchesPage.js
│   │   ├── SubscriptionsPage.js
│   │   └── UploadVideoPage.js
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

# 4- Run both frontend and backend
npm run dev


<<<<<<< HEAD
4. MongoDB
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



npm run server → starts backend on port 5000

npm run client → starts frontend on port 3000/3001

npm run dev → runs both at the same time



terminal 1:
cd "C:\Program Files\MongoDB\Server\8.2\bin" 
.\mongod --dbpath C:\data\db

terminal 2:
npm run dev 

=======
>>>>>>> d28ee350a21e60e3cc9cd08c9fadf18775926871
