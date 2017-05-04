'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  prompting () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('micro api') + ' generator!'
    ))

    const prompts = [{
      type: 'input',
      name: 'name',
      message: "what's the name of this microservice/api?",
      default: this.appname
    }]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name
      }
    )

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    )

    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    )
  }

  install () {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    })
  }
}
