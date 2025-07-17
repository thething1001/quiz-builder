# quiz-builder

Quiz Builder App. Project consists of frontend (**Next.js**) and backend (**Node.js + Express.js + PosgreSQL**)

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js**
- **pnpm**

---

### **1. Clone the Repository**

```bash
git clone https://github.com/thething1001/RecipeAPI.git
cd RecipeAPI
```

---

### **2. Configure Environment Variables**

The project requires environment variables to function properly. To assist you, `.env.example` files are provided in the following directories:

- `frontend/`
- `backend/`

These files serve as templates, listing all necessary variables. You need to copy them to their respective `.env` files and fill them with data specific to your setup.

---

### **3. Install Dependencies**

Install all required Node.js packages for both the frontend and backend:

```bash
cd frontend
pnpm install
cd ../backend
pnpm install
```

---

### **4. Start the Application**

Run this command in `frontend` and `backend` directories:

```bash
pnpm dev
```

---

### **5. Access the Application**

Once the application is running, you can access it as follows, assuming you left all environment variables untouched (using default settings from `.env.example`):

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API Documentation**: [http://localhost:8000/api](http://localhost:8000/api)
