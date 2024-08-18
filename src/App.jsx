import { useState } from "react";
import PersonInfo from "./components/Personinfo";

function App() {
  const [form, setForm] = useState({
    Persondetails: {},
  });

  const update = (data) => {
    setForm({ ...form, Persondetails: data });
  };

  return (
    <div>
      <h2>Please Enter Personal information</h2>
      <PersonInfo data={form.Persondetails} setdata={update} />
    </div>
  );
}

export default App;
