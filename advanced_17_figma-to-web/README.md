# Converting a Figma Design to a Real Website

## Introduction

As a frontend developer, your job is to continuously communicate with UX/UI designers and convert their designs into actual websites.

It's the designer's job to come up with a design of the website based on the hours of research, communication with the client, and sometimes usability testing.

The frontend developer then takes that design and produces a website that satisfies the design requirements. During that process, the developer is working together with the designer to discuss the design and resolve any misunderstandings that come up. For example, something might take a longer time to develop, so it might be removed from the design so to not waste time.

Designers have their own tools in which they develop their designs. One of these is [Figma](https://www.figma.com/) among others like Adobe XD and Sketch.

Check out the Figma design we are going to implement at the [following link](https://www.figma.com/file/PXUDi26BTEdlgyE6WrXFJf/Homepage-Tutorial?node-id=0%3A1).

Adapted from: [Design A Modern Homepage (Figma to Real Website)](https://www.youtube.com/playlist?list=PL0-e1OMq5RP4SspVeenLKzldN_IZhZKSy)

## How to structure the web site?

Let's take a look at the design. What groups of content can we identify:

- The navigation
  - The logo
  - The navigation links
    - blog, contact, about
    - The search button
    - The search popup
- The main content
  - The main part
    - The left part
      - Hi, I'm Darlene
      - I design, ...
      - Contact me button
    - The picture
      - The front picture
      - The green back div
  - Social icons

Let's convert this hierarchy to HTML

## Getting the images from Figma

Just select the image element and, in the right hand side of the screen, select the "Export Photo" option in the Design section

## Adding CSS

By selecting any element from a Figma design we can inspect its design and positioning relative to other elements.

For example, let's get the CSS of the "Hi, I'm Darlene" header element

## Adding JS

We add JS code for every behaviour that is not possible to achieve with HTML/CSS.

I this website, the only behaviour of that sort is the seach box.

Of course, web applications have loads of additional JS to support communication with servers, data manipulation logic, etc. + all the different JS frameworks like (React.js, Vue.js, Angular, ...).
