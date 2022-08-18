export default function onlyUnique(value, index, self) {
  console.log(value, index, self);

  return self.indexOf(value) === index;
}
