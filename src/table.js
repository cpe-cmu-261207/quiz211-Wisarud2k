const table = ({ name, gender, age }) => {
  return (
    <div>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;
