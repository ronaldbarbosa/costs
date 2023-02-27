import React from "react";

export default function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Enter project name" />
      </div>
      <div>
        <input type="number" placeholder="Enter total budget" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>Select category</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Create Project" />
      </div>
    </form>
  );
}
