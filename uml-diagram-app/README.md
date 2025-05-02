# Interactive UML Diagrams - Eco-Friendly Home Energy Monitor

This project displays interactive UML diagrams (Use Case and Sequence) for the Eco-Friendly Home Energy Monitor application, based on the provided SRS.

It is built using Next.js (React), Tailwind CSS, and Mermaid.js.

## Features

*   **Use Case Diagram:** Displays the main use cases and the user actor.
    *   Hover over elements to see tooltips with descriptions from the SRS.
    *   Click on elements to see related requirements/details in a panel below the diagrams.
*   **Sequence Diagram (FR01 - Real-time Monitoring):** Displays the sequence of interactions for viewing real-time data.
    *   Hover over elements to see tooltips.
    *   Click on elements to see related requirements/details.
    *   **Simple Simulation:** Use the "Next Step" button to highlight the sequence messages one by one. Use the "Reset" button to clear the highlighting.

## Running the Application (Windows/macOS/Linux)

1.  **Prerequisites:**
    *   Node.js (version 18.x or later recommended)
    *   npm (usually comes with Node.js)

2.  **Installation:**
    *   Extract the contents of this zip file.
    *   Open a terminal or command prompt.
    *   Navigate to the extracted project directory (`uml-diagram-app`).
    *   Run the following command to install dependencies:
        ```bash
        npm install
        ```

3.  **Running the Development Server:**
    *   Once installation is complete, run the following command:
        ```bash
        npm run dev
        ```
    *   This will start the development server, typically at `http://localhost:3000`.
    *   Open your web browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

*   `/src/app/page.tsx`: The main page component containing the diagram definitions and layout.
*   `/src/components/MermaidDiagram.tsx`: The React component responsible for rendering Mermaid diagrams and handling simulation highlighting.
*   `/public`: Static assets (if any).
*   `/styles`: Global styles and Tailwind configuration.

