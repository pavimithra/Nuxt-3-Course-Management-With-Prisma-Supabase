import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedTypescript() {
  await prisma.course.create({
    data: {
      title: "TypeScript with Vue.js 3",
      slug: "typescript-with-vuejs-3",
      description: "Learn how to use TypeScript in your Vue projects",
      price: 24,
      mostPopular: false,
      chapters: {
        create: [
          {
            title: "Chapter 1",
            slug: "1-chapter-1",
            number: 1,
            lessons: {
              create: [
                {
                  title: "Introduction to TypeScript with Vue.js 3",
                  slug: "1-introduction-to-typescript-with-vue-js-3",
                  number: 1,
                  accessCode: "Free",
                  downloadUrl:
                    "https://vueschool.io/lessons/introduction-to-typescript-with-vue-js-3",
                  videoId: 684236333,
                  text: `In this lesson, we take a look at some of the benefits of using TypeScript with Vue.js including:

    Improved error detection in your IDE and at build time
    Safer and less stressful refactoring
    More focused and accurate IDE autocompletion

    We also answer the question: “Are there any cases when you wouldn’t want to use TypeScript?”.`,
                },
                {
                  title: "TypeScript in Vue Components",
                  slug: "2-typescript-in-vue-components",
                  number: 2,
                  accessCode: "Free",
                  downloadUrl:
                    "https://vueschool.io/lessons/typescript-in-vue-components",
                  videoId: 684012498,
                  text: `In this lesson, we learn how to direct Vue Single File Components to work with typescript.`,
                },
                {
                  title: "Typing Component Events",
                  slug: "3-typing-component-events",
                  number: 3,
                  accessCode: "Free",
                  downloadUrl:
                    "https://vueschool.io/lessons/typing-component-events",
                  sourceUrl:
                    "https://vueschool.io/lessons/typing-component-events",
                  videoId: 686921522,
                  text: `In this lesson, we learn how to type the payload of component events in Vue and TypeScript.`,
                },
              ],
            },
          },
          {
            title: "Chapter 2",
            slug: "2-chapter-2",
            number: 2,
            lessons: {
              create: [
                {
                  title: "Using TypeScript with the Options API in Components",
                  slug: "1-using-typescript-with-the-options-api-in-components",
                  number: 1,
                  downloadUrl:
                    "https://vueschool.io/lessons/using-typescript-with-the-options-api-in-components",
                  sourceUrl:
                    "https://vueschool.io/lessons/using-typescript-with-the-options-api-in-components",
                  videoId: 688503389,
                  text: `In this lesson, we learn how to use TypeScript with the Vue.js Options API to type things such as component props, computed props, and events.`,
                },
                {
                  title: "Declaring and Typing Component Props",
                  slug: "2-declaring-and-typing-component-props",
                  number: 2,
                  downloadUrl:
                    "https://vueschool.io/lessons/declaring-and-typing-component-props",
                  sourceUrl:
                    "https://vueschool.io/lessons/declaring-and-typing-component-props",
                  videoId: 688500728,
                  text: `In this lesson, we’ll examine how to use TypeScript to define types for Vue component props. Along the way, you’ll also get a first hand look at the great DX this provides for interacting with those components.`,
                },
                {
                  title: "TypeScript in Vue Components",
                  slug: "3-typescript-in-vue-components",
                  number: 3,
                  downloadUrl:
                    "https://vueschool.io/lessons/typescript-in-vue-components",
                  videoId: 684012498,
                  text: `In this lesson, we learn how to direct Vue Single File Components to work with typescript.`,
                },
                {
                  title: "Typing Component Events",
                  slug: "4-typing-component-events",
                  number: 4,
                  downloadUrl:
                    "https://vueschool.io/lessons/typing-component-events",
                  sourceUrl:
                    "https://vueschool.io/lessons/typing-component-events",
                  videoId: 686921522,
                  text: `In this lesson, we learn how to type the payload of component events in Vue and TypeScript.`,
                },
              ],
            },
          },
          {
            title: "Chapter 3",
            slug: "3-chapter-3",
            number: 3,
            lessons: {
              create: [
                {
                  title: "Using TypeScript with the Options API in Components",
                  slug: "1-using-typescript-with-the-options-api-in-components",
                  number: 1,
                  downloadUrl:
                    "https://vueschool.io/lessons/using-typescript-with-the-options-api-in-components",
                  sourceUrl:
                    "https://vueschool.io/lessons/using-typescript-with-the-options-api-in-components",
                  videoId: 688503389,
                  text: `In this lesson, we learn how to use TypeScript with the Vue.js Options API to type things such as component props, computed props, and events.`,
                },
                {
                  title: "Declaring and Typing Component Props",
                  slug: "2-declaring-and-typing-component-props",
                  number: 2,
                  downloadUrl:
                    "https://vueschool.io/lessons/declaring-and-typing-component-props",
                  sourceUrl:
                    "https://vueschool.io/lessons/declaring-and-typing-component-props",
                  videoId: 688500728,
                  text: `In this lesson, we’ll examine how to use TypeScript to define types for Vue component props. Along the way, you’ll also get a first hand look at the great DX this provides for interacting with those components.`,
                },
                {
                  title: "TypeScript in Vue Components",
                  slug: "3-typescript-in-vue-components",
                  number: 3,
                  downloadUrl:
                    "https://vueschool.io/lessons/typescript-in-vue-components",
                  videoId: 684012498,
                  text: `In this lesson, we learn how to direct Vue Single File Components to work with typescript.`,
                },
                {
                  title: "Typing Component Events",
                  slug: "4-typing-component-events",
                  number: 4,
                  downloadUrl:
                    "https://vueschool.io/lessons/typing-component-events",
                  sourceUrl:
                    "https://vueschool.io/lessons/typing-component-events",
                  videoId: 686921522,
                  text: `In this lesson, we learn how to type the payload of component events in Vue and TypeScript.`,
                },
              ],
            },
          },
        ],
      },
      features: {
        create: [
          { title: "Typescript Fundamentals" },
          { title: "The benefits of using TypeScript with Vue" },
          { title: "How to setup a TypeScript and Vue project" },
          { title: "Access to the source code for all lessons" },
        ],
      },
    },
  });
}

