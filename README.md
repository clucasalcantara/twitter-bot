# NodeBotsSalvador Twitter Bot
I'm a Twitter bot for #NodeBotsSalvador https://twitter.com/nodebotsalvador
This document should be the ultimate guide on running and specs about the application source code.

## Index

* [Table of Contents]()
  * [Development](#development)
    * [Requirements](#requirements)
    * [Operating the environment](#operating-the-environment)
      * [Starting services](#starting-services)
      * [Stopping services](#stopping-services)
      * [Running internal commands](#running-internal-commands)
  * [Coding Guide Lines](#coding-guide-lines)
    * [Style](#style)
    * [Unit Testing](#unit-testing)

## Development

### Requirements

- **Node.JS LTS** >= 6.11.2.
- **YARN** >= 0.27.5.
- **PM2**

### Operating the docker environment

#### Starting services

- Option 1: Keeping the output visible on the terminal
```
pm2 start index.js
```

- Option 2: Pass arguments '-a 23' argument to index.js script
```
pm2 start index.js -- -a 23
```

- Option 3: Start maximum processes depending on available CPUs (cluster mode)
```
pm2 start index.js -i 0
```

#### Stopping services

- Option 1: When the output is visible (started with option 1), just hit **`control + c`** to stop it.

- Option 2: When the services are on background or failed to stop with **`control + c`**, you can stop them with the following command:
```
pm2 stop
```

#### Running internal commands

When commands like PM2 are needed, use the following sintax:

- Monitoring all processes launched
```
pm2 monit
```

- Fork mode
```
pm2 start index.js --name nodebotssalvador-twitter-bot
```

- Display all processes status
```
pm2 list
```

- Display all processes logs in streaming
```
pm2 logs [--raw]
```

- Will remove process from pm2 list
```
pm2 delete 0
```

## Coding Guide Lines

### Style
**standardjs** it's simple and is our choice for this project, because no one wants to maintain multiple hundred-line style configuration files for every module/project they work on. Enough of this madness! As bonus we have **no configuration** for use this.

#### The Rules

* 2 spaces – for indentation
* Single quotes for strings – except to avoid escaping
* No unused variables – this one catches tons of bugs!
* No semicolons – It's fine. Really!
* Never start a line with (, [, or `
* This is the only gotcha with omitting semicolons – automatically checked for you!
* Space after keywords if (condition) { ... }
* Space after function name function name (arg) { ... }
* Always use === instead of == – but obj == null is allowed to check null || undefined.
* Always handle the node.js err function parameter
* Always prefix browser globals with window – except document and navigator are okay
* Prevents accidental use of poorly-named browser globals like open, length, event, and name.
* And more goodness – give standard a try today!

- Useage
```
standard
```

- Automatically format code
```
standard --fix
```

### Unit Testing
Following the same structure of existing tests, the main rule it keep tests under the same namespace as the class being tested, in order to avoid useless imports and keep code cleaner.