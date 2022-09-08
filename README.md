# Dan Baskeyfield X Sorare

The project was built using create react-app with a typescript template.

## Install and run

To install the build enter the following command in the root directory: 

`yarn install` or `npm install`

Then run the command on your localmachine enter the command:

`yarn start` or `npm run start`

## Project

### GraphQL

After browsing the questions and the GraphQL documentation I realised I could get all the information required from the Cards query. I set up an Apollo client with cache memory, a Apollo Provider in the App.tsx file and set up a GetCards query to pull the data I needed to create a card.

### TypeScript

I set up a card interface which is shared between the query and the components.

### Router

I tried to keep the routing in my application quite simple, this is all within the router component. To try and structure the application I've added anything with a route to the 'Pages' directory and then broken anything reusable down into their own component.

## Questions

### Part 1

I decided to include a Cards page to handle the routing/params and make the GraphQL query request. I then have a Card component which receives the props for an individual card. The props include the card object (as in the card interface). More information about the margin and open props included in part 3.

As the majority of the card content is placed around the card with the image in the middle I decided to place the image directly on the card and absolutely place the content on top using Flex to position each of the elements around the card. I used different colours for the different card rarities but kept the design quite clean.

Improvements - before this project I didn't have a huge amount of experience with GraphQL and Apollo, because of this the loading and error handling could definitely be worked on and improved.

### Part 2

I really tried to combine part 1 and 2 to ensure it's actually one solution but suits the requirements for both, this is why I opted for the cards query rather than pulling an individual card and making multiple requests. To do this I ensured the Cards page component takes the params and seperates them by comma before feeding that array to the GetCards query.

### Part 3

This was my favourite part of the assignment as it allowed me to get creative! I decided to try and make it look more like a card by giving it the sorare background and turning it to reveal, I then added the opacity reveal to build up to excitement. I also used the canvas-confetti package to give it that something special (although it might look slightly tacky). I added the PSG colours which would also be a nice touch although I realise adding the support for every team would be a bit of a nightmare! The 'open' prop allows the animation to take place and the margin prop is to stop the back of the card having the margin included and not being the same size as the actual card.  

Improvements - I realise the assigned task was to load the GraphQL query open the button click, if I'd had more time I'd have added another component between the Reveal page and the Card component to ensure the load was done at this point.

I used CSS animations and setTimeout to apply the confetti, if I had more time I would check the main image had loaded using the onLoad image attribute before doing the reveal and then fired the confetti onTransitionEnd of the card animating.

### Part 4

The solution for this would most probably be a node build utilising the canvas package. You would construct the player cards in markup and position these (or the images) onto the canvas, convert the canvas to a buffer and then write the buffer to a file.