async function seedLaravel() {
  await prisma.course.create({
    data: {
      title: "Laravel Nuxt Blog",
      slug: "laravel-nuxt-blog",
      description:
        "Learn how to build robust, modern Blog with Laravel and Nuxt from scratch.",
      price: 50,
      mostPopular: true,
      chapters: {
        create: [
          {
            title: "Introduction",
            slug: "1-introduction",
            number: 1,
            lessons: {
              create: [
                {
                  title: "Introduction to the Course",
                  slug: "1-introduction-to-the-course",
                  number: 1,
                  accessCode: "Free",
                  downloadUrl:
                    "https://vueschool.io/lessons/laravel-backends-for-vue-js-frontends-course-introduction",
                  videoId: 792824499,
                  text: `👋 Hello, and welcome to the course! Laravel is a powerful PHP framework that can be used in several different ways:
                  
                  It can render pages server side with PHP
                  You can create a “modern monolith” with Inertia and Vue (or any other front-end framework for that matter)
                  Or you can create a REST API with Laravel that’s consumed by a completely separate front-end application (a Vue SPA in our case).
                  We’ll be going with option 3. In the course, you’ll learn all about using Vue.js to interact with a Laravel powered REST API.`,
                },
                {
                  title: "Setup Development Environment for Backend",
                  slug: "2-setup-development-environment-for-backend",
                  number: 2,
                  downloadUrl:
                    "https://vueschool.io/lessons/setup-project-development-environment",
                  videoId: 794559262,
                  text: `In this lesson, I’ll show you how to setup the Laravel powered backend on your local machine so that you can make 
                  requests to it from the Vue SPA.

                  Download the backend boilerplate with this command
                  
                  git clone git@github.com:vueschool/laravel-course-backend.git
                  Install the backend dependenices with:
                  
                  composer install
                  // or this dending on how composer is installed and setup
                  php composer.phar install
                  Start the dev server with
                  
                  ./vendor/bin/sail up`,
                },
                {
                  title: "Setup Development Environment for the Frontend",
                  slug: "3-setup-development-environment-for-the-frontend",
                  number: 3,
                  accessCode: "Free",
                  downloadUrl:
                    "https://vueschool.io/lessons/setup-development-environment-for-the-frontend",
                  sourceUrl:
                    "https://vueschool.io/lessons/setup-development-environment-for-the-frontend",
                  videoId: 794559570,
                  text: `In this lesson, we download and setup the boilerplate code for the front-end app. We also go over existing file 
                  structure and code.

                  The front-end is built with Nuxt but we’re mostly using it for the developer conveniences it provides. 
                  Much of the app could be built very similarly without Nuxt (using a regular Vue SPA created with npm init vue). 
                  And I’ll point out what you might do differently in the course videos if you weren’t using Nuxt.`,
                },
              ],
            },
          },
          {
            title: "Auth with Laravel and Vue",
            slug: "2-auth-with-laravel-and-vue",
            number: 2,
            lessons: {
              create: [
                {
                  title: "Laravel Sanctum and Fortify for a Vue.js SPA",
                  slug: "1-laravel-sanctum-and-fortify-for-a-vue-js-spa",
                  number: 1,
                  downloadUrl:
                    "https://vueschool.io/lessons/laravel-sanctum-and-fortify-for-a-vue-js-spa",
                  sourceUrl:
                    "https://vueschool.io/lessons/laravel-sanctum-and-fortify-for-a-vue-js-spa",
                  videoId: 794559511,
                  text: `In this lesson, learn what Laravel Sanctum and Fortify are and how they work together to provide the authentication system for 
                  our Vue.js SPA.

                  Sanctum authenticates users with cookie based sessions and Fortify provides headless endpoints for registration, login, logout, 
                  and more.`,
                },
                {
                  title:
                    "Login and Logout Users with Laravel Fortify for a Vue.js SPA",
                  slug: "2-login-and-logout-users-with-laravel-fortify-for-a-vue-js-spa",
                  number: 2,
                  downloadUrl:
                    "https://vueschool.io/lessons/login-and-logout-users-with-laravel-fortify-for-a-vue-js-spa",
                  sourceUrl:
                    "https://vueschool.io/lessons/login-and-logout-users-with-laravel-fortify-for-a-vue-js-spa",
                  videoId: 796454992,
                  text: `In this lesson, we make requests to the proper endpoints bootstrapped by Laravel Fortify from the frontend to login and logout.`,
                },
                {
                  title: "Protect Pages with Middleware",
                  slug: "3-protect-pages-with-middleware",
                  number: 3,
                  downloadUrl:
                    "https://vueschool.io/lessons/protect-pages-with-middleware",
                  videoId: 796455051,
                  text: `In this lesson, we use middleware to redirect anonymous users away from protected pages and redirect logged in users 
                  away from the login and register pages.`,
                },
              ],
            },
          },
          {
            title: "CRUD for Posts",
            slug: "3-crud-for-posts",
            number: 3,
            lessons: {
              create: [
                {
                  title: "Create an Index Page for Posts",
                  slug: "1-create-an-index-page-for-posts",
                  number: 1,
                  downloadUrl:
                    "https://vueschool.io/lessons/intro-to-crud-with-laravel-and-vue",
                  sourceUrl:
                    "https://vueschool.io/lessons/intro-to-crud-with-laravel-and-vue",
                  videoId: 808081653,
                  text: `In this lesson, we take a look at how the Laravel backend handles requests for CRUD operations. 
                  Laravel Resource Controllers provide a standardized way of setting up API endpoints for resource CRUD.`,
                },
                {
                  title: "Add and Update Posts",
                  slug: "2-add-and-update-posts",
                  number: 2,
                  downloadUrl:
                    "https://vueschool.io/lessons/update-a-resource-with-vue-and-laravel",
                  sourceUrl:
                    "https://vueschool.io/lessons/update-a-resource-with-vue-and-laravel",
                  videoId: 810295103,
                  text: `In this lesson, we complete the c&U portion of the CRUD operations for our Vue.js + Laravel app. That is, 
                  we provide the ability to create and update posts.`,
                },
                {
                  title: "Delete Posts",
                  slug: "3-delete-posts",
                  number: 3,
                  downloadUrl:
                    "https://vueschool.io/lessons/delete-a-resource-with-vue-and-laravel",
                  videoId: 810295122,
                  text: `In this lesson, we learn how to delete resources on a Laravel backend from a Vue.js frontend.`,
                },
              ],
            },
          },
        ],
      },
      features: {
        create: [
          { title: "Buy Once and enjoy the benefits for lifetime" },
          { title: "Access to the source code for all lessons" },
          { title: "Stream or download all chapters" },
          { title: "Learn best coding practices for Laravel and Nuxt" },
          { title: "Learn to Deploy Laravel and Nuxt Projects" },
        ],
      },
    },
  });
}

