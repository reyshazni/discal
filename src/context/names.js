import { useState } from "react";
import CustomName from "../components/customName";

function Names() {
  const [nameList, setNameList] = useState([])

  return (
    <div>
      <CustomName name='Person 1' type='number' placeholder='Item Price' />
    </div>
  );
}

export default Names;
 