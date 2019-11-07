# Shoewear
Get your pair of shoes

# Project Overview

This is a shoe company where we sell one type of sneaker with different color and sizes.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for attending squad standup at the begining and end of the day.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Preparation and database in the backend | In progress ...
|Day 2| CRUD Queries from frontend / frontend component creation | Incomplete
|Day 3| All components should be working / debugging / CSS | Incomplete
|Day 4| Styling | Incomplete
|Day 5| Debug / MVP complete / Post MVP  | Incomplete
|Day 6| Post MVP / Deployment | Incomplete
|Day 7| Present | Incomplete


## Project Description

This website allow users to shop, choosing shoes they like in our stock. they can view individual shoes for more info and buy if they sign in as a customer. No credit card but only cash after the shoes is delivered to the customer address.

## Wireframes

[Wireframes](https://git.generalassemb.ly/younhash/Shoewear/tree/master/project-prep-images/wireframe.jpeg)

## Priority Matrix

[Prioty Matrix](https://git.generalassemb.ly/younhash/Shoewear/tree/master/project-prep-images/proiority-matrix.jpeg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Database creation with 3 seeded tables 
- Endpoint working from the backend
- Render data from api
- CRUD queries code working at the frontend
- All nine components created and working
- Style
- Deployment

#### PostMVP 

- more style
- Search input

## Architectural Design

[Architectural Design](https://git.generalassemb.ly/younhash/Shoewear/tree/master/project-prep-images/component-archit.jpeg)

## ERD

https://www.lucidchart.com/documents/view/f783f92e-a953-448b-86a1-647353e57b72/0_0

## UI Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description | 
| --- | :---: |
| App | This will render the header, main, footer | 
| Header | This renders logo, hero-image, admin login, customer login, welcoming statement, search input | 
| Main | This renders all components other than header and footer. Each or more component at specific time | 
| AllProducts | This renders all products | 
| ShowProduct | This renders clicked products with info | 
| BuyProduct | This renders ProductReceipt compo. after create and send to order table in the db and deleted product | 
| ProductReceipt | This renders message that product will be ship to customer address | 
| CustomerLogin | This renders page where customer can just sign up or sign in and redirect to product page |
| AdminLogin | This renders page where admin can see orders to date | 
| Footer | This will render credits, year, location | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Database creation with 3 seeded tables  | H | 8hrs| 0hrs |
| Endpoint working from the backend | H | 3hrs| 0hrs |
| Endpoint working on the frontend | H | 3hrs| 0hrs |
| Queries code working at the frontend | H | 8hrs| 0hrs |
| All nine components created and working | H | 3hrs| 0hrs |
| Debuging | H | 9hrs| 0hrs |
| Style | H | 8hrs| 0hrs |
| Search input | L | 2hrs| 0hrs |
| Deployment | H | 2hrs| 0hrs |
| Total | H | 41hrs| 0hrs | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries

| Library | What it Does | 
| --- | :---: |  
| Bootstrap | I may use it for styling | 
| unspalash | I may use it for images | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
