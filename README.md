Software Requirements Specification 

 

for 

 

Community Vision Morse Code Website 

Version 1.1 

 

Prepared by Jordan Ho, Stephen Nguyen, Meredith Marcinko, Huy Nguyen, and Pelenalako Kamala 

 

University of Portland 

 

10 September 2020 

 

 

Table of Contents 

Table of Contents...............................................................................................................ii 

Revision History................................................................................................................ii 

Introduction.......................................................................................................................1 

Product Overview..............................................................................................................1 

2.1 Product Perspective...............................................................................................1 

2.2 Product Features....................................................................................................1 

2.3 User Classes and Characteristics...........................................................................2 

2.4 Operating Environment.........................................................................................2 

2.5 Design and Implementation Constraints...............................................................2 

2.6 User Documentation..............................................................................................2 

2.7 Assumptions and Dependencies...........................................................................2 

Functional Requirements...................................................................................................2 

3.1 Page Iteration.........................................................................................................2 

3.2 Basic Game............................................................................................................2 

Non-Functional Requirements...........................................................................................2 

4.1 Secure Database.....................................................................................................2 

4.2 Browser Support....................................................................................................3 

4.3 Maintenance Alerts................................................................................................3 

User Interface Requirements..............................................................................................3 

5.1 User Interface........................................................................................................ 3 

Sprint Schedule.................................................................................................................5 

High-Level Technical Specification.................................................................................6 

Budget...............................................................................................................................6 

Facilities............................................................................................................................6 

Ethical Consideration.......................................................................................................7 

Conclusion.......................................................................................................................7 

References........................................................................................................................8 

Revision History 

Name 

Date 

Reason For Changes 

Version 

 

 

  

Introduction 

Morse code has been used for nearly 150 years as a tool for augmentative/alternative communication (AAC) and has proven to be a successful alternative to verbal communication. In recent years, the search for ways to improve those who have impaired speech or need a replacement for speech, has found Morse code to be one of the most useful alternatives. Morse code consists of only 2 symbols, dots and dashes, in order to communicate languages letter by letter to form words, and sentences. This has enabled those with sensory or movement challenges to type with two simple buttons instead of an entire keyboard. In order to help children learn Morse code to battle their disabilities, several University of Portland students will work with Community Vision to develop a website containing several interactive games for kids ages 3-12. Community Vision is a local organization with a mission to provide a person-centered approach for quality support with those who face disabilities. These games will teach users how use Morse code to spell and communicate.  

 

This document will provide in depth details about the product being developed. We will begin by addressing an overview of our product in section 2 that will describe the general purpose, design, features, and documentation. Sections 3 and 4 will cover the functional and non-functional requirements which will explain the properties of our product. Section 5 will go over aspects of the user interface and the expected design. Section 6 will be the general sprint schedule along with the timeline of the project. Section 7 will discuss the high-level technical specifications that will be used for this project. Section 8 will cover the allocated budget and what the funding will go towards. Section 9 will mention the facilities that will be necessary to complete the project. Section 10 will cover any ethical considerations that the team feels important to address. Section 11 will conclude the document, lastly followed by Section 12 for the resources used. This document is prone to change throughout the time period of this project.  

 

Product Overview 

2.1 Product Perspective 

Children with disabilities can have a difficult time learning and communicate. This product aims to assists these children to learn and communicate using Morse code because of its simplicity. The two major components of this product are the client-side inputs and the server to handles communication between clients and the database. 

2.2 Product Features 

The main feature of this product is that the user will see a letter, a word, or a phrase on the screen and have to enter the correct sequence of Morse code. After completing each objective, the user will receive positive feedback if it was done correctly or encouraging feedback if it was incorrect. Additionally, the user will be able to have a personal account to be able to keep track of their progress. 

2.3 User Classes and Characteristics 

The intended users for this product are children with disabilities, age ranging from 3 to 12 years old, to learn the alphabet using Morse code along with any adults to help the children get started using the product. 

2.4 Operating Environment 

The operating environment for this product is any browser that supports JavaScript, and the user has access to the internet. 

2.5 Design and Implementation Constraints 

This product will be develop using JavaScript, React.js, HTML, CSS as well as a MySQL database. 

2.6 User Documentation 

Instructions on how to navigate the website will be on the webpage along with tooltips and explanation of how each game works. 

2.7 Assumptions and Dependencies 

This product depends on the user having access a web browser that has internet connection and assumes that the user can operate the keyboard.  

Functional Requirements 

