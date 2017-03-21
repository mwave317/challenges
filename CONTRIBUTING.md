# How to contribute
Think you have a solution to one of the challenges listed in [issues](https://github.com/charlottejuniordevs/challenges/issues?q=is%3Aissue)? Awesome :raised_hands: here's how to submit your answer:

## Step 1) Fork this repo and clone it to your computer:
See these [instructions on how to fork a repo on GitHub](https://help.github.com/articles/fork-a-repo/).

## Step 2) Add your code and ensure it is organized with correct layout:

### TLDR Version: Ensure your code is organized with this layout.
```
.
└── <challenge-name> (if not already present)
    ├── INSTRUCTIONS.md (if not already present)
    └── <language> (if not already present)
        └── <github-handle>
            └── <your-files-go-here>

```

Here's an example for a challenge called `fizzbuzz` solved in ruby:
```
.
└── fizzbuzz
    ├── INSTRUCTIONS.md
    └── ruby
        └── binarymason
            └── fizzbuzz.rb

```

### Long Version:

#### a) Create a directory named after the challenge if it doesn't exist already.
Say there's a challenge called `fizzbuzz` and no solutions exist yet.
If this is the case and a `fizzbuzz` directory doesn't exist yet, go ahead and create one:

```sh
mkdir fizzbuzz
```

#### b) Create an INSTRUCTIONS.md file with the steps laid out in the corresponding [issue](https://github.com/charlottejuniordevs/challenges/issues?q=is%3Aissue).
If an `INSTRUCTIONS.md` file doesn't exist under `fizzbuzz` directory yet, go ahead and create one using the editor of your choice and paste in the instructions.

[Here's the issue for fizzbuzz](https://github.com/charlottejuniordevs/challenges/issues/1) and here's the [resulting INSTRUCTIONS.md file](./fizzbuzz/INSTRUCTIONS.md).

#### c) Create a directory named after the language you're using if it doesn't exist already.
Say you're going to solve `fizzbuzz` in ruby.  If a `ruby` directory doesn't exist already, go ahead and create it in the `fizzbuzz` directory:

```sh
cd fizzbuzz
mkdir ruby
```

#### d) Create a directory named with your GitHub username.
Execute this within the `fizzbuzz` directory.

```sh
cd ruby
mkdir <your-github-username>
```

#### e) Write your code!
![coding](./.assets/coding.gif)

## Step 3) Submit a Pull Request.
Create a Pull Request to [this repo](https://github.com/charlottejuniorruby/challenges).  Here are some [instructions on creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/).

## Step 4) Wait for a Code Review and make any changes if asked for improvements.

## Step 5) Pull Request is merged!
After the Code Review is complete and your Pull Request is approved, it will be merged and become an official solution! :medal_sports:

