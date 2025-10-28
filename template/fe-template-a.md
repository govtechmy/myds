Documentation for For FE Templates A ( React + Vite + MYDS )
===

1. Prepare a file naming in all small letter, else will trigger package name error.
2. Run `npm create vite@latest`
3. Set Project Name
4. Select React
5. Select Typescript
6. Cd into the project and run `npm i`
7. Remove App.css
8. Remove everything inside index.css
9. Remove filler inside App.tsx, write only then save ` <div>test</div>`
10. npm run dev
11. remove Readme.md infos.
12. Open tailwind docs for 3.4 https://v3.tailwindcss.com/docs/guides/vite
13. Run `npm install -D tailwindcss@3 postcss autoprefixer`
14. Run `npx tailwindcss init -p`
15. Copy this code and replace the code inside tailwind.config.js

```
import { preset } from "@govtechmy/myds-style";

export default {
  content: [
    "src/**/*.{js,jsx,ts,tsx}", // Your own project source files
    "node_modules/@govtechmy/myds-react/dist/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [preset],
};

```

16. Add this code into index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

17. Run
```
npm i @govtechmy/myds-react @govtechmy/myds-style
```
18. Copy this code into index.css above tailwind imports - base,component,utils
```
@import "@govtechmy/myds-style/full.css";
```
19. Run 
```
npm run dev
```
20.  Edit 
```
<div>test</div>
```
 into 
 ```
 <div className='bg-bg-warning-50'>test</div>
 ```
 
21. Restart tailwind intelisense