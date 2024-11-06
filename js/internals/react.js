"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

const data = [
  {
    name: "Marcel",
    surname: "Michau",
    age: "24",
    gender: "Male",
  },
  {
    name: "Joe",
    surname: "Bloggs",
    age: "27",
    gender: "Male",
  },
  {
    name: "Jane",
    surname: "Doe",
    age: "22",
    gender: "Female",
  },
];

const TableComponent = () => {
  let headings = Object.keys(data[1]);

  const [activeCell, setActiveCell] = useState(null);

  function handleMakeActive(item, heading, index) {
    setActiveCell(item[heading] + index);
  }

  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={item.name + item.surname}>
              {headings.map((heading) => {
                return (
                  <td
                    key={item[heading]}
                    className={cn(
                      activeCell === item[heading] + index && "bg-blue-500"
                    )}
                    onClick={() => handleMakeActive(item, heading, index)}
                  >
                    {item[heading]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;

// const data2 = [{
//   something: 'Marcel',
//   somethingElse: 'Michau',
//   yetAnotherThing: '24',
//   andAnother: 'Male',
//   moarStuff: 'bla bla'
// }, {
//   something: 'Marcel',
//   somethingElse: 'Michau',
//   yetAnotherThing: '24',
//   andAnother: 'Male',
//   moarStuff: 'bla bla'
// }, {
//   something: 'Marcel',
//   somethingElse: 'Michau',
//   yetAnotherThing: '24',
//   andAnother: 'Male',
//   moarStuff: 'bla bla'
// }];
