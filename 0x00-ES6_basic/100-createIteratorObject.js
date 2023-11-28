export default function createIteratorObject(report) {
  function* iterateEmployees() {
    const departments = Object.values(report.allEmployees);
    for (const department of departments) {
      yield* department;
    }
  }
  return {
    [Symbol.iterator]: iterateEmployees
  };
}
