# 🧊 BD Food Storage

A modern full-stack web application to manage food inventory, track expiry dates, and minimize food waste. Users can add, view, and delete food items while getting alerts for upcoming expirations. It's built with React 19, styled using Tailwind CSS, and powered by Firebase for authentication, database, and hosting.

**🔗 Live Website:** [bd-food-storage.web.app](https://bd-food-storage.web.app)  
**💻 Client Repo:** [bd-food-storage-client](https://github.com/faysalahmed915/bd-food-storage-client)  
**🛠 Server Repo:** [bd-food-storage-server](https://github.com/faysalahmed915/bd-food-storage-server)

---

## 📸 Preview

![BD Food Storage Banner](https://your-image-link-if-any.com)

---

## 🚀 Features

- 🔐 **Firebase Authentication** (Email/Password login)
- 📦 **Add & Manage Food Items** with expiration tracking
- ⏰ **Upcoming Expiry Alerts**
- 📊 **Dashboard Stats** using CountUp animation
- 🖼️ **Image Carousel** for food visuals
- 📱 **Fully Responsive** design
- 🎨 **Smooth UI Animations** with Lottie & Reveal effects
- 🍞 **Toast & Modal Notifications** with SweetAlert2 and React Hot Toast

---

## 🛠️ Tech Stack

### 📌 Frontend

- **React 19** – UI library
- **Vite** – Development/build tool
- **React Router 7** – Routing
- **Tailwind CSS** – Utility-first CSS framework
- **DaisyUI** – Prebuilt Tailwind components
- **Emotion** – CSS-in-JS styling
- **Axios** – Data fetching

### 📦 Libraries Used

- `firebase` – Auth, Firestore, Hosting
- `react-hot-toast` – Notifications
- `react-awesome-reveal` – Entry animations
- `react-countup` – Animated statistics
- `lottie-react` – Lottie JSON animations
- `react-flicking` – Touch-enabled carousel
- `react-icons`, `react-tooltip`, `sweetalert2` – UI enhancements

### 🧪 Dev Tools

- ESLint + React Hooks Plugin
- PostCSS + Autoprefixer
- TypeScript Types
- Vite Plugin React

---

## 🧭 Folder Structure

src/
├── Components/
│ ├── Foods/
│ ├── HomeComponents/
│ └── Shared/
├── Layouts/
├── Pages/
│ ├── Home.jsx
│ ├── Dashboard.jsx
│ └── Login/Register.jsx
├── Routes/
├── App.jsx
└── main.jsx


---

## 🔐 Firebase Setup

> Replace the Firebase config in your project with your own:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  ...
};



📦 Installation

# Clone the repository
git clone https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-faysalahmed915.git

# Navigate into the directory
cd bd-food-storage

# Install dependencies
npm install

# Start development server
npm run dev
🌐 Deployment
The project is deployed on Firebase Hosting.


To deploy your own version:

firebase login
firebase init
firebase deploy


🧑‍💻 Author

Faysal Ahmed
GitHub: @faysalahmed915


📄 License

This project is licensed under the ISC License.


🙌 Acknowledgements
Programming Hero
Firebase
Tailwind CSS
Vite
