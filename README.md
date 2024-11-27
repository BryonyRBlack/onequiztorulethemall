# One Quiz To Rule Them All
## Overview
_One Quiz to Rule Them All_ is a quiz based on the works of J. R. Tolkein. It has different settings, giving the option of questions based on _The Hobbit_, _The Lord of the Rings_, and _Rings of Power_. 

![Image of website on different screen sizes](/assets/images/one-quiz-responsive-img.png)

### Live website.
The live website can be located at [here](https://bryonyrblack.github.io/onequiztorulethemall/).

### Git Repository
The Git repository can be located at [here](https://github.com/BryonyRBlack/onequiztorulethemall).

## User Experience
The primary user purpose for this website is a quiz that will test the knowledge of the user based on three different works in the World of Tolkein. These are
* The Hobbit
* The Lord of the Rings
* The Rings of Power
This is to give a different experience for whichever topic the user feels more comfortable with.
The quiz will show the number of correct scores throughout, as well as the amount the user got correct at the end of the quiz.

## Features
![image of the header](/assets/images/header-img-for-readme.png)
The header is on a plain bakcground, which matches the font later in the quiz. It contains the name of the quiz, and the Lord of the Rings logo from the films. The font used throughout the page is based on the Title font from the film franchise.

![Small image of the map used as the background](/assets/images/small-image-of-lord-of-the-rings-map-for-readme.png)
For the background, I used the map from the Lord of the Rings, which has familiar names for fans of the franchise. The colour then use in the heading, and the back of the buttons was found within in the map using [imagecoverpicker](https://imagecolorpicker.com/)

![Screenshot of the landing page showing the rules and quiz difficulty settings](/assets/images/landing-page-for-readme.png)
When first opened, there is the rules section, and then the options for which questions the user wants to use. The rules are in paler colour to stand out. These buttons invert colours when highlighted so the user can see what they are hovering over. 

![Screenshot of the quiz page](/assets/images/quiz-for-readme.png)
The colour scheme matches the landing page. The question is in a pale grey, with the buttons matching the quiz options setting. Once correct, if the answer is correct the background turns green. If the answer is incorrect, it turns red while the correct answer shows a green background. Once an answer has been selected, the next button becomes visable, which is rounded to stand out against them. Underneath the buttons, the currect score is shown.

![Screenshot of ending page](/assets/images/quiz-end-for-readme.png)
Once all questions have been answered, a page showing the final score and the option to play again is displayed. The font colour, and the styling matches the previous settings.

## Features left to implement
In future updates, I would like to add more quiz options, such as The Simalarian, or The Unfinished Tales. 

## Testing
I have run this on Google Chrome and Edge, and am satisfied this runs on both browers. I have tried this on different screen sizes in Goggle Developer Tools and happy this showed as expected. 

## Validation
* No HTML errors returned when passed through [validator.w3](https://validator.w3.org/nu/)
* No CSS errors returned when passed through [Jigsaw](https://jigsaw.w3.org/css-validator/)
* No JavaScript errors returned when passed through [JSHint](https://jshint.com/)
  * The following metrics were returned:
  * There are 11 functions in this file.
  * Function with the largest signature take 1 arguments, while the median is 0.
  * Largest function has 9 statements in it, while the median is 4.
  * The most complex function has a cyclomatic complexity value of 4 while the median is 2.