var object = `{"name": "ISRO", "age": 35, "role": "Scientist"}`;
object=JSON.parse(object);
function convertObjectToList(arr)
{
    return Object.entries(arr);
}
console.log(convertObjectToList(object));