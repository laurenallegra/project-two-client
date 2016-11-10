# Capstone Project: Full-Stack Application

Live application: https://laurenallegra.github.io/project-two-client

Back-end repository: https://github.com/laurenallegra/project-two-rails-api

## About

GoYoga is a simple app that allows users to create a table of their favorite
yoga poses. This table acts as a sequence, and can be shuffled to create a
random sequence of poses for the yoga practitioner who is up for a challenge and
a surprise! After signing up and logging in, a user will be able to see a table
of common yoga poses--labeled with both their English and Sanskrit names--and
create a table of their favorite poses. Users can add and delete poses to/from
their "Favorite Poses" table, and change a pose in their table (by updating
what is called a "user-pose"). And for fun, a user can click the "shuffle"
button to generate a random sequence of their favorite poses.

## Features

- User Authentication: sign-up, sign-in, sign-out, and change password
- Basic CRUD actions: create, edit, view, and delete poses on the "My
Favorite Poses" table (aka the join table "user-poses")
- Auto-generate random sequences of Favorite Poses by clicking a shuffle button

## Technologies Used

- Front-end: HTML, SCSS/Sass, Javascript, Bootstrap, AJAX, jQuery,
Handlebars.js, Underscore.js
- Back-end: Ruby on Rails

## Planning

- Created wireframes and user stories
- Organized resources in Evernote, with links to important repos like
browser and API templates, deployment guides, and relevant issues
- Discussed approach with instructors and peers

## Development Process

After completing a basic installation and setup of both the front and back-end
templates, I set up user authentication. I then spent a couple of days making
ERDs, writing user-stories, and sketching wireframes. Once I had my table structure
organized, I scaffolded both "poses" and "user-poses," the latter of which was
the name of the join table of users and poses (I used this naming convention
for the sake of clarity throughout development, but tried to use more semantic
naming, like "my favorite poses", in the app's UI, to make it more clear what a
"user-pose" actually is--i.e., a pose that belongs to a user).

Throughout development, I switched to using OpenRead Controllers before
setting things back to Protected Controllers, so that I could view users, poses,
and user_poses I had created in my database. I tested all of my API endpoints
by creating scripts and using curl requests. Once I had ascertained
that all of the CRUD functionality the front-end of my app would need was in fact
working, I moved to front-end development. I added a static pose table in my HTML
(I had initially wanted to use a CSV in my back-end for poses, but decided on a
simpler methodology, adding ten poses to my `seeds.rb` file to start with.) I
added the necessary forms and buttons for basic CRUD actions for my
user_poses table, and tested it repeatedly. I continued to work on my front end,
focusing on a clean and simple design for my authentication. I then moved my
focus to rendering and styling the `user_poses` table that was being rendered
in my handlebars template.

I decided to make my app a bit more fun by allowing users to create a random
sequence of their favorite yoga poses, so I created a function and button to
shuffle the array of favorited poses. I think this feature adds a fun twist to
my app, and as a yoga practitioner, I very much like the idea of not having to
create my own sequence of poses, so the shuffle function is very handy, indeed!

Lastly, I would like to continue styling my app, as CSS and UI are things
I really enjoy focusing on as a front-end developer. The mix of creativity
and functionality that styling and UI require a developer to think about are
a great challenge, in my opinion, and at the heart of great development.

## Unsolved Problems and Next Steps

- Not entirely responsive / mobile-friendly
- Code not completely DRY
- Would like to add a feature to allow users to more easily create custom
sequences of favorite poses and not just randomize them
- Add messsages about success or failure of CRUD acions, i.e., "<POSE> has just
been added to your Favorites List!"
- Use CSV instead of poses in `seeds.rb` and include more poses
- Add images and descriptions of poses
- Add tags and make poses searchable by feature, such as "seated poses" or
"hamstring stretch"

## Wireframes, User Stories, Entity Relationship Diagrams, and Add'l Prep/Research

- https://www.evernote.com/l/AAS03wzji-tPrrnqyy6_MzQ-2KOrXxULXOA

## Screenshots of App

Landing page:
![Imgur](http://i.imgur.com/yLntAT4.png)

Interactive user page:
![Imgur](http://i.imgur.com/Xznh61C.png)
