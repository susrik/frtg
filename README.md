* [Development Environment](#development-environment)
  * [Setup](#setup)
  * [Bundle Javascript](#bundle-javascript)
* [Installation From A Package](#installation-from-a-package)
* [Running](#running)
  * [Configuration](#configuration)
  * [Starting the Server](#starting-the-server)

# Development Environment

These notes are for setting up a development environment.

## Setup

Create a (python 3) virtualenv and install the requirements:

```bash
$ pip install -r requirements.txt
```

Set up the node environment:

```bash
npm install
```

## Bundle Javascript

In a fresh environment, or whenever the ui
sources are changed:

```bash
npm run build
```


# Installation From A Package

Create a (python 3) virtualenv and install the package in it:

```bash
$ pip install frtg-x.y.tar.gz
```

# Running

Starting the server is the same for either
of the above environments.

## Configuration

Create a json configuration file, using `config-example.json` as a template.

## Starting the Server

```bash
CONFIG_FILENAME=config.json FLASK_APP=frtg flask run
```

Note: if you are running from a source distribution
and didn't install it in your virtualenv, you should
execute the above from the top-level folder.
