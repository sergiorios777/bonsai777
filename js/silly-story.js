const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyTitle = document.querySelector('.card-title');
const cardElement = document.querySelector('.card');

cardElement.hidden = true;

let storyText = 'Había 94 grados fahrenheit afuera, pero :insertx: salió a caminar. Cuando llegó a :inserty:, lo miraron horrorizados por un momento, entonces :insertz:. Bob lo vio todo, pero no se sorprendió — :insertx: pesaba 300 libras, y era un día caluroso.';

let insertX = [
  'Willy el Duende',
  'Gran Pa\'',
  'Papá Navidad'
];

let insertY =[
  'el comedor de beneficiencia',
  'Disneylandia',
  'la Casa Blanca'
];

let insertZ = [
  'ardió espontáneamente',
  'se derretido en un charco en la acera',
  'se convirtió en una babosa y se arrastró lejos'
];

randomize.addEventListener('click', result);

function randomValueFromArray(array)
{
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function result() 
{
  let newStory = storyText;
  //console.log(newStory);

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  //console.log(xItem+'-'+yItem+'-'+zItem);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);


  if(customName.value !== '') 
  {
    let name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) 
  {
    let weight = Math.round(300/2.2046) + ' kilogramos';
    let temperature =  Math.round(5/9*(94-32)) + ' centígrados';
    console.log(newStory);
    console.log(weight + '-' + temperature);
    newStory = newStory.replace('300 libras', weight);
    newStory = newStory.replace('94 grados fahrenheit', temperature);
  }

  storyTitle.textContent = xItem + ' salió a caminar';
  story.textContent = newStory;
  story.style.visibility = 'visible';
  if (cardElement.hidden)
  {
    cardElement.hidden = false;
  }
}