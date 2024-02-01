# Welcome to the Scheduler's contributing guide

Thanks for considering contributions to our project. This is a brief overview of our contribution workflow.

## Table of contents

 - [How to create an issue](#how-to-create-an-issue)
 - [Picking up an issue to work on](#picking-up-an-issue-to-work-on)
 - [Setting up git and local repo](#setting-up-git-and-local-repo)
 - [Installing dependencies](#installing-dependencies)
 - [Working on issue](#working-on-issue)
 - [Creating pull request](#creating-pull-request)

### How to create an issue

Feel free to check out [our codebase](https://github.com/Bill-1991/Scheduler). If you think, that something could be added, fixed, or improved on, first check that there is no open issue for that by looking through the [issues tab](https://github.com/Bill-1991/Scheduler/issues).

If you are confident, that your issue won't be a duplicate - go ahead and [create it](https://github.com/Bill-1991/Scheduler/issues/new/)!

If you have some ideas about possible changes, please share your thoughts by creating a new thread in [the discussions](https://github.com/Bill-1991/Scheduler/discussions).

### Picking up an issue to work on

Browse through the [open issues](https://github.com/Bill-1991/Scheduler/issues) and feel free to start working one that does not have an assignee yet.

If you are a [collaborator](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository#collaborator-access-for-a-repository-owned-by-a-personal-account), assign yourself to the issue you want to work on.

If you are not a collaborator, please leave a comment in the issue thread so we know that you are working on it.

In any case - make sure to use the issue thread to ask questions about the issue if you need!

### Setting up git and local repo

- If you don't have Git installed on your machine, [install it](https://help.github.com/articles/set-up-git/). If you are not sure if it is installed, please use the `git -v` command in the command line.

- Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account. *Note: if you're collaborator in this repo, you can skip forking and just clone it*

  - Using GitHub Desktop:
    - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
    - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop).

- Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

  Open a terminal and run the following git command:

  ```
  git clone url-you-just-copied
  ```

  where `url-you-just-copied` is the url to this repository (your fork of this project).

### Installing dependencies

After cloning the repository, use terminal to go to project's directory: `cd Scheduler`.
Make sure you have nodeJS installed: run `node -v` command. If you do not have it, you can use [this guide](https://nodejs.dev/en/) to install node.

Run `npm install` which will install the package dependencies. This will add a `node_modules` folder to the root directory. The `node_modules` folder has already been added to the `.gitignore` file because it should never be committed or included in the production build of the application.

### Working on issue

[Pick an issue to work on](picking-up-an-issue-to-work-on)

Now you need to create a new branch for the changes you plan to implement in order to solve the issue.
To create a branch and switch to that new branch, use the `checkout` command:

`git checkout -b <your-branch name>`

After making code changes, commit them:

`git commit -am "<commit message>"`

Feel free to make several commits if you need, just make sure they all have descriptive messages.

When you're finished with the changes, push up your local branch up to repository:

`git push -u origin branch_name`

## Creating pull request

Next step is creating pull request. Go to [the repo page on github](https://github.com/Bill-1991/Scheduler), click "Compare and pull request", and follow below steps:

- Please follow all instructions in the template so that we can review your PR.
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.

Few notes about pull request's reviews:

- Once you submit your PR, a team member will review your proposal. We may ask questions or request for additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
