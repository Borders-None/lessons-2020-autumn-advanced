# Github pull requests and issues

## Pull requests (PR)

Pull request mechanism is used that only reviewed code can go into the main code repository.
Also that someone besides the code commiter can understand the code.

The usual steps is:
1. Pull the latest changes
2. Create a branch
3. Edit/Add files using the branch
4. Commit files locally into that branch
5. Push the branch to the Github
6. Create a pull request 
7. Approve the request

### Pull the latest changes

Be sure you have the latest changes **locally**

### Creating a branch and switching to a branch

Create a new branch in a git repository using Github Desktop

### Do some code editing

Notice that active branch in your code editor have been changed.

### Committing files locally 

Commit your code to the local repository

### Pushing changes to the github 

Push/publish your code to the remote repository

### Creating a pull request 

Create a PR using Github Desktop which will redirect you to Github repo.
Creating a PR is actually always created on a repo, but it can be called from some other tool 

When creating a PR there are some things needed to be mentioned.
* Only people with the write access can approve the code.
* You can comment on the whole document or some lines particularly.
* Choose who will review your code (it can be a person or a team)
* After you create your PR reviewers will receive an email notification
* After a review you will get a notification if you need to improve your code
  When you finish your editing push again using the same branch
* After the code is approved the branch can be deleted
* While approving the code the commits can be squashed i.e. multiple commits merged into a one commit

## Issues 

A way of tracking tasks, enhancements and bugs for the project. A Github name for a bug tracker.
And because of that are not stored locally e.g. only on the Github repo.
We may report a bug  , ask a question or feature in the project.

To access issues we have a dedicated page on Github (Issues) in every repository.
When we access the issues page there is a button for creating a new issue.
After that a form is presented quite similar like when we write an email.
We have a subject and a body. In body we have a special editor that supports markdown.
When we edit it we have a write tab and a preview tab.
If needed we can drag and drop images but we can also reference git commits.
We can reference commit 

We can put standard custom labels to the issue. 
One important thing that we can also assign who is responsible for the issues.

The issues can be either opened or closed. Only the person who opened the issue or someone 
with admin rights can close an issues. 

When we commit a code we can refer to the issues solved. Every issues has a number.
So when we do a commit message we add mark for the issue (`#Number`)
After we push to code it will link the code to the issue
There are some keywords that can automatically close the issue but I don't know how it works in PR scheme.







