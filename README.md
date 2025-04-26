# pesalink-application

This is the repo for Samuel Mbugua's Vue application for the web application assessment.

## Running The Application

### GitHub Pages

A production version of this application is available [here](https://mbugua-s.github.io/pesalink-application/), served through GitHub Pages

### Running Locally

Clone the repository

```sh
git clone https://github.com/mbugua-s/pesalink-application.git
cd pesalink-application
```

Install dependencies

```sh
npm install
```

Start the development server (running on http://localhost:5173)

```sh
npm run dev
```

Run tests using Vitest

```sh
npm run test:unit
```

Lint using ESLint

```sh
npm run lint
```

Format using Prettier

```sh
npm run format
```

### Using Docker (WIP)

If you have Docker installed, you can pull the image and run a container. The images are built as part of the CI/CD pipeline.

To pull the image:

```sh
docker pull smbuguaaa/pesalink-application:latest
```

To run the application container:

```sh
docker run -d -p 5173:5173 smbuguaaa/pesalink-application
```

To stop the container, first get its ID by listing all running containers...

```sh
docker ps
```

...then stop it:

```sh
docker stop [container-id]
```

## Assumptions

- SEO and metrics such as Largest Contentful Paint (LCP) are not critical to the application, hence it uses Client-Side Rendering
- Given that the only details that are displayed when viewing all users are the: - name - username - phone - company name, and - email address,
  when adding a new user, these are the only user details that are captured when creating a user.
- The /create method of the API does not actually create the user, so their details are added directly to the array in the store that has the rest of the fetched users

## Tools Used

- Pinia (State Management)
- PrimeVue (Components)
- Vitest (Unit and Component Tests)
- Zod (Validation)
