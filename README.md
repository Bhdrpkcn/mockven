# Mockven Web App

Mockven is a clone of the software consulting and development company "Mobven". It is built to showcase my front-end web development skills. The project includes features such as responsive navigation, dynamic content rendering, and theme management. This project was initially started as part of my application for an internship at Mobven. Despite not securing the internship position, I am committed to completing what I started to further enhance my skills and demonstrate my capabilities.

## Important Points

1. **Clone of Mobven Website**: This application is a clone of the "Mobven" website, demonstrating a comprehensive solution for software consulting and development.
2. **Showcasing Skills**: The project is created to showcase my front-end web development skills.
3. **Challenges**:
   - **Non-Repetitive Components**: Avoiding repetitive components for better code maintainability.
   - **Single Data Source Management**: Managing content through a centralized data source.
   - **Animations**: Creating animations using JavaScript and CSS.
   - **Reusable Components**: Utilizing reusable components such as cards and body sections to avoid repetitive coding.

## Features

1. **Theme Management**:
   - Supports dark and light modes using React Context API.
   - Theme can be toggled across the application.

2. **Routing**:
   - Client-side routing using `react-router-dom`.
   - Dynamic rendering of components based on URL path.

3. **Layout Components**:
   - **Navbar**: Main navigation bar with links to different sections.
   - **Body**: Main content area that changes based on the route.
   - **Footer**: Footer with additional links and contact information.

4. **Utility Components**:
   - **BackToTop**: Button to scroll back to the top of the page.
   - **ScrollTracker**: Tracks scroll position to trigger animations.

5. **Pages**:
   - **MainFlow**: Displays a welcome banner and a list of flows for the root path.
   - **OuterFlow**: Displays journey-themed content for non-root paths.

6. **State Management**:
   - Uses Redux to manage state for fetching and displaying data.

7. **Data Management**:
   - Uses constants for managing data centrally instead of hardcoding it in components.
   - Data is imported from a single source (`mainFlowData.js`), making it easier to manage and update.
   - Error management is implemented to handle API fetch failures.

### Benefits

- **Ease of Maintenance**: Updating data in one place reflects throughout the application.
- **Consistency**: Ensures data consistency across different components and pages.
- **Scalability**: Simplifies adding or modifying data as the application grows.

### Example Data Structure
```
javascript
export const DATAFLOW = [
  {
    sectionId: "101",
    sectionName: "DATA_SERVICE",
    sectionTitle: "OUR SERVICES",
    sectionMainText: "Software consulting and development for your digital success",
    cards: [
      {
        id: "1001",
        title: "Software Development",
        text: "We've built dozens of mobile apps for the hottest industries.",
        icon: "https://mobven.com/wp-content/uploads/2022/07/Group-257-3.svg",
        link: "/solutions",
      },
      // more cards...
    ],
  },
  // more sections...
];
```

8. **Animations**:
    ***Interactive Circle Animation***
    - Tracks screen height and page height to calculate scroll percentage.
    - Uses the scroll percentage value for interactive circle sizing.
    - Manages animations using JavaScript and CSS for dynamic and engaging user experiences.

       - **Welcome Banner Animation**
     - Tracks mouse movement to animate elements within the welcome banner.
     - Uses JavaScript and CSS for smooth animation transitions.
     - Applies different speeds to elements to create a parallax effect.

   - **OuterFlow Animation**
     - Creates a moving background effect using keyframe animations in CSS.
     - Uses JavaScript to control the animation of elements within the SVG.
     - Implements responsive design to adjust animations for different screen sizes.

## Important Parts in Front-End Web Development Coding

- **State and Props Management**: Efficient use of React's state and props to manage dynamic content and interactions.
- **Context API**: Utilized for managing themes across the application.
- **Routing**: Implemented with `react-router-dom` for seamless navigation.
- **Responsive Design**: Components like `Navbar` and `MobilMenu` are designed to be responsive and handle different screen sizes.
- **Animations**: Managed through CSS and JavaScript for interactive elements like the welcome banner and flow animations.
- **Reusable Components**: Modular and reusable components such as `FlowContainer`, `FlowHeader`, and `FlowCard` for consistent UI patterns.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

## Contributing 

Feel free to open issues and submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.