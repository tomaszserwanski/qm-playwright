# Installation Guide

Visual Studio Code
https://code.visualstudio.com/download

Git for Windows
https://git-scm.com/downloads/win

Restart computer 

Open VS Code → Ctrl + Shift + P → type "Select Default Profile".
Select Git Bash.

Since now bash will be a default Terminal

You can use VSC terminal or you will have app Git Bash installed on your computer


# GitHub

Crete an account on github
https://github.com/

Click on your icon in right top corner. 
From menu select Settings.
On Settings page, from left side menu select SSH and GPG keys. And then button "New SSH key"

Title like you wish ( to help you identify computer you are connecting)
Key: your ssh key - below you will find instruction how to generate  


#### Generating SSH public key

`ssh-keygen -t ed25519 -C "your@email.com"`

-t ed25519 → modern algorithm (recommeded)
-C → comment (i.e. your e-mail from github)

you will be asked for some info, but you can leave it empty by pressing just enter.

If everything went good you will have your public key available here
C:\Users\<your_name>\.ssh\id_ed25519.pub

you can open it in notepad or via command: 
`cat ~/.ssh/id_ed25519.pub`

copy your key - it looks like this:
ssh-ed25519 BSAAC3NzaC1lZDI1NTE5AAAAILca7kOw/HtgKlBcnIFk3OahfJ+766svSH7dgBSziSo9



# Preparing repository

Now you can clone repository

Go to the folder you want to have your repo and in terminal write: 

`git clone git@github.com:qmauto/qualityminds-playwright.git`



## Preparation to run tests

Instal NodeJS ( with option: add to Path)

https://nodejs.org/

restart may be needed

check in terminal if it is installed
`node -v`
`npm -v`

Be sure you are in the project folder

install dependencies from package.json
`npm install`

When it is done install browsers
`npx playwright install`


### *YOU ARE READY TO RUN TESTS* 

Running all

`npx playwright test`. <== **YOUR BASIC COMMAND**

Optionally with UI mode 

`npx playwright test --ui`
or headed ( when you see how the test is running)

`npx playwright test --headed`


Single file with tests - here home.spec.ts:

`npx playwright test home.spec.ts`
