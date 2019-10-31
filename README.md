# fetch-rewards-challenge

Fetch Rewards Programming Challenge for Software Engineering and Data Engineering Internships.

## Pyramid Coding Challenge

### Challenge

Write a web service that takes in a string and returns a boolean to indicate whether or not a word is a pyramid word. A word is a "pyramid word" if you can arrange the letters in increasing frequency, starting with 1 and continuing without gaps and without duplicates.

For example: banana is a pyramid word because you have 1 "b", 2 "n's", and 3 "a's". bandana is not a pyramid word because you have 1 "b" and 1 "d".

### Usage

```http
POST /pyramid?word=
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `word`    | `string` | **Required**. Word to be checked |

### Response

```javascript
{
  "isPyramidWord" : bool,
}
```

## Data Engineer Challenge

### Challenge

Your objective is to write a program that takes inputs and uses a metric to determine how similar they are. Documents that are exactly the same should get a score of 1, and documents that don't have any words in common should get a score of O.

#### Requirements

The document similarity algorithm does not need to perform well, and you don't need to account for all edge cases. You may choose any language you like, but only standard libraries may be used (i.e., no sci-kit learn, nltk, spacy, etc. that's cheating!). The code, at a minimum, must run.

### Usage

```http
POST /similarity
```

### Request body

```javascript
[
  {
    text1: string,
    text2: string,
  },
];
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text1`   | `string` | **Required**. Input text 1 |
| `text2`   | `string` | **Required**. Input text 2 |

### Response

```javascript
{
  "similarity" : float
}
```

---

## Requirements

For development, you will only need Node.js.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

Clone the repo and install the dependencies

    $ git clone https://github.com/rtkg12/fetch-rewards-challenge.git
    $ cd fetch-rewards-challenge
    $ npm install

## Running the project

    $ node index.js

## Docker

You can also run this project through the Docker container from Docker Hub.

    $ docker run -p 8080:8080 rtkg12/fetch-rewards-challenge
