# Expo Router Base URL issue

Most basic setup for intiial route issue using base urls.

## Running

Prepare the app:

- `$ cd ./app`
- `$ bun install`
- `$ bun expo export --platform web`

Prepare the server:

- `$ cd ./server`
- `$ bun install`
- `$ bun start`

Open the `web: ...` link from terminal, or [http://localhost:3000/my/base/url](http://localhost:3000/my/base/url)

## Issue

The intial web link swaps the URL to `http://localhost:3000`.

### Using Expo Router from `main`

Change the **app/package.json** file:

```diff
-"expo-router": "~3.4.8",
+"expo-router": "../expo-router-a6329839072067d010b6233b0f57abf0ece80d69.tgz",
```

- `$ cd ./app`
- `$ rm -rf node_modules`
- `$ bun install`
- `$ bun expo export --platform web --clear`
- `$ cd ../server`
- `$ bun start`

This results in a `404` when starting the page, and navigating to [http://localhost:3000/my/base/url](http://localhost:3000/my/base/url)

But, [http://localhost:3000/my/base/url/server](http://localhost:3000/my/base/url/server) works fine.
