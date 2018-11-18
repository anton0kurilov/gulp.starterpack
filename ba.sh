#!/bin/bash
echo "======================"
echo "  INITIALIZATION THE PROJECT..."
echo "======================"
npm init
echo "======================"
echo "  INSTALLING GULP..."
echo "======================"
npm install gulp@next --save-dev
echo "==============================="
echo "  INSTALLING GULP PACKAGES..."
echo "==============================="
npm install gulp-sass --save-dev
npm install gulp-clean-css --save-dev
npm install gulp-autoprefixer --save-dev
npm install del --save-dev
npm install gulp-uglifyjs --save-dev
npm install gulp-util --save-dev
npm install vinyl-ftp --save-dev






