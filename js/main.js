/* global data */
/* exported data */

function handleInput(event) {
  $image.src = event.target.value;
}

function handleSubmit(event) {
  event.preventDefault();
  var newEntry = {};
  var newObj = {
    title: $entryForm.elements.title.value,
    imageURL: $entryForm.elements.photourl.value,
    notes: $entryForm.elements.notes.value
  };
  for (var i in newObj) {
    newEntry[i] = newObj[i];
  }
  newEntry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newEntry);

  $image.src = 'images/placeholder-image-square.jpg';
  $entryForm.reset();
}

var $photoInput = document.getElementById('photo-input');
var $image = document.querySelector('img');
var $entryForm = document.querySelector('#create-form');

$photoInput.addEventListener('input', handleInput);
$entryForm.addEventListener('submit', handleSubmit);
