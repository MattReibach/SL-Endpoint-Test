# SL-Endpoint-Test
A simple app to test SocketLabs Notification API and Inbound Parse API HTTP endpoints.  More information about creating your endpoint can be found in SocketLabs' [API Documentation](http://www.socketlabs.com/api-reference/).

##Description##
This app is built on GitHub's [Electron](http://electron.atom.io/) which allows you to build desktop applications using JavaScript, HTML, and CSS.

The basic app was bootstrapped using the [Electron Quick Start Tutorial](http://electron.atom.io/docs/tutorial/quick-start/).  The app also utilizes [Photon](http://photonkit.com/) which is a nice CSS library that allows you to easily style Electron apps to look like native OSX applications.

##Usage##
Download or clone the repository, then open a command line or terminal and navigate to the repository folder.  Install the required dependencies with the `npm install` command.  Once the dependencies are installed, you can start the application using the `npm start` command or alternately `electron .` in the command line.

To use the application, enter the URL you are trying to test.  The application can be used to test an endpoint that is being run locally, or one that has been already deployed.  Before running the test, please ensure that there is nothing preventing a connection from your local environment to your endpoint URL, such as a firewall.

Additional options include the type of notification to test and the number of test notifications to send.  Once you have filled in the required fields, you can launch the test by clicking the "POST" button.  When this is finished, you can view the results in a separate window by clicking the "View Results" button.

##License##
The MIT License (MIT)

Copyright (c) 2016 Matt Reibach

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
