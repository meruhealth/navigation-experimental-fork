const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

const newPkgJSON = {
  name: '@meru/navigation-experimental-fork',
  main: './NavigationExperimental.js',
}

const fieldsToCopy = ['version', 'description', 'author', 'dependencies', 'peerDependencies']
fieldsToCopy.forEach(key => { newPkgJSON[key] = pkg[key] })

fs.writeFileSync(path.resolve(__dirname, '..', 'lib', 'package.json'), JSON.stringify(newPkgJSON, null, 2))
