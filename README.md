# JS Frameworks Course Assignment

This is our JS Frameworks Course Assignment.
Here we could choose between making a React app or Next.js App.
We should make a page with login functionality and API calls.

## Description

For the login functionality, we should use either a Wordpress installation with the JWT plugin from Module 3 installed, or a Strapi installation. The API should remain a separate project.

We could use either a REST or GraphQL API for the API calls.

Our app should have the following paths:

-   "/"
-   "/detail/:param"
-   "/contact"
-   "/login"
-   "/admin"

The admin path should not appear in the navigation.

We should use reusable components where appropriate and pay attention to how the components are arranged.

### Home

We should find an API that returns at least:

-   an array of items
-   a single item retrieved by a parameter (id, name, slug, etc)

We should display at least 2 properties from each result.

Each result should link to the detail page, passing a parameter in the URL.

### Detail

Here we should retrieve the parameter from the URL and use it in an API call to fetch one item.

Display at least 3 properties from the item.

### Contact

Here we should create a form with the following inputs and validation:

-   First name - required, minimum 3 characters
-   Last name - required, minimum 4 characters
-   Email - required, must be in a valid email format
-   Subject - required, this must be a select box with at least 2 options
-   Message - required, minimum 10 characters.

### Login

Here we should create a form with username/email and password fields. The inputs should have the necessary validation for a login form.

The form should make a login request to either a Wordpress API with the JWT plugin installed or a Strapi API. If the login is successful we should redirect the user to the admin route.

If the login is unsuccessful we should display a message above the form.

### Admin

This page should simply display an "Admin" heading.


## Built With

- [HTML]
- [CSS]
- [React.js](https://reactjs.org/)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:Noroff-FEU-Assignments/js-frameworks-course-assignment-prebeneide.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My LinkedIn page](www.linkedin.com/in/prebeneide)
