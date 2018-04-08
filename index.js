var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function updateObjectWithKeyAndValue(obj, key, value){
   Object.assign({}, obj, { [key]: value })
}
