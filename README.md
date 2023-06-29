# Vite Setup with Git Pages

This is a clone of ["vite-react-router" (Github repo) by Erick Kuwahara](https://github.com/ErickKS/vite-react-router/tree/main) with the following differences:

- I converted `.tsx` (typescript) files to `.jsx`.
- In `main.tsx` (which I renamed `main.jsx`) I removed `as HTMLElement` from:

```javascript
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
```

This was because VS Code was complaining that it was typescript.

## Installation and configuring the Git Repo

For all installation and configuration instructions see Erick's Github repo (link above).

You can also watch his step-by-step YouTube tutorial: [Vite React App with Routes Deployed on Github | Reload error resolved!](https://youtu.be/uEEj2c3_ydg).
