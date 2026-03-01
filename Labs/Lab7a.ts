function greetUser(name: string, title: string): string {
  if (title) {
    return "Hello"+" "+title;
  } else {
    return "Hello"+" "+name;
  }
}
console.log(greetUser("sitha"));
console.log(greetUser("sitha", "Dr."));