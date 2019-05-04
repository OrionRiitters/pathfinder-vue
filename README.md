# Pathfinder-vue
## A Vue implementation of https://github.com/orionriitters/path_finder.
This web application queries the APIs of https://www.hikingproject.com/ and http://nominatim.org/. Users can search for cities in the US, view a leaflet map populated with various trails, save the trails to a backend, and view details of each trail. This application uses Express for routing and Postgres for data persistence.

Development branch is used to run project locally. 
To run, install dev dependencies, and create a .env file in root containing "POSTGRES_URI=[URI here]"
