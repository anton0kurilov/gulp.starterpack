# gulp.starterpack
Quick start boilerplate for a Gulp environment
## Requirements
* [npm](https://github.com/npm/cli)
## Downloads
gulpfile.js: 
```
curl -O https://raw.githubusercontent.com/anton0kurilov/gulp.starterpack/master/gulpfile.js
```
ba.sh:
```
curl -O https://raw.githubusercontent.com/anton0kurilov/gulp.starterpack/master/ba.sh
```
## Install
1. Download all files
2. Enter ```./ba.sh``` in the terminal
3. Enjoy!
## Structure of the project
```
/
├── app/
|   ├── backend/
|   |   ├── *.*
|   ├── config/
|   |   └── ftpdata.json
|   ├── fonts/
|   |   ├── *.ttf
|   |   └── *.eot
|   ├── img/
|   |   ├── *.png 
|   |   └── *.jpg
|   ├── libs/
|   |   ├── *.*
|   ├── scss/
|   │   └── *.scss
|   ├── js/
|   |   └── *.js
|   ├── *.index.html
└── public_html/    // PRODUCTION DIRECTORY
```
## Basic commands
```gulp``` — Starting Gulp Watch task

```gulp build``` — Building the project

```gulp deploy``` — Deploying your project to an FTP server