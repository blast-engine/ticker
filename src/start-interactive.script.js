const inquirer = require('inquirer')

const { doTick } = require('./do-tick.function')

const OPTION = {
  ONCE: 'tick once'
}

function prompt() {
  return inquirer
    .prompt([
      { 
        type: 'list',
        name: 'option',
        message: 'select option',
        choices: [ 
          OPTION.ONCE 
        ],
        default: 0
      }
    ])
}

async function go() {
  const { option } = await prompt()
  console.log('you chose: ' + option)
  
  if (option === OPTION.ONCE) 
    await doTick()

  setTimeout(() => go())
}

go()