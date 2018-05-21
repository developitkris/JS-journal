import { entry } from './entry';
import './styles.css';

$(document).ready(function() {
  $('#entry-num').submit(function(event) {
    event.preventDefault();
    var words = $('#entry-num').val();
    var output = countWords(word);
    output.forEach(function(item) {
      $('#return').append("<li>" + item + "</li>");
    });
    var vowCons = $('#entry-num').val();
    var output2 = countVowCons(word);
    output.forEach(function(item) {
      $('#return').append("<li>" + item + "</li>");
    });
    var words = $('#entry-num').val();
    var output3 = getTeaser(words);
    output.forEach(function(item) {
      $('#teaser').append("<li>" + item + "</li>");
    });
  });
});
