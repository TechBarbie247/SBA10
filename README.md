# Recipe Discovery App

## Overview

This is a React single-page application (SPA) that allows users to browse recipes by category, search for specific recipes, view detailed recipe information, and manage a personal list of favorite recipes. The app uses the free [TheMealDB API](https://www.themealdb.com/api.php) for recipe data.

Key features include:

- Fetching and displaying recipe categories and details using React hooks (`useState`, `useEffect`).
- Custom hooks for data fetching (`useFetch`) and local storage synchronization (`useLocalStorage`).
- Global state management with React Context API to handle favorites.
- Dynamic routing using React Router for home, category, recipe detail, favorites, and search pages.
- Responsive and accessible UI with reusable components.

---


## References and Resources
Throughout the project, I frequently consulted the official React documentation for guidance on:

React Hooks API

Using the Effect Hook (useEffect)

Context API

React Router Documentation

These resources were instrumental in understanding how to manage state, side effects, global data, and routing effectively.

## Reflection
This project was both challenging and rewarding. Breaking the app down into smaller parts — such as building custom hooks first, setting up the context for favorites, then creating individual pages and components — made the complexity manageable. At times, it was easy to feel overwhelmed by all the requirements and moving pieces, but tackling each feature step-by-step helped me maintain progress without getting lost.

I gained a deeper understanding of advanced React concepts like custom hooks and context, and how to architect a scalable SPA with dynamic routing and persistent state. This hands-on experience reinforced best practices and improved my confidence in building real-world React applications.