3.1 Page Iteration 

The user will be able to traverse between pages to reduce memory load.  Changing pages will be done by descriptive buttons that clearly imply what page the user is moving to. 

3.2 Basic Game 

The user will type in dots, dashes, and spaces in attempt to match the displayed letter/word.  On valid input a visual and audio success response will be played for the user and a transition to the next letter/word will occur.  On invalid input a visual and audio failure response will be played to inform the user that they have failed, and the page will continue to wait for a new input. 

Non-Functional Requirements  

4.1 Secure Database 

User data must be stored in a secure database in order to minimize the risk of leaking any private and/or personal information. 

4.2 Browser Support 

The games that the team will develop should be supported on a reasonable number of different browsers and versions to allow access to as many users as possible. 

4.3 Maintenance Alerts 

Although the website that hosts this project is meant to remain online for as long as possible, there will be times when it needs to undergo maintenance.  To ensure that users’ learning experience remains smooth, the website should notify users of maintenance times in advance. 

User Interface Requirements 

5.1 User Interface 

The user interface for this project is modelled with simplicity and user friendliness in mind. 

At the home page, the user will be able to sign in or sign up for an account to track their progress and accuracy. To keep the website simple, on the home page, there will be a simple background with the screen split into two sections. One section will be a “Welcome” with the mission statement or opening remarks from Community Vision on this project. Under the welcome will be an option to sign up for an account or to login to an existing account.  The other section will display the name of the website and contain a play button to transfer the user to another page that contains the different games that the user can play. The home page will also have a Settings button and a User Profile button.  

In the Setting page, there will be different color schemes available. It will also contain switches to turn off visual and auditory responses. It will also include an option to change the wait time for the response of the correctness of their option. 

  

 

When the user choses to play a game, they will be sent to a page that contains tiles to the games that are available for the user to play. Each tile will display the name of the game and a fun background that will draw the attention of the user. The intention for the displays of the screens is to keep it simple and not be overwhelming to look at.  

 

 

To keep the website simple and calming, the interfaces for the games will have the image for the user to practice Morse Code. It will also have the buttons, or switches, for the dot and dash actions the user will take. The dot action will be triggered by the spacebar function and the dash is triggered by the enter button. When the user presses either of the keys, it will be shaded to show that they are pressing the key. When the user gets the answer correct the image with the letter will light up green. There will also be a visual effect that congratulates the user for getting the answer correct. An auditory affirming will also be triggered. When the user puts in the incorrect sequence of dots and dashes, the screen will flash red. 

 

Sprint Schedule 

Sprint 1: 

The team will complete the requirements document for itself as well as Community Vision, listing all important details about this project. 

If able, Community Vision will provide the team a website and domain in order to allow the project to be started. 

As preparation, the team will design a basic user interface as a starting point for what will be hosted on the provided website.  A database will also be created to store data that is created during testing. 

The design for games beyond the first will be made.  They will serve as stretch goals should the team complete the first one ahead of schedule or if its scale is small enough to be handled by some of the members. 

Sprint 2: 

If the team has not yet received the website domain from Community Vision, contact will be established with the client to resolve the issue. 

Unless it has already been completed, the team will implement the final design of the user interface.  If it has already been implemented, the basic functionality of the game will be made. 

Assets relating to user experience, such as the sounds for feedback, will be created. 

Sprint 3: 

Support for creating accounts should be created, with the test data being sent and stored in the previously established database.  Pages for account creation and logging in will also be created. 

User progress will be able to be tracked.  Since this is not completely concrete, the team should discuss on what constitutes a change in progress. 

When a user logs in, the difficulty of the game should automatically be set based on current progress. 

Sprint 4: 

If the first game has been fully completed at this point, the team can then focus on quality assurance testing and bug fixing. 

Additional code reviews can also be done.  The code for all relevant files should be easy to read, well documented, not be overly complex, and have a consistent style. 

      Sprint 5: 

If the first game remains unfinished at this point, the team should decide on whether additional games should be planned based on current progress.  If it is deemed that more games can be made, the team should discuss their design, as well as how many more should be developed.  Each member will then be assigned to work on a game.  Depending on the overall difficulty, games may be worked on individually (one game per person) or in groups (one game for every two members). 

Sprint 6:  

The first game should be completed and functional during this sprint.  This includes calls to the database to either send or receive data. 

Quality assurance on this game should be the main task.  The game and website should process all information correctly (i.e. all data received database queries should not send any excess information). 

