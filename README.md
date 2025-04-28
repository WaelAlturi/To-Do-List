# 📝 To-Do List Application

## 📌 Overview

The **[To-Do List](https://github.com/WaelAlturi/To-Do-List)** is a simple web application that helps users manage and track daily tasks easily. Users can add tasks, view their list, and delete tasks once completed.

---

## 🚀 Features

- ✅ Add new tasks
- 📋 View all tasks
- 🗑️ Delete completed tasks
- ⚡ Real-time updates

---

## 🛠️ Technologies Used

### Frontend

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

---

## 💻 Installation Instructions

Follow these steps to set up and run the project locally on your machine.

### 1. Clone the Repository

```
git clone https://github.com/WaelAlturi/To-Do-List.git
```

### 2. Install Dependencies

**Backend Setup:**

```
cd To-Do-List/server
npm install
```

**Frontend Setup:**

```
cd ../client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `server` directory and add your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost:27017/todolist
```

*(Replace with your own MongoDB URI if needed.)*

---

## ▶️ Running the Application

### Start the Backend Server

From the `server` directory:

```
npm start
```

Backend runs at:

```
http://localhost:3000
```

### Start the Frontend Application

From the `client` directory:

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📖 Usage

- **Add Tasks:**  
  Type a task into the input field and click the **➕ Add** button.
  
- **View Tasks:**  
  Newly added tasks will appear immediately in the list.
  
- **Delete Tasks:**  
  Click the **🗑️ Delete** button next to a task to remove it.

---

## 👨‍💻 Author

- **Wael Alturi**  
  [GitHub Profile](https://github.com/WaelAlturi)

---

## 📜 License

This project is open-source and available under the [MIT License](https://choosealicense.com/licenses/mit/).

---

✨ Enjoy managing your tasks with the [To-Do List](https://github.com/WaelAlturi/To-Do-List) app!
