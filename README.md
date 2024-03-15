# Expo Router Base URL issue

Most basic setup for intiial route issue using base urls.

## Running

Prepare the app:

- `$ cd ./app`
- `$ bun install`
- `$ bun export --platform web`

Prepare the server:

- `$ cd ./server`
- `$ bun install`
- `$ bun start`

Open the `web: ...` link from terminal, or [http://localhost:3000/my/base/url](http://localhost:3000/my/base/url)

## Issue

The intial web link swaps the URL to `http://localhost:300`.
