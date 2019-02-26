export function convert_temperature(temp, from_scale, to_scale) {
  let new_temp = temp;
  
  if(from_scale != to_scale) 
    if(from_scale == 'kelvin' && to_scale == 'celsius')
      new_temp = temp - 273;
    else if(from_scale == 'kelvin' && to_scale == 'fahrenheit')
      new_temp = (temp * 9/5) - 459;
    else if(from_scale == 'celsius' && to_scale == 'kelvin')
      new_temp = temp + 273;
    else if(from_scale == 'celsius' && to_scale == 'fahrenheit')
      new_temp = (temp * 9/5) + 32;
    else if(from_scale == 'fahrenheit' && to_scale == 'kelvin')
      new_temp = (temp + 459.67) * 5/9;
    else if(from_scale == 'fahrenheit' && to_scale == 'celsius')
      new_temp = (temp - 32) * 5/9;

  return Math.ceil(new_temp);
}
