---
title: Middleman Quickstart
layout: article
author: Chris Connelly
image: assets/img/middleman.png
share-on: true
---

# Middle Man

## Getting Started

### Installing Ruby and Middle Man

macOS comes prepackaged with both Ruby and RubyGems, however, some of the Middleman's dependencies need to be compiled during installation and on macOS that requires Xcode Command Line Tools. Xcode can be installed from the terminal:

```bash
xcode-select --install
```

Once you have Ruby and RubyGems up and running, execute the following from the command line:

```bash
gem install middleman
```

This will install Middleman, its dependencies and the command-line tools for using Middleman.

The installation process will add one new command to your environment, with three useful features:

```bash
$ middleman init
$ middleman server
middleman build
```

The uses of each of these commands will be covered in the next section, Start a New Site.

### Setting up a new file

To get started we will need to create a project folder for Middleman to work out of. You can do this using an existing folder or have Middleman create one for you using the middleman init command.

```bash
middleman init
```

builds a Middleman skeleton project in your current folder.

```bash
middleman init my_new_project
```

creates a subfolder my_new_project with the Middleman skeleton project.

#### The Skeleton

Every new project creates a basic web development skeleton for you. This automates the construction of a standard hierarchy of folders and files that you can use in all of your projects.

A brand-new project will contain a source folder and a config.rb file. The source folder is where you will build your website. The skeleton project contains folders for JavaScript, CSS and images, but you can change these to match your own personal preferences.

The config.rb file contains settings for Middleman.

#### Gemfile

Middleman will respect a Bundler Gemfile for specifying and controlling your gem dependencies. When creating a new project, Middleman will generate a Gemfile for you which specifies the same version of Middleman you are using. This will lock Middleman to this specific release series (the 4.0.x series, for example). All plugins and extra libraries you use in your project should be listed in your Gemfile, and Middleman will automatically require all of them when it starts.

#### config.ru

A config.ru file describes how the site should be loaded by a Rack-enabled web server. If you'd like to host your Middleman site in development mode on a Rack-based host such as Heroku, you can add a config.ru file at the root of your project with the following contents:

```bash
require 'middleman/rack'
run Middleman.server
```

Remember that Middleman is built to generate static sites, though. This scenario is not a primary use-case.

### Directory Structure

The default Middleman installation consists of a directory structure which looks like this:

mymiddlemansite/
+-- .gitignore
+-- Gemfile
+-- Gemfile.lock
+-- config.rb
+-- source
    +-- images
    ¦   +-- background.png
    ¦   +-- middleman.png
    +-- index.html.erb
    +-- javascripts
    ¦   +-- all.js
    +-- layouts
    ¦   +-- layout.erb
    +-- stylesheets
        +-- all.css
        +-- normalize.css

#### Main Directories

Middleman makes use of the source, build, data and lib directories for specific purposes. Each of these directories are children of the main Middleman directory.

#### source Directory

The source directory contains your main website source files to be built, including your templates JavaScript, CSS and images.

#### build Directory

The build directory is where your static website files will be compiled and exported to.

#### data Directory

Local Data allows you to create YAML or JSON files in a folder called data and makes this information available in your templates. The data folder should be placed in the root of your project (i.e. in the same folder as your project's source folder). See the Data Files docs for more information.

#### lib Directory

The lib directory enables you to include external Ruby modules which contain helpers for building your application. If you use Rails then you will be familiar with this layout.

![Middle Man has started image](bible.chrisconnelly.dev/articles/020-04-06-getting-started-middleman/middleman.png)

For more information check out the [middle man cheatsheet]()

Make sure you watch [THESE](videos) if you want to master this super fun framework
