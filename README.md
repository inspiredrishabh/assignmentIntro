# Personal Profile Page

This is a simple personal profile page built with React and Tailwind CSS. The page showcases a developer's information including:

- Personal details and photo
- Short bio
- List of hobbies
- Contact information

## Project Overview

This project uses:

- React for component-based UI
- Tailwind CSS for styling
- Vite as the build tool

## Getting Started

### Prerequisites

- Node.js (version 16.x or higher recommended)
- npm or yarn

### Installation

1. Clone the repository

```
git clone <repository-url>
cd assignmentIntro
```

2. Install dependencies

```
npm install
```

3. Add your profile image

   - Place an image named `profile.png` in the public folder

4. Run the development server

```
npm run dev
```

5. Open your browser and visit `http://localhost:5173/`

## Build for Production

```
npm run build
```

The build files will be in the `dist` directory.

## Project Structure

- `/public` - Contains static assets like profile image
- `/src` - Source files
  - `App.jsx` - Main component with the profile layout
  - `main.jsx` - Entry point
  - `index.css` - Global styles with Tailwind imports

## Customization

You can modify the `App.jsx` file to change the profile information, layout, and styling as needed.

## Future Enhancements

- Add dark mode toggle
- Add more sections (projects, skills, etc.)
