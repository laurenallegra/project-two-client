# Project 2: Full-Stack Application

Live application: https://chrxtina.github.io/paisel-client/

Back-end repository: https://github.com/chrxtina/paisel-api

## About

GoYoga is a very simple app that allows users to view a simple table of yoga
poses--with English and Sanskrit names--and create a list of favorite poses.
After signing-up and logging-in, a user can add and delete poses to their list;
change a pose in their list (by updating what is currently called a user-pose);
delete a pose from the list; and view the list of all their current favorite poses.

## Features

- User Authentication: sign-up, sign-in, sign-out, and change password
- Basic CRUD actions: create, edit, view, and delete poses on their "My Favorite
Poses" list, aka "user-poses"

## Technologies Used

- Front-end: HTML/SCSS/Sass, Javascript, Bootstrap, AJAX, jQuery, Handlebars.js
- Back-end: Ruby on Rails

## Planning

- Created wireframes and user stories
- Collected resources like browser and API templates
- Discussed approach with instructors and peers

## Development Process

After completing a basic installation and setup of both the front and back-end
templates, I set up user authentication. I then spent a couple of days making
ERDs, writing user-stories, and sketching wireframes. Once I had my table structure
organized, I scaffolded both "poses" and "user-poses," which was the name of the
join table of users and poses (I used this naming convention for the sake of clarity
throughout development, but tried to use more semantic naming, like "my favorite
poses", in the app's UI, to make it more clear what a "user-pose" actually is--
i.e., a pose that belongs to a user). Throughout development, I switched to
using OpenRead Controllers before setting things back to Protected Controllers,
so that I could view users, poses, and user_poses in my database. I tested all of my
API endpoints by creating scripts and using curl requests. Once I had ascertained
that all of the CRUD functionality the front-end of my app would need was in fact
working, I moved to front-end development. I added a static pose table in my HTML
(I had initially wanted to use a CSV in my back-end for poses, but decided on a
simpler methodology, adding ten poses to my `seeds.rb` file to start with.) I added
the necessary forms and buttons for basic CRUD actions for my user_poses table, and
tested it repeatedly. I continued to work on my front end, focusing on a clean and simple design for my authentication. I would like to have spent more time styling other views of my
app, and will come back to work on this later on.


## Unsolved Problems and Next Steps

- Not responsive / mobile-friendly
- Code not completely DRY
- Styling/CSS of poses and user_poses needs work
- Would like to add a feature to allow users to create custom sequences of pose-forms
- Add messsages about success or failure of CRUD acions, i.e., "<POSE> has just
been added to your Favorites List!"
- Use CSV instead of poses in `seeds.rb`
- Add images and descriptions of poses
- Add tags and make poses searchable

## Wireframes, User Stories, Entity Relationship Diagrams, and Add'l Prep/Research

- https://www.evernote.com/l/AAR2K0qOdbxIXZuuDnj84TCutDV4ho84E98
