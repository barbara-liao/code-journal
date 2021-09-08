/* global data */
/* exported data */

var $photoInput = document.getElementById('photo-input');
var $image = document.querySelector('img');
var $entryForm = document.querySelector('#create-form');

$photoInput.addEventListener('input', handleInput);
$entryForm.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', renderEntry);

var $ul = document.querySelector('ul');

for (var i = 0; i < data.entries.length; i++) {
  var render = renderEntry(data.entries[i]);
  $ul.appendChild(render);
}

function handleInput(event) {
  $image.src = event.target.value;
}

function handleSubmit(event) {
  event.preventDefault();
  var newObj = {
    title: $entryForm.elements.title.value,
    imageURL: $entryForm.elements.photourl.value,
    notes: $entryForm.elements.notes.value
  };
  newObj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newObj);

  $image.src = 'images/placeholder-image-square.jpg';
  $entryForm.reset();
}

function renderEntry(event) {
  var $initialRow = document.createElement('div');
  $initialRow.className = 'row';

  var $imageColumn = document.createElement('div');
  $initialRow.appendChild($imageColumn);
  $imageColumn.setAttribute('class', 'column-half');

  var $entryImage = document.createElement('img');
  $imageColumn.appendChild($entryImage);
  $entryImage.setAttribute('src', data.entries[i].imageURL);

  var $textColumn = document.createElement('div');
  $initialRow.appendChild($textColumn);
  $textColumn.setAttribute('class', 'column-half');

  var $rowTitle = document.createElement('div');
  $textColumn.appendChild($rowTitle);
  $rowTitle.setAttribute('class', 'row');

  var $title = document.createElement('h2');
  var $titleText = document.createTextNode(data.entries[i].title);
  $title.appendChild($titleText);
  $rowTitle.appendChild($title);

  var $rowText = document.createElement('div');
  $textColumn.appendChild($rowText);
  $rowText.setAttribute('class', 'row');

  var $notes = document.createElement('p');
  var $notesText = document.createTextNode(data.entries[i].notes);
  $notes.appendChild($notesText);
  $rowText.appendChild($notes);
  $notes.setAttribute('class', 'margin-bottom');

  return $initialRow;
}
