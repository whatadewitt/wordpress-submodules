# Proof of Concept WP Submodule Site

This is a proof of concept put together using this example as a starting point: [http://ajk.fi/2013/wordpress-as-a-submodule/](http://ajk.fi/2013/wordpress-as-a-submodule/)

We've taken it a bit further and are using submodules to handle not only the WP core, but also the themes and plugins, as we know we'll have more control over them.

The reasoning behind this is to keep each site built in a very modular fashion that will allow us to update different pieces as needed within their own repos, which will make it easier to push updates to all of the other sites when those modules are shared.

## How to Use

* Clone this repo.
* Change into the working directory of the repo
* Run `git submodule update --init --recursive`
* You could also choose to clone using the `--recursive` flag

This will pull in all of the submodules being used in the repo, including WordPress, themes, and plugins.

If we were to actually begin using this, we would create a "starter" repo, that would include everything that we need when starting a new site, save for the child theme that will actually be used. We would clone the starter repo and then remove the `origin` remote, so as to be able to point it to a new repo where this site's data will be stored.

I've purposely ignored the docker/gulp configurations for the purpose of this proof of concept. Also for this POC, we have included the child theme that will be used as a submodule already.

You'll be able to navigate to the subdirectory where each submodule is located and run a `git checkout` on the version you wish to have running on the site. This works nicely 

**note:** this presupposes that eventually we will follow a flow for our themes and plugins where we make use of the "releases" feature on Github.

## Themes

The workflow for themes is fairly straight forward. 

In the normal use case, you would clone our "base" repo (using [https://github.com/whatadewitt/poc-understrap-child](https://github.com/whatadewitt/poc-understrap-child) right now), set the origin to be the location of the new theme repo on github, and set an upstream remote so we can pull down any changes that might happen with our base theme(*note:* it might make sense to create a simple script to do this for our users). This is similar to what we're doing for the basic site, with the exception being that it's now easy to bring shared features from our base theme into child themes (as I write this, it may make sense to do something similar at the "starter site" level...)

As mentioned, this POC has the child theme we're using already installed as a submodule [https://github.com/whatadewitt/my-understrap-theme](https://github.com/whatadewitt/my-understrap-theme).

Do your work in the child theme as you normally would, but put "Child Theme" specific business logic in the "child-functions.php" file. This will help us avoid Merge Conflicts in the future coming downstream from our base theme.