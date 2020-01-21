ReactJS: SimpleToast for MPA
=================
"SimpleToast" is sample code of a very basic toast notification component for React.

A toast is aka a snackbar... a temporary notification to the user after some action (such as a    
button click). A use case is UI feedback; i.e. show response (like "Item Added") after button   
click. This is sample code for an toast component in an MPA.

This repo is for Web built using ```create-react-app``` (see [docs](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)). It can be used as     
starter-kit for the MPA or combined with an SPA monorepo, like [SimpleApp](https://github.com/ottograjeda/public_ticket.528) for   
Mobile use on iOS & Android.


Installation
============
*  Get the repo
* From root directory, do ```yarn```   
**Required** Basic ReactJS knowledge. If repo user needs review, please read [this](https://www.taniarascia.com/getting-started-with-react/) 

Run
===

For web, from the root directory, do

* ```node_modules/.bin/webpack -p --progress```
* ```node_modules/.bin/webpack-dev-server --content-base public/ --config ./webpack.config.js --inline --hot --colors```
* Manually open a browser to localhost:8080 to see webapp 

Demo & Animated GIFs
===========
* [Live Demo](https://t-510-react.web.app/) at [Firebase Hosting](https://firebase.google.com/docs/hosting) 
* Google PageSpeed Analysis ([desktop](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ft-510-react.web.app%2F&tab=desktop) | [mobile](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ft-510-react.web.app%2F))  
* SimpleToast on iOS    
![Animated GIF - Webapp on iOS](https://raw.githubusercontent.com/ottograjeda/public_ticket.510/master/_docs/ezgif-720_ios.gif)
* SimpleToast on Android    
![Animated GIF - Webapp on Android](https://raw.githubusercontent.com/ottograjeda/public_ticket.510/master/_docs/ezgif-720_android.gif)
* SimpleToast Webapp    
![Animated GIF - Webapp on Desktop](https://raw.githubusercontent.com/ottograjeda/public_ticket.510/master/_docs/ezgif-720_web.gif)

Notes - Development
===========
* CSS is minimal and [MUI](https://www.muicss.com/)    
* [ServiceWorker](https://levelup.gitconnected.com/a-guide-to-service-workers-in-react-js-82aec1d6a22d) (for PWA) **not** used
* Component is statefull ; does not use Redux
* [Assets](https://github.com/ottograjeda/public_ticket.538/tree/master/app/assets) (css, images, etc.) are copied during build process   
* Custom components for [Header](https://github.com/ottograjeda/public_ticket.510/tree/master/app/components/Header) & [Footer](https://github.com/ottograjeda/public_ticket.510/tree/master/app/components/Footer) included. Can be refactored as needed

Inspiration
===========
* [Think Statefully](https://daveceddia.com/thinking-statefully/)
* [Learning React? Start Small](https://daveceddia.com/learning-react-start-small/) 
* [Custom notification component from scratch](https://medium.com/javascript-in-plain-english/react-custom-toast-notification-component-from-scratch-adccd1c452b8)
* [When to use callback function of setState in React](https://medium.com/better-programming/when-to-use-callback-function-of-setstate-in-react-37fff67e5a6c)
