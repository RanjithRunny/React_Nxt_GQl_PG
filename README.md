# Next.js + Apollo Server + Prisma + PostgreSQL

This is a full-stack demo project with:
- **Frontend**: Next.js (React 18, Apollo Client)
- **Backend**: Apollo Server + Prisma ORM
- **Database**: PostgreSQL
- **Deployment Ready**: Can be extended with AWS Lambda/ECS
- **Tooling**: Git, Docker, Jenkins (future integration)

---

## 🚀 Project Structure
├── fe/ # Frontend (Next.js + Apollo Client)
├── be/ # Backend (Apollo Server + Prisma)
└── prisma/ # Prisma schema & migrations
---

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd <project-folder>

2. Install dependencies
cd fe
npm install

cd ../be
npm install

3. Setup environment variables

Create .env file inside be/ with your PostgreSQL connection string:
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
//5432 - default db port

Frontend .env.local (inside fe/):
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4001

4. Run migrations
cd be
npx prisma migrate dev --name init

5. Start backend
cd be
node index.js

6. Start frontend
cd fe
npm run dev

Frontend runs on http://localhost:3000
Backend runs on http://localhost:4001/graphql

🔮 Roadmap
- Add authentication (JWT + bcrypt)
- Add Docker setup
- Deploy backend with AWS Lambda
- Deploy frontend with Vercel or AWS Amplify
- Setup CI/CD with Jenkins + GitHub Actions
👨‍💻 Author
@RanjithRunny




