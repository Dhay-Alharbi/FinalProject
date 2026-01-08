# FinalProject


1- Download node js https://nodejs.org/en/download version: v24.12.o(LTS)


2= Install required libraries:
# Create project folder
mkdir FinalProject
cd FinalProject

# Initialize npm project
npm init -y

# Install React dependencies
npm install react react-dom next

# Install UI library
npm install lucide-react

# Install backend dependencies
npm install express mysql2 bcrypt jsonwebtoken cors

# Install dev dependencies
npm install -D tailwindcss postcss autoprefixer @types/node @types/react

npx tailwindcss init -p


## Project Structure

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
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── globals.css
├── server/
│   └── server.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

4. Run both frontend and backend
npm run dev

