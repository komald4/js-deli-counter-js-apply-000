function takeANumber(count,name){
  count.push(`${name}`);
  return(`Welcome, ${name}. You are number ${count.length} in line.`);  
}

function nowServing(katzDeliLine){
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be servd!";  
  }
  else {
    return (`Currently serving ${katzDeli.shft()}`)
  }
