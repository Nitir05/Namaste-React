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

Class 3: Laying the foundation
• JSX is not HTML inside JS.
• JSX is XML-Like or HTML-Like syntax
• Browsers do not understand JSX, JSX is transpiled to a format which is readable by browser.
• Parcel does the task of transpiling and it takes help of Babel.
• JSX => React.createElement => ReactElement JS object => HTML Element(renderer).
• If you have to give attributes to JSX, you have to write it in camel case
• If we want to write JSX in multiple lines, it needs to wrap it between paranthesis.
• Everything in react are components.
• There are two types of components: 1.Class based components 2.Functional Components
• Class based components are old way and functional components are new way.
• React Functional Component is a JS function that returns some JSX code.
• If we want to render functional component we have to write it inside </> bracket e.g root.render(<Heading />)
• What is Component composition : having components inside component.
• We can Inject any javascript code inside JSX using {} braces, it can inject react element inside an functional component as well.
• If we are getting data from external source and try to inject that data into our JSX, JSX will sanitize the data so we need not to worry.
• JSX code can only have one parent , in order to solve this issue we can make use of React Fragment
We can write <React.Fragment> </React.Fragment> or to simplify <> </> we can write this as well
