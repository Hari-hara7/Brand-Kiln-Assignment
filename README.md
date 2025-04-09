<h1 align="center">Car Bazaar 🚗</h1>

<p align="center">
  A modern car showcase web app built with <b>Next.js</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>.<br/>
  Users can browse, filter, and wishlist cars with a sleek dark UI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-00FF88?style=for-the-badge&logo=tailwind-css&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

---

## 🚀 Features

- 🌑 Dark Theme Toggle
- 🔍 Filter by **brand** and **fuel type**
- 💰 Sort by price (low to high / high to low)
- ❤️ Wishlist support
- 📱 Responsive & mobile-friendly UI
- ⚡ Fast & modern design with neon-green glow
- 🎨 Built with clean UI using `shadcn/ui` & `TailwindCSS`

---

## 🖼️ Preview

![Preview Screenshot](./public/car-bazaar-preview.png)

> ✨ Live Demo: [https://car-bazaar.vercel.app](https://car-bazaar.vercel.app)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.dev/)
- **Icons**: [FontAwesome](https://fontawesome.com/)
- **Animations**: Tailwind transitions
- **State Management**: useState (React hooks)

---

## 🧠 How It Works

```tsx
// Filtering logic (simplified)
if (brand) cars = cars.filter(car => car.brand.includes(brand));
if (fuel) cars = cars.filter(car => car.fuel === fuel);
if (sort === "asc") cars.sort((a, b) => a.price - b.price);
if (sort === "desc") cars.sort((a, b) => b.price - a.price);
