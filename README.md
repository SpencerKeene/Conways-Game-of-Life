<a name="top"/>

# Conways-Game-of-Life
A simulation of John Conway's Game of Life using Vanilla JavaScript.

## Table of Contents
- [What is John Conway's Game of Life?](#What-is-John-Conways-Game-of-Life?)
  - [What are the rules?](#What-are-the-rules?)
  - [Interesting patterns](#Interesting-patterns-)
- [About the project](#About-the-project-)
  - [Problems with the Game of Life](#Problems-with-the-Game-of-Life-)
  - [What is to come?](#What-is-to-come?)

<a name="What-is-John-Conways-Game-of-Life?"/>

-----
## What is John Conway's Game of Life?
The **Game of Life**, created by the mathematician **John Conway**, is a form of _cellular automaton_. In simpler terms, it is a _grid_ consisting of _cells_ that can either be _on_ or _off_. Each cell's state is determined by its _neighbours_. The grid moves on to the next _generation_ by recalculating the state of every cell. This is usually calculated to its entirety before changing the state of any cell

In the Game of Life, the state of a cell is known as _alive_ or _dead_, rather than on or off, and each cell has a total of eight neighbours, those neighbours are its surrounding cells. Normally, the Game of Life is played on an infinite grid, but in my simulation it is played on a finite grid. The option for the grid to loop around to its opposite side is also being explored.

<a name="What-are-the-rules?"/>

### What are the rules?
As previously stated, each cell has one of two state, alive or dead. Each cell also interacts with its eight neighbours, the cells surrounding it (see figure 1).

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/CA-Moore.svg/200px-CA-Moore.svg.png" alt="Cell neighbours" width="100"/>

>Figure 1: Cell Neighbours (Cellular automaton, Wikipedia.org 2021)

The state of a cell in the next generation is determined by the state of the cell's neighbours in the current generation. Only live neighbours are counted, not dead ones. The rules for a cell's state go as follows:

1. A live cell with exactly two or three neighbours stays alive.
2. A live cell with fewer than two neighbours or greater than three neighbours dies
3. A dead cell with exactly three neighbours comes to life
4. A dead cell with fewer or greater than three neighbours stays dead

<a name="Interesting-patterns-"/>

### Interesting patterns
Based on these rules, there are many interesting patterns in the Game of Life. These patterns are categorized into three major types:

1. **Still life:** These patterns stay perfectly still, appearing exactly the same between generations. (see figure 2)
2. **Oscillator:** These patterns oscillate, or move back and forth, between several different pictures. They appear to be in a loop through multiple generations. (see figure 3)
3. **Spaceships:** These patterns are similar to oscillators except instead of staying in the same place, they move throughout the grid. (see figure 4)

![Beehive](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/98px-Game_of_life_beehive.svg.png)

>Figure 2: Beehive (Conway's Game of Life, Wikipedia.org 2021)

![Blinker](https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif)

>Figure 3: Blinker (Conway's Game of Life, Wikipedia.org 2021)

![Glider](https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif)

>Figure 4: Glider (Conway's Game of Life, Wikipedia.org 2021)

These patterns once created on a board will last forever unless interfered with. However, there are some variations of these patterns that when coliding with another specific pattern, will consume the other pattern and return to its initial state. These patterns are called **Eaters**. (see figure 5)

![Eater 5 eating a glider](https://www.conwaylife.com/w/images/7/79/Eater5_small.gif)

>Figure 5: Eater 5 eating a Glider (Eater, ConwayLife.com 2021)

Some patterns can also create other patterns. These patterns are typically called **Guns**. (see figure 6)

![Gosper's Glider Gun](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

>Figure 6: Gosper's Glider Gun (Conway's Game of Life, Wikipedia.org 2021)

With an infinite grid, there are infinite possibilities. Many people have been able to come up with some outstanding creations. One of the best so far is [the Game of Life within the Game of Life](https://youtu.be/xP5-iIeKXE8) (Phillip Bradbury, Life in Life, YouTube.com 2021).

<div align="right">
  <a href="#top">Back to top</a>
</div>

<a name="About-the-project-"/>

-----
## About the project
### Why I started?
Recently I decided that I wanted to learn React. Before doing that however, I decided it would likely be best for me to learn Vanilla JavaScript, since React is a JavaScript framework. I started taking a LinkedIn Learning course for JavaScript basics and it was wonderful, but I wanted a project that I could play with and learn the language hands-on. I started thinking of ideas and I remembered a YouTube video I saw years ago about John Conway's Game of Life and how interesting I thought it was. With how visual and interactive the Game of Life can be, I thought this was a perfect project so I got started immediately. Soon I realized there are a lot of problems that came along with the Game of Life, but these only interest me more to find optomized solutions.

<a name="Problems-with-the-Game-of-Life-"/>

### Problems with the Game of Life
The Game of Life is extremely complex. With an infinite grid, there are many time & space complexity problems to come. To help minimize those problems I have decided to make the board finite and bound its edges to the border of the window. I have also explored the option of making the edges loop around to the opposite side and I intend to have this be a feature the user can opt to use in the future.

Although a finite board is much better than an infinite board for computing power, the problems of time complexity still exist. Tests have proved that the current iteration of the game can become very slow if the number of cells becomes too large. That means that a new algorithm for computing the next generation and updating the appearance of the grid must be found.

I do also see the possibility of space complexity to become an issue if the game runs for an extended period of time. Although I don't plan on using it for such purpose nor do I see anyone else doing so, it is still a good idea to ensure that possibility is covered.

<a name="What-is-to-come?"/>

### What is to come?
As stated, a better algorithm for computing the next generation of the board must be found. I plan to soon implement a faster algorithm that searches only those cells which are alive or have neighbours. This should have a great impact on performance when not many cells are alive, which is usually the case. I have also entertained the idea of exploring other algorithms which can predict further outcomes of patterns beyond just the next generation. This type of algorithm seems to be the fastest but works best on predictable patterns, not random ones, and is extremely complex so I am holding that off for now.

Likewise, a better algorithm or data structure needs to be found for the appearance of the board. I plan to soon try out an algorithm that updates only the cells which have changed and not every cell so this should show improvements. With some playing around of how each cell is displayed I found my current implementation to be extremely slow so I will be looking for better options.

Interactivity is a big concern of mine, and currently there really isn't any. I plan to fix this by providing the user with a toolbar where they can perform differnt actions such as pause/play, progress forwards/backwards, and restart. I also want the user to have the ability to draw on the board to make up their own designs or test out ones they have found on the web. Finally, I want the user to have a list of options for the visuals of the game such as dark/light theme and showing gridlines. I'm always open to suggestions about other features as well, the goal is for the user to enjoy using the website.

<div align="right">
  <a href="#top">Back to top</a>
</div>
