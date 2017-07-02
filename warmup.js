function my_max(num_array){
  var largestElement = num_array[0];
  for(var i = 0;i < num_array.length; i++){
    if(num_array[i] > largestElement){
      largestElement = num_array[i];
    }
  }
  return largestElement;
}

function reverse(string){
  var reversed_string = "";
  for(var i = string.length - 1; i >= 0; i--){
    reversed_string = reversed_string + string[i];
  }
  return reversed_string;
}

test_string = "All the whos down in who ville liked Christmas a lot. You see, they had never been at my families dinner pot";
document.write(reverse(test_string));
