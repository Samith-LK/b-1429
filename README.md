# Personal Portfolio Website of Samith Chathuranga

This repository contains the source code for the personal portfolio website of Samith Chathuranga. The website showcases his skills, projects, experiences, and academic achievements, with a focus on AI/ML research and innovation.

## Project Purpose

The main purpose of this website is to:
*   Present a comprehensive overview of Samith's professional background and capabilities.
*   Showcase key projects and contributions in various domains.
*   Provide a central point of contact and information for potential collaborators, employers, and academic connections.
*   Highlight achievements, publications, and technical skills.

## Technologies Used

This project is built with a modern web development stack, including:

*   **Frontend Framework**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
*   **Routing**: [React Router](https://reactrouter.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Package Manager/Runtime**: [Bun](https://bun.sh/) / [npm](https://www.npmjs.com/)
*   **Linting**: [ESLint](https://eslint.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Ensure you have [Node.js](https://nodejs.org/) installed (which includes npm).
*   For Bun users, install [Bun](https://bun.sh/docs/installation).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SamithHAG/SamithHAG.github.io.git
    cd SamithHAG.github.io
    ```

2.  **Install dependencies:**

    Using Bun (recommended if `bun.lockb` is the primary lockfile):
    ```bash
    bun install
    ```
    Alternatively, using npm:
    ```bash
    npm install
    ```

### Running the Development Server

Once dependencies are installed, you can start the development server:

Using Bun:
```bash
bun run dev
```
Alternatively, using npm:
```bash
npm run dev
```
This will typically start the application on `http://localhost:5173` (Vite's default) or another port if specified in the configuration.

### Building for Production

To create a production build of the application:

Using Bun:
```bash
bun run build
```
Alternatively, using npm:
```bash
npm run build
```
The build artifacts will be placed in the `dist` directory (Vite's default).

## Deployment

This website is automatically deployed using [GitHub Actions](https://github.com/features/actions), as indicated by the `.github/workflows/deploy.yml` file. The workflow likely builds the project and deploys it to [GitHub Pages](https://pages.github.com/) whenever changes are pushed to the main branch.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/SamithHAG/SamithHAG.github.io/issues) if you want to contribute.