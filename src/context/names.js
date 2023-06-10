import { useState, useEffect } from "react";
import CustomName from "../components/customName";

function Names({sumSetter}) {
  const [nameList, setNameList] = useState([{
    name: 'Person 1',
    total: 0
  },
  {
    name: 'Person 2',
    total: 0
  },
])

const changeTotalHandler = (name, total) => {
    let newList = []
    nameList?.map(item => {
        if(item.name === name){
            const newItem = {
                ...item,
                total: total
            }
            newList.push(newItem)
        } else {
            newList.push(item)
        }
    })
    setNameList(newList)
}

useEffect(() => {
    let sumTotal = 0;
    console.log(nameList)
    nameList?.map(i => sumTotal += parseInt(i.total))
    console.log(sumTotal)
    sumSetter(sumTotal)
},[nameList])



  return (
    <div>
        {nameList?.map((item) =>       <CustomName name={item.name} setter={changeTotalHandler}   />)}
    </div>
  );
}

export default Names;
 