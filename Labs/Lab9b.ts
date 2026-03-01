function formatValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(Math.round(value));
  }
}
formatValue("hello");   
formatValue(12.6);