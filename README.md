# Welcome to VTC Challenge

This challenge is created to test your knowledge of creating Symfony Applications with SPA Frontend build using ReactJS.
In order to start working your solution, please clone this repository and create a copy under your namespace. 
Consider also to change name of your project to make it harder to find your solution by other competitors.

**DO NOT FORK THIS REPOSITORY, THIS WILL ALLOW OTHERS TO COPY YOUR SOLUTION**

## Challenge

Based on this bare-bones application create a service that will allow:
* registration of a user
* confirming account by clicking a link from email. (no need to send actual email, email can be persisted as a file in var/emails directory)
* users to login
* users to create notes
* each note should have fields
  * title
  * content
  * category
  * status (new, todo, done)
* list of notes should have possibility to search notes by text from title/content, a select list for statuses and another select list for categories.

To finish this challenge you have 24h since the moment of receiving this email. Remember to push your last changes before the end of the deadline.
We will be evaluating your solution based on the time of the commit. And remember to send us back link to your solution on GitHub.

Good look.

## Help notes

### Requirements
To run this project you will need:
* Docker: >24
* Docker Compose: >1.29
* NodeJS: >18
* PHP: >7.4

### First steps:

    $ cp .env.dist .env
    $ composer install
    $ yarn install
    $ docker-compose up -d
    $ yarn watch

After running this set of commands, without errors; you should be able to open `http://localhost:81/` and see `Hello World!!!` in the middle of the page.


## Completion Progress
- [x] User registration
  - POST `/api/register` endpoint with email/password validation
  - Minimum 8 character password requirement
  - Duplicate email check
  - Password hashing with Symfony's UserPasswordHasher
  - React registration form with styled-components
  - Auto-redirect to login after successful registration
- [x] Account confirmation via email link (persisted to var/emails)
  - Generates secure 32-byte hex token on registration
  - Saves HTML formatted emails to `var/emails/` directory
  - GET `/confirm/{token}` endpoint validates and activates accounts
  - Beautiful HTML email template with gradient header
  - Success/error confirmation page with proper styling
- [x] User login
  - POST `/api/login` endpoint with credential validation
  - Email confirmation check before allowing login
  - Resend confirmation email feature (`POST /api/resend-confirmation`)
  - Session-based authentication with secure session management
  - React login form with styled alert components
  - Clean, minimalist UI with proper error handling
  - Redirects to `/notes` dashboard on successful login
- [x] Create notes
  - POST `/api/notes` endpoint with validation
  - Note entity with user relationship (CASCADE delete)
  - Full CRUD operations (Create, Read, Update, Delete)
  - Session-based authentication protecting all endpoints
  - React modal form for creating/editing notes
- [x] Note fields: title, content, category, status (new, todo, done)
  - Title (required, VARCHAR 255)
  - Content (LONGTEXT for extended text)
  - Category (VARCHAR 100, user-defined)
  - Status (new/todo/done with validation)
  - CreatedAt and UpdatedAt timestamps (auto-managed)
- [x] Notes list with search by title/content
  - GET `/api/notes?search=query` endpoint
  - Real-time search input with debouncing
  - Searches across both title and content fields
  - Grid layout with responsive cards
- [x] Notes list filter by status
  - GET `/api/notes?status=new|todo|done` endpoint
  - Dropdown select for status filtering
  - Visual badges showing status (color-coded)
  - Combines with search and category filters
- [x] Notes list filter by category
  - GET `/api/notes?category=value` endpoint
  - Dropdown populated with user's unique categories
  - Dynamic category list from user's existing notes
  - Combines with search and status filters

## Implementation Guide

### Authentication Flow
1. **Registration** (`/register`)
   - User enters email/password → redirects to login after 1.5s
   - Email saved to `var/emails/{timestamp}_{email}.html` with confirmation link

2. **Email Confirmation**
   - User clicks link from email file → GET `/confirm/{token}`
   - Account activated → redirects to login page

3. **Login** (`/`)
   - User enters credentials
   - If unconfirmed: shows info alert with "Resend Confirmation Email" button
   - If confirmed: TODO - redirect to notes dashboard

### API Endpoints
**Authentication:**
- `POST /api/register` - Create new user account
- `POST /api/login` - Authenticate user and create session
- `POST /api/logout` - Destroy session
- `POST /api/resend-confirmation` - Resend confirmation email
- `GET /confirm/{token}` - Confirm email address

**Notes Management:**
- `GET /api/notes` - List notes with optional filters (search, status, category)
- `POST /api/notes` - Create new note
- `PUT /api/notes/{id}` - Update existing note
- `DELETE /api/notes/{id}` - Delete note

### Database Schema
**users table:**
- `id` (int, primary key)
- `email` (varchar 180, unique)
- `password` (varchar 255, hashed)
- `roles` (json, default: ["ROLE_USER"])
- `is_confirmed` (tinyint, default: 0)
- `confirmation_token` (varchar 64, nullable)

**notes table:**
- `id` (int, primary key)
- `user_id` (int, foreign key → users.id, CASCADE delete)
- `title` (varchar 255, required)
- `content` (longtext)
- `category` (varchar 100)
- `status` (varchar 20, enum: new/todo/done)
- `created_at` (datetime immutable)
- `updated_at` (datetime immutable)
- Indexes: user_id, status, category