async function seedPinia() {
  await prisma.course.create({
    data: {
      title: "Pinia: The Enjoyable Vue Store",
      slug: "pinia-the-enjoyable-vue-store",
      description:
        "Learn how to use Pinia for global state management in your Vue 3 applications.",
      price: 28,
      mostPopular: false,
      chapters: {
        create: [
          {
            title: "Pinia Fundamentals",
            slug: "1-pinia-fundamentals",
            number: 1,
            lessons: {
              create: [
                {
                  title: "Introduction to Pinia",
                  slug: "1-introduction-to-pinia",
                  number: 1,
                  accessCode: "Free",
                  downloadUrl:
                    "https://vueschool.io/lessons/introduction-to-pinia",
                  videoId: 667945132,
                  text: `Introduction to Pinia
                  Hello! And welcome to Pinia, The Enjoyable Vue Store! In this lesson, we introduce you to Pinia and answer a few questions like:
                  
                  What is Pinia?
                  What is state management?
                  When should I use Pinia?
                  and why should I use Pinia for state management in Vue.js?`,
                },
                {
                  title: "Define Your First Pinia Store",
                  slug: "2-define-your-first-pinia-store",
                  number: 2,
                  downloadUrl:
                    "https://vueschool.io/lessons/define-your-first-pinia-store",
                  videoId: 667945614,
                  text: `In this lesson, we define the first Pinia store for our Vue.js 3 application. By default, 
                  Pinia is modular so we’re able to break up our stores right away into topic specific files, starting with ProductStore.js 
                  where we define the application’s products in the state.`,
                },
                {
                  title: "Access State from a Pinia Store",
                  slug: "3-access-state-from-a-pinia-store",
                  number: 3,
                  accessCode: "Free",
                  downloadUrl:
                    "https://vueschool.io/lessons/access-state-from-a-pinia-store",
                  sourceUrl:
                    "https://vueschool.io/lessons/access-state-from-a-pinia-store",
                  videoId: 672452614,
                  text: `In this lesson, we learn how to access the state defined in a Pinia store. For our Vue.js powered pineapple stand, 
                  we use the products state to populate the products on the page.`,
                },
                {
                  title: "Getters in Pinia",
                  slug: "4-getters-in-pinia",
                  number: 4,
                  downloadUrl: "https://vueschool.io/lessons/getters-in-pinia",
                  sourceUrl: "https://vueschool.io/lessons/getters-in-pinia",
                  videoId: 672452614,
                  text: `In this lesson, we learn about using getters in Pinia to provide computed data based on the state of the store.

                  With this handy feature we’re able to get our Vue.js powered Pineapple Stand showing the correct item count in the cart and 
                  show a empty cart message when there are no items.`,
                },
              ],
            },
          },
          {
            title: "Advanced Pinia",
            slug: "2-advanced-pinia",
            number: 2,
            lessons: {
              create: [
                {
                  title: "Preserve State with Hot Module Replacement",
                  slug: "1-preserve-state-with-hot-module-replacement",
                  number: 1,
                  downloadUrl:
                    "https://vueschool.io/lessons/preserve-state-with-hot-module-replacement",
                  sourceUrl:
                    "https://vueschool.io/lessons/preserve-state-with-hot-module-replacement",
                  videoId: 675907666,
                  text: `In this lesson, we learn how to make HMR work for our Pinia stores. Doing so, means changes to the code can ship directly 
                  to the browser, while keeping the current state intact and making code changes available without page reloads.`,
                },
                {
                  title: "Subscribing to Actions and State",
                  slug: "2-subscribing-to-actions-and-state",
                  number: 2,
                  downloadUrl:
                    "https://vueschool.io/lessons/subscribing-to-actions",
                  sourceUrl:
                    "https://vueschool.io/lessons/subscribing-to-actions",
                  videoId: 675908518,
                  text: `In this lesson, we learn how to subscribe to Pinia actions in order to perform custom side effects on the run, 
                  completion, and/or error of an action.`,
                },
                {
                  title: "Pinia Plugins",
                  slug: "3-pinia-plugins",
                  number: 3,
                  downloadUrl: "https://vueschool.io/lessons/pinia-plugins",
                  videoId: 676044234,
                  text: `In this lesson, we create a Pinia plugin to provide reusable undo/redo functionality for our stores. 
                  With Pinia plugins you are able do a wide variety of things including:

                  Adding custom properties
                  Adding custom methods
                  Watching the store’s state with dollar sign subscribe
                  Limiting the functionality to specific stores with a custom option
                  Implement side effects like local storage
                  Add new state
                  Add new actions/methods
                  Wrap existing actions/methods`,
                },
                {
                  title: "Use Composables in the Pinia State",
                  slug: "4-using-composables-in-the-pinia-state",
                  number: 4,
                  downloadUrl:
                    "https://vueschool.io/lessons/using-composables-in-the-pinia-state",
                  sourceUrl:
                    "https://vueschool.io/lessons/using-composables-in-the-pinia-state",
                  videoId: 676033459,
                  text: `In this lesson, we combine the power of composables with the Pinia state in order to give our store persistence in local 
                  storage.`,
                },
              ],
            },
          },
        ],
      },
      features: {
        create: [
          { title: "Access to the source code for all lessons" },
          { title: "What is state management and why Pinia?" },
          { title: "Pinia installation and setup" },
          { title: "Pinia and the Composition API" },
          { title: "Pinia and the Options API" },
        ],
      },
    },
  });
}

try {
  await seedTypescript();
  await seedLaravel();
  await seedPinia();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
