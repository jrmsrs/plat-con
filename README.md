# platcon

multimedia (text, audio, video) content platform

## prereqs

- [Node.js](https://nodejs.org/en)
- [Supabase](https://app.supabase.com/) project
- [Google Drive Api key](https://console.cloud.google.com/apis/library/drive.googleapis.com)

## unknown unknowns

- **Supabase**
  - **Supabase Database**
    - [schema](/schema.md)
  - **Supabase Auth** - manage authentication
    - **Email** with "Confirm email" turned <u>off</u>
  - **Supabase Storage (limit to 1GB @ free plan)** - store images in CDN with low latency
    - _avatar_, _channel-logo_, _channel-cover_ buckets mapping member.id, channel.id, etc
- **Google Drive API (limit to 15GB @ free plan)** - store large files
  - a **public** directory with edit permission for Google Service Account e-mail

## setup

1. `npm install`
2. `cp .env.example .env`
3. populate [.env](/.env.example) file
4. put supabase project ID on [package.json](/package.json) > `"update-types":... --project-id \"ID\"...`

## generating types

- supabase: `npm run update-types`
- svelte: `npm start`
