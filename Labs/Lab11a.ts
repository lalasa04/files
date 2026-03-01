interface Student {
  name: string;
  marks: number;
}
const students: Student[] = [
  { name: "Hari", marks: 90 },
  { name: "Ravi", marks: 85 },
  { name: "Raju", marks: 92 }
];
students.forEach(function(student) {
  console.log("Name: " + student.name + ", Marks: " + student.marks);
});