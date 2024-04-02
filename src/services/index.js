const modulesFiles = import.meta.globEager('./module/**/*.js')

const modules = {}

for (const modulePath of Object.keys(modulesFiles)) {
  let moduleName = modulePath.replace(/(\.\/|\.js)/g, '')
  if(moduleName.includes('/')){
    const list = moduleName.split('/')
    moduleName = list[list.length -1]
  }
  moduleName = moduleName.replace(moduleName[0],moduleName[0].toUpperCase())
  modules[moduleName] = modulesFiles[modulePath].default
//   moduleName = moduleName.replace(moduleName[0], moduleName[0].toUpperCase())
//   modules[moduleName] = modulesFiles[modulePath].default
}

export default modules
