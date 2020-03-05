const range = (len: any) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: "first name",
    lastName: "last name",
    age: 30,
    visits: 0.5,
    progress: 0.5,
    status: 'relationship'
  }
}

export default function makeData(...lens: any) {
  const makeDataLevel: any = () => {
    const len = lens[0]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[0 + 1] ? makeDataLevel() : undefined,
      }
    })
  }

  return makeDataLevel()
}
