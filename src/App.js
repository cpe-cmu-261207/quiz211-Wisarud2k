import { table } from "../src/App";

function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];

  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {persons.map((item) => (
        <table name={item.name} gender={item.gender} age={item.age}></table>
      ))}

      {/* {persons.map((item) => (
        <p>{item.name}</p>
      ))} */}
      {/* Convert me to a component! */}
      {/* <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table> */}

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>YOUR ID HERE</p>
      <button>-</button>
      <button>reset</button>
      <button>+</button>
    </div>
  );
}

export default App;
