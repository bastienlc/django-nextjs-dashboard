# Assignment

## Web Development Coding Test: Next.js Application with Django API Integration

### Objective:
Build a web application using Next.js on the frontend and integrate it with a Django API backend. The application will feature a basic dashboard page with multiple charts (Candlestick, Line Chart, Bar Chart, and Pie Chart), and the data will be retrieved from the backend (it can be hardcoded in the backend).

### Task Breakdown:

#### Frontend: Next.js Application
Create a basic dashboard page that includes four different types of charts:

- Candlestick Chart
- Line Chart
- Bar Chart
- Pie Chart

##### Charts Requirement:
- Use a popular charting library such as Chart.js, Rechart, Lightview, or whatever you prefer to implement the charts.
- Each chart should render data that comes from the Django API.

##### Next.js Functionality:
- The frontend should fetch the data using Next.js API routes or directly in a React component via a fetch or Axios call.
- Display the fetched data dynamically in the charts.

#### Backend: Django API
Create a simple Django API that provides the data for the charts. The data can be hardcoded for this task.

##### Define the following API endpoints in Django, each serving data for the respective chart:
- `/api/candlestick-data/` – Returns JSON data for the Candlestick chart.
- `/api/line-chart-data/` – Returns JSON data for the Line chart.
- `/api/bar-chart-data/` – Returns JSON data for the Bar chart.
- `/api/pie-chart-data/` – Returns JSON data for the Pie chart.

The data returned from these APIs can be hardcoded but should follow the typical structure that the charts expect.

### Data Structures:

#### Candlestick Data:
```json
{
  "data": [
    {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
    {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
    ...
  ]
}
```

#### Line Chart Data:
```json
{
  "labels": ["Jan", "Feb", "Mar", "Apr"],
  "data": [10, 20, 30, 40]
}
```

#### Bar Chart Data:
```json
{
  "labels": ["Product A", "Product B", "Product C"],
  "data": [100, 150, 200]
}
```

#### Pie Chart Data:
```json
{
  "labels": ["Red", "Blue", "Yellow"],
  "data": [300, 50, 100]
}
```

### Evaluation Criteria:

#### Frontend Implementation (Next.js):
- Correct usage of React and Next.js features (e.g., API routes, SSR/SSG if applicable).
- Proper integration of charting libraries to display dynamic data.
- Fetching data from the Django backend and populating it into the charts.
- Clean, modular, and maintainable code.

#### Backend Implementation (Django API):
- Creation of simple and well-structured Django APIs that return hardcoded JSON data.
- Correct use of Django REST framework (if used) for building the APIs.
- Proper response format and handling of different API requests for each chart type.

#### Integration:
- The frontend should successfully fetch data from the Django backend and display it in the charts.
- The API calls should handle errors gracefully (e.g., display an error message on the dashboard if the API fails).

#### Code Quality:
- Clean, readable, and organized code.
- Proper use of comments and documentation where necessary.
- Adherence to best practices for both Next.js and Django.

#### UI/UX:
- A simple but clean and intuitive dashboard design.
- Responsive design (the charts should adjust properly on different screen sizes).
- Clear data representation through the charts.

### Submission Requirements:

#### Source Code:
- Provide the full source code for both the Next.js frontend and Django backend.
- Ensure the project structure is clean and well-organized.

#### Readme:
- Include a `README.md` file with the following details:
  - Instructions on how to set up and run the application.
  - Any libraries or tools used.
  - Brief explanation of the approach and thought process.

### Bonus Points:
- Using TypeScript in the Next.js app.
- Implementing Docker for easy setup of both the Next.js frontend and Django backend.
- Adding basic unit tests or integration tests for the Django API or Next.js components.
- Using state management (like Redux) to handle the data in the frontend.
