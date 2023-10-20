# NRK TV Program Pulse

## About

NRK TV Program Pulse is a web application made in NextJS, a React framework. The given task has already been described in the earlier [README](../README.md).

## Clone the Project

To clone the project just type:

```
git clone https://github.com/sandviklee/NRKCase.git
```

## How to run the Project

Firstly go into the correct directory:

```
cd nrk-program-pulse/
```

_NB! Check which directory you are in when you do this._

To run the project you must first have NodeJS. **Install NodeJS [here](https://nodejs.org/en/download)**

After installing NodeJS, you need to install all the packages:

```
npm install
```

After you have done that run:

```
npm run dev
```

And the project should look like this:

<img src="https://i.gyazo.com/461b433b1513c16ab519460ebdabda69.jpg">

#### Enjoy!

## How The App Works

The first page that welcomes you is the home page. At this page you get greeted with a navbar, a footer, a carousel of the top 3 most popular NRK TV series (by overall views in the year 2018).

When you click one of TV shows you get forwarded to the next page, series page. This page shows information and stats about the given series. You get both the overall views of 2018, and a button (the date) which you can use to change the date of the views on the left.

## Project Specifications and Comments

As I said earlier, the project is made in NextJS. Basically react, but with better page navigation. I chose this because ease of use and my experience with it.

All the components in this project is self made from ground up. Some of them are the Calendar, Searchbox and Carousel. EXCEPT! React-icons, which I made my own component out of (Icons component).

I use TailwindCSS to style the project, this is also because ease of use. I have alot of experience with regular CSS too, but chose Tailwind this time.

I made some scripts to make the data set easier to use in the project. In the early stages of development I wanted to make a backend for the project, but chose not to because of time constraints.

I really wanted to use the NRKTV API to get the images and information about the given series in the data set. I couldn't because I had CORS problems (localhost wasn't allowed), so I made myself some data sets with needed information (all under /data)

I quickly made the design myself, you can see the wished upon features that I didn't have time to implement [here](https://www.figma.com/file/5t15zoVkBHcSb7P913a8jx/NRK-Case?type=design&node-id=17%3A736&mode=design&t=DiLgovvZS8svI8lr-1)
