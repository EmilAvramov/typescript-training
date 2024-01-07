import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

const numbers = new NumbersCollection([10, 3, -5, 0])
const string = new CharactersCollection('randomQSDJstring')
const links = new LinkedList()

links.add(500)
links.add(-10)
links.add(-3)
links.add(4)

numbers.sort()
string.sort()
links.sort()

console.log(numbers.data)
console.log(string.data)
links.print()