Any other games should be worked on, although priority should be placed on ensuring that there is a presentable product in the form of the first game. 

Sprint 7: 

Any database queries and connections in games beyond the first should be functional.  The data should be sent in a secure manner. 

All games should be reasonably completed during this sprint.  The coding standard and format should be reviewed for consistency. 

Sprint 8: 

Any games that have been started on should be finished during this sprint.  If a game does not have a reasonable amount of progress, it should be dropped to focus on other tasks instead. 

Quality assurance tests should be made for each completed game, even if it has already been tested in previous sprints.  The intent is to look for and fix any remaining bugs. 

The website as a whole should be completed and fully functional.  A demonstration will be hosted. 

High-Level Technical Specification  

For the Community Vision Morse Code website, the team plans to use the programming languages: HTML, CSS, and JavaScript. In addition to this, the team will incorporate the React Web framework in order to enhance the UI interfaces and components. For back-end data management the team will use SQL Servers. 

Budget 

The team does not plan on using a budget. We will utilize free and open source software to create the Play Morse website. 

Facilities 

The team will not require or have any access facilities due to COVID-19 and the restrictions that are in place for in person contact. The team has only been given access to a virtual desktop provided by the Shiley school of engineering in order to complete any work that may not be able to be done on personal devices. 

Ethical Considerations 

Non-Profit Website 

As Community Vision is a non-profit organization, the website our project is hosted on must not be a source of revenue.  Therefore, it must not contain any advertisements, sponsorships, or any other form of monetization. 

Obtaining a Database 

Tracking user progress requires a database to store the data of each user.  If Community Vision desires to use a free database to lower operating costs, a free provider must be found.  While there are several options, the maintenance of the database will have to be handled by Community Vision instead of the provider (although the team will be able to maintain it for the duration of this project).  This may interfere with its intended goals. 

User Privacy and Data Security 

Since users can create an account in order to track their progress, their data will have to be stored in a database.  Depending on the type of data that is stored, users should be notified on how it is being used, due to government regulations.  Users may also be concerned about the data that will be stored.  If users do not want personal data being stored in such a way, they will be unable to use the service, hindering access to the ability to learn Morse code. 

Support for Non-Latin Alphabets 

Many languages contain a different amount of characters compared to the Latin alphabet, in addition to having an entirely different set of characters.  As a result, Morse code works differently for them.  If the team wishes to implement these other versions, it will be necessary to learn the other forms in addition to the standard one.  If the games that the team will develop are intended to help users spell in Morse code, then these other languages will have to be learned as well. 

Conclusion 

The purpose of the project of the Community Vision Learn Morse is to help children with disabilities who have a difficult time in learning how to spell and communicate, as Morse Code is a simple way to learn how to communicate with just dots and dashes. Students at the University of Portland will work with Community Vision to develop a website that contains interactive games for learning Morse Code. Users will be able to access this website with any internet browser that is able to run Javascript, as the team will be developing the website with Javascript, React.js, HTML, CSS and MySQL databases.  

As the user uses the website, the will be able to navigate it with easy access to instructions available on the website. The website itself will have multiple screens of different games that the user will be able to interact with. One of the basic games that will be implemented will be a simple matching game. The user will match either dots or dashes with the letter seen on the screen. If the user gets the answer correct, they will be able to see and hear positive feedback encouraging them to continue. The website will also contain user profiles for each individual to sign up with. Users will be able to see their progress and accuracy as they learn.  

The website will be designed to stay up for an extended period of time. Therefore, when the website needs maintenance, the user will be notified in advance.  

The team has laid out expectations for completing goals throughout the project, such as design and implementation goals. See sections 6 for sprint schedule. 

The team does not expect to use a budget as this project will be developed on a free website provided by Community Vision. The use of the faculties at the University of Portland to develop this project will not be used by the team per COVID-19 restrictions. This project is partnered with Community Vision, a non-profit organization and will not be used as a source of revenue. 

References 

“Adaptivedesigninc | Morsecode Project.” Home Page|New York|Adaptive Design Assn,  

socialmed13.wixsite.com/adaptivedesigninc/morse-code.  

“Empowerment • Independence • Possibilities.” Community Vision, 9 Jan. 2020, cvision.org/. 

“Hello Morse” | Experiments with Google.” Google, Google,  

experiments.withgoogle.com/collection/morse. 

“Use Morse Code - Android - Android Accessibility Help.” Google, Google,  

support.google.com/accessibility/android/answer/9011881. 

 

 

 

 

 

 

 

 

 
