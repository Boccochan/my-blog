---
title: Deploy Gatsby with Typescript to Netlify
date: "2020-07-10T21:40:32.169Z"
description: How to deploy Gatsby with Typescript to Netlify
---

It's easy to deploy Gatsby with Typescript to Netlify. You just need to follow the steps below:

- Getting gatsby cli and starter kid
- Creating your repository on Github, Gitlab or Bitbucket
- Creating your Netlify account and deploying to it
- Uploading your blog
- Using custom domain

## Getting gatsby cli and starter kid

```bash
npm install -g gatsby-cli
```

Then,

```bash
gatsby new your-project-name https://github.com/gperl27/Gatsby-Starter-Blog-Typescript
cd your-project-name
gatsby develop
```

### Cleanup module packages if you can't run gatsby develop

You might encounter some errors when you run 'gatsby develop'. In that case, you should cleanup packages.

```bash
rm -rf node_modules
rm yarn.lock
yarn install
yarn upgrade --latest
gatsby develop
```

## Creating your repository on Github, Gitlab or Bitbucket

You can use Github, Gitlab or Bitbucket to manage and deploy your blog. It's free to use. You need to create your account on one of them first.

This time, I'm using Github here.

### Creating a repository

You need to create repository for your project. If you don't know how to do it, please see [Creating a new repository](https://docs.github.com/en/enterprise/2.13/user/articles/creating-a-new-repository#:~:text=In%20the%20upper%2Dright%20corner,repository%20either%20public%20or%20private.).

### Pushing your source code to the repository

In your project directory,

```bash
git init
git add .
git commit -m "Initial commit"
```

Then,

```bash
git remote add origin https://github.com/yourname/your-blog-name.git
git push -u origin master
```

## Creating your Netlify account and deploying to it

You can create your Netlify account [here](https://app.netlify.com/). Then, click "New site from Git button".

![Netlify](./create-new-site-button.jpg)

I am going to deploy from Github, so I should select Github. But if you are using Gitlab and Bitbucket, you should select them.

![Netlify](./netlify-select-git.jpg)

Select your repository which you have created.

![Netlify](./netlify-select-repository.jpg)

Click deploy site.

![Netlify](./netlify-deploy.jpg)

Now, you can see your blog site.

![Netlify](./netlify-deployed.jpg)

## Uploading your blog

There are already a couple of sample blogs under content/blog. You can add a new blog there. But be careful, you should not delete those sample blogs yet. Probably, it will cause some errors.

I'm going to figure it out.

## Using custom domain

If you want to use your cool URL, you can use it.
I am going to explain how to do it by the other blog post. Coming soon!
