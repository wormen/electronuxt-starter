# electronuxt-starter
Create an Electron app that serves a Nuxt.js app

## Before you get too excited
This has only been lightly tested on Linux and Mac. It almost certainly doesn't work on Windows yet(But it will)! I've also only tried it with Node v7.5.0 so far.

This is pretty much a prototype at the moment. It starts a server running inside of Electron. That server serves a Vue.js app generated by [Nuxt Express Starter](https://github.com/nuxt/express).

It's not currently very useful for the following reasons
- It's hardwired to "production" mode, meaning there's no hot-loading
- There's no rebuild command yet. Delete the nuxt/.nuxt folder and rerun `npm start` to see changes
- It was just born a few hours ago and everybody knows newborns aren't very useful, but...

## If you REALLY want to try it out...

**Step 1 - The secret codes**
```
git clone https://github.com/electronuxt/electronuxt-starter
cd electronuxt-starter
npm install
npm install -g vue-cli
vue init nuxt/express nuxt && npm start
```
*Hint*: with a little luck(and 4 presses of the Enter key) you can copy/paste all the commands above at once into a terminal to get up and running with the quickness

**Step 2 - The waiting game**

Now watch the terminal window(NOT Electron) and wait exactly between a little while and a long time, at which point things will stop happening.

*Optional(Expert Mode)*: Don't watch the terminal. Go enjoy yourself and come back to see that it is obviously finished.

**Step 3 - The Nuxt part**

Slide on over to the Electron window and enjoy looking at your sexy new electronuxt app! I hope you like it, because like explained above, it's very hard to change. But this isn't forever! Check back over the next few days and you should notice some major changes!

## Credits

- [@Atinux](https://github.com/Atinux) and [@alexchopin](https://github.com/alexchopin) for creating [Nuxt.js](https://github.com/nuxt/nuxt.js) and the [Nuxt Express Starter](https://github.com/nuxt/express) I am currently using with this project!
- [@wormen](https://github.com/wormen) For giving me the idea for this repo, and helping with guidance on the upcoming Asar version

## tl;sr(too long;still read)

As a reward for reading the whole README, I'll let you in on a secret. Legend has it those who star this repo will have good fortune all of their days(and even a few of their nights)!
