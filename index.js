let word = "applebee        ";

function frontDoorPassword(word) {
  let a = word.slice(0, 1);
  a = a.toUpperCase();
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
}

output = frontDoorPassword(word);

console.log(output);
