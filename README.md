
# NextJS (13) + Firebase Auth + TailwindCSS Boilerplate

This is a boilerplate for NextJS 13 + Firebase Auth + TailwindCSS.

## Features

- NextJS 13
- Firebase Auth (Server side)
- TailwindCSS
- ESLint + Prettier

### When to use this boilerplate 

This boilerplate is ideal when you want to use NextJS13 (App router) and use the authentication with the Firebase auth module but you don't want client side handling, so this implementation uses cookies and Next Route Handlers to store it.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Then, create a `.env.local` file and add your Firebase config:

```bash
FIREBASE_SECRET_KEY=./firebase-admin-creds.json
NEXT_PUBLIC_FIREBASE_CONFIG='{"apiKey":"..."G-2BX9F7S2VM"}'
BASE_URL=http://localhost:3000
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

The app should be up and running on [http://localhost:3000](http://localhost:3000).

### Auth

This boilerplate uses Firebase Auth. You can create a new Firebase project [here](https://console.firebase.google.com/).

This implementation uses the [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) to create custom tokens for the client. You can find more information about this [here](https://firebase.google.com/docs/auth/admin/create-custom-tokens).

Route Handlers to manage the user session in the server


### Contrubuting

Feel free to open an issue or submit a pull request if you find any bug or have a suggestion.

### License

This project is licensed under the MIT License 




