# Final Project - My Movie
## COT4808 - Full Stack Web Development
### By Group 4

Sean Murphy
Dien tran
Matthew Cowell
Cadell Julien

#### Summary

In this project we created a website that will allow a user to create lists and search for movies. when searching for a movie the user can take the mobie ID and add it to any of their lists.
the user will be given an ID for the list that they create.
then after searchign for a movie they can take the movie id that is displayed along with their list id in order to add that movie to their lists.
aditionally the user can take the movie id to delete that movie from the list or can add additional movies to the list.

All lists are stored on MongoDB 

![](https://github.com/cop4808-spring-2023-fullstack-web/final-project-group4/blob/main/views/pictures/homePage.png)


#### Details about the project:
For this project we wanted to apply our knowledge of full Stack and create a website
using TheMovieDB api. The functions from TheMovieDB that we wanted to focus on
were creating a list of movies, and viewing an existing list of movies from a user’s
account. As well as adding and removing movies from a list that our site’s user has
created. Additionally, we wanted to incorporate firebase authentication to handle the
logging in of a user using both Google and plain email and password.
#### Design:
The project is a movie and TV show search website where users can search for any movie or TV show through a search bar and select the media type in the dropdown menu. After searching, users can create a list and add movies or TV shows to it by logging in or signing up. Login works with both Google and email/password but the list-related features are not yet locked behind authentication. Once logged in, users can create a new list and set it to public or private, add or delete movies/TV shows to/from the list using the IDs shown by the search tool, and view all existing lists they've created. The website has a relatively simple design.
#### Hurdles:
Some of the hurdles that our group had to overcome throughout the duration of this
project included adequately managing time between different classes, a major mistake in
which we used the original movie db’s api instead of our own in order to create and
manage the lists, inability to lock features behind the firebase authentication we created
and having to remake a large portion of the to fix the aforementioned mistake involving
incorrectly using out api. Another hurdle was deployment as none of us completely
succeeded in deploying our previous homework assignment (HW 10) to Heroku which
now poses an issue for deploying our current project.

#### Limitations:
A few of the limitations that our group faced was massive pressure that stemmed from
both the time constraints of the assignment due date as well as finals and projects that had
converging due dates and deadlines in a similarly close time frame. This prevented us
from being able to implement our original design to the best of our ability as well as
finetune a multitude of bugs and other errors that appeared along the way.

#### What’s next:
As for right now our goal is to finalize getting all of the features required in the
assignment rubric into our project such as a working login/logout and a proper
connection with the mongo database. While we are aiming to receive a satisfactory final
grade right now, we as a group agreed that we would love to make the site more tailored
to the user’s experience by streamlining the features we planned out as well as altering
the format and functionality of how it’s presented.

#### Conclusion:
This was an all around great experience for introducing us to fullstack backends,
frontends and deployment. We learned so much while going through this assignment and
researching our bugs and how to implement some of the features we have present on our
website. In the near future we’d love to further explore what we learned regarding not
only this api but other ones that pique our interest.