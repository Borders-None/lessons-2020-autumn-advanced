# GitHub pages

## About github pages

- does not support CDN
- cannot reference external links
- only static files are available (no server side languages)
- possible to host React projects
- possible to host to custom domain


## Git branches explained

- Git branch is a stream of work 
- All work in git is stored in some kind of branch
- The default branch name can be `master/main`
  - newer Github repositories have `main` branch as a default one
  - your github page might need configuration


## Create initial github pages repository

- we are following [github pages tutorial](https://pages.github.com)

Steps:
    1. create a repository username.github.io with readme file(must be public)
    2. clone repository your computer 
    3. add some files in master branch
        - index.html (mandatory)
        - styling (css)
        - javascript
        - picture
    4. publish aka push your code you the remote repository
- link to github pages is `https://username.github.io`
- if you don't see your page check following:
  - that you pushed the code to the remote repository
  - that the branch with the code is set as a source for Github pages (Repository->Settings)
    - `master` vs `main` branch confusion


## Create github pages for alternative repository

- create a repository `alternative`
- `master` branch is for the actual project we are working on
- create a branch `gh-pages`
- enable github pages and point to `gh-pages` branch
- link to new github pages is `https://username.gituhb.io/alternative/`
  - don't forget to put the last `/` in the link


## Customizing Github pages

### Enable HTTPS
- enabled by default 
- at the bottom of repository settings

### Customizing branch for alternative repository
- at settings page under Github pages we can customize branch
- `gh-pages` is a default branch (KISS) 


Homework: 
- create a personal github page
- create one project and create a github page for it

