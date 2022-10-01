import { Person, PersonService } from './personservice'

test("Create a test Person object", () => {
  const person = new Person(1, 'McGulley', 'Mike', 43)
  expect(person.id).toBe(1)
  expect(person.lastName).toBe('McGulley')
  expect(person.firstName).toBe( 'Mike')
  expect(person.age).toBe(43)
})


test("All persons are returned", () => {
  const personList = PersonService.getAllPersons()
  expect(personList.length).toBe(3)
  expect(personList).toContainEqual(new Person(1, "Meier", "Hans", 40))
  expect(personList).toContainEqual(new Person(2, "Mahler", "Sandra", 32))
  expect(personList).toContainEqual(new Person(3, "Huber", "Franz", 56))
})

test("Person with id 1 is returned", () => {
  const person = PersonService.getPersonForId("1")
  expect(person.id).toBe(1)
  expect(person.lastName).toBe( 'Meier')
  expect(person.firstName).toBe('Hans')
  expect(person.age).toBe(40)
})
