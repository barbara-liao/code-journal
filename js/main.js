/* global data */
/* exported data */

var $photoInput = document.getElementById('photo-input');
var $image = document.querySelector('img');
var $createForm = document.querySelector('#create-form');
var $viewForm = document.querySelector('#view-form');
var $viewEntry = document.querySelector('#view-entry');
// var $input = document.querySelectorAll('input');
// var $a = document.querySelector('a');
var $entriesLink = document.querySelector('#entries-link');
var $newLink = document.querySelector('#new-link');
var $noEntry = document.querySelector('#no-entry');

$photoInput.addEventListener('input', handleInput);
$createForm.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', handleLoad);
$entriesLink.addEventListener('click', viewEntries);
$newLink.addEventListener('click', viewForm);

var $ul = document.querySelector('ul');

if (data.entries.length === 0) {
  $noEntry.className = '';
} else {
  $noEntry.className = 'hidden';
}

function handleLoad(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var render = renderEntry(data.entries[i]);
    $ul.appendChild(render);
  }
}

function handleInput(event) {
  $image.src = event.target.value;
}

function handleSubmit(event) {
  event.preventDefault();
  var newObj = {
    title: $createForm.elements.title.value,
    imageURL: $createForm.elements.photourl.value,
    notes: $createForm.elements.notes.value
  };
  newObj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newObj);
  $ul.prepend(renderEntry(newObj));
  viewEntries();
  $image.src = 'images/placeholder-image-square.jpg';
  $createForm.reset();
  if (data.entries.length === 0) {
    $noEntry.className = '';
  } else {
    $noEntry.className = 'hidden';
  }
}

function renderEntry(entry) {
  var $initialRow = document.createElement('div');
  $initialRow.className = 'row';

  var $imageColumn = document.createElement('div');
  $initialRow.appendChild($imageColumn);
  $imageColumn.setAttribute('class', 'column-half');

  var $entryImage = document.createElement('img');
  $imageColumn.appendChild($entryImage);
  $entryImage.setAttribute('src', entry.imageURL);

  var $textColumn = document.createElement('div');
  $initialRow.appendChild($textColumn);
  $textColumn.setAttribute('class', 'column-half');

  var $rowTitle = document.createElement('div');
  $textColumn.appendChild($rowTitle);
  $rowTitle.setAttribute('class', 'row');

  var $title = document.createElement('h2');
  var $titleText = document.createTextNode(entry.title);
  $title.appendChild($titleText);
  $rowTitle.appendChild($title);

  var $rowText = document.createElement('div');
  $textColumn.appendChild($rowText);
  $rowText.setAttribute('class', 'row');

  var $notes = document.createElement('p');
  var $notesText = document.createTextNode(entry.notes);
  $notes.appendChild($notesText);
  $rowText.appendChild($notes);
  $notes.setAttribute('class', 'margin-bottom');
  return $initialRow;
}

function viewEntries(event) {
  $viewEntry.className = '';
  $viewForm.className = 'hidden';
}

function viewForm(event) {
  $viewEntry.className = 'hidden';
  $viewForm.className = '';

}
