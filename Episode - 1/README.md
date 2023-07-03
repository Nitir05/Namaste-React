Namaste React
Class 2: Igniting Our App

    • NPM:-  It is node an Node Package Manager, it does not have a full form.  It is used to manage package
    • What is package.json :- it is a configuration for NPM
    • Bundler:- This helps in bundling up our all files into a bundle to be able to deploy to production e.g, webpack, Parcel, VITE.
    • What is npm install -D : it is used to install dependency as dev dependency
    • "^ and ~" in package.json file.
    • Transitive Dependencies: Dependency of a dependency for example our project has dependency of Parcel but parcel itself may have some dependencies.
    • If we have package.json and package-lock.json we can re generate the node_modules
    • What is "npx command" ? :- it means executing a package
    • CDN links are not preferred way to bring React and React_DOM in our project
    # Parcel
    - Dev Build
    - Local Server
    - HMR = Hot Module Replacement
    - File Watching Algorithm
    - Faster builds because of caching
    - Image Optimisation
    - Minification
    - Bundling
    - Compressing
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling - to support newer and older browsers
    - Diagnostics
    - Error Handling
    - HTTPS
    - Tree Shaking
    - Different Dev and Prod builds

Remove main from Package.JSON in our project we do not need that as it conflicts with Parcel
If we want to mention which browsers our react code works on we will have to mention Browserslist in the package.json file
