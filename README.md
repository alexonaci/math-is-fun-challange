
# User story

* As a user I would like to insert values inside the input fields from the web page and get the results in the place where the parantheses are with respect to the selected sign so that I can use the tool as a calculator

# Requirements

* Display the result of the operations and add validation to the input forms without changing the HTML file
* The inserted text should be only numbers even if the input is of type text - make a validation from javascript
* The result text should be inserted in the DOM where the Result div is
* Create error messages if the operation fails for the following cases: result not a number, division by 0, operands are not numbers. Display the error message in the Error div


## What is a coding style guide?
A coding style guide is a set of rules or guidelines used when writing the source code for a computer program.

Have a look on the airbnb javascript styleguide and try to write the code following these conventions: https://github.com/airbnb/javascript.

## What is a user story?
User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. They typically follow a simple template:

As a < type of user >, I want < some goal > so that < some reason >.

# Fork and Pull Request

### 1. Fork the project to your github account
Press the 'Fork' button in the upper right corner, a copy of the repo will then be made and you will be redirected to it.
You can verify that by looking in the upper left corner, you should see something like "YOUR_ACCOUNT_NAME/carrot-store-challenge".

### 2. Clone the project locally
You can press the green "Clone or download" button and copy the link, then use 'git clone LINK_HERE' command to get a local copy.

### 3. (Optional) Make a branch with your name
It's good practice to not work directly on the master branch, you can make a branch with your own name and work there or even make 
different branches for every feature you make if you feel brave.
 
You can see the local/remote branches that exists typing "git branch -a" in your terminal/bash or from the "Branch :" dropdown menu 
on the project's github page.

### 4. Make changes and commit
It's encouraged and good practice to have small commits (atomics), so it's easier to track/revert changes in the code when necessary.

### 5. Pull request
When you are ready you can press the "New pull request" on *your* repo page and from there select:
 * Base repository - "iQ-University/carrot-store-challenge"
 * Base - The branch with your name
 * Head repository - "YOUR_ACCOUNT_NAME/carrot-store-challenge"
 * Compare - The branch you worked on

