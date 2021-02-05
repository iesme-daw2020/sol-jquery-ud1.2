$(() => {
  /**
   * PRACTICA 2
   */
  $('#selected-plays > li')
    .addClass('horizontal')
    .children()
    .addClass('sub-level');

  $('li.horizontal').addClass('big-letter');

  $('a[href^="mailto:"]').addClass('mailto');
  $('a[href$=".pdf"]').addClass('pdflink');
  $('a[href^="http"][href*="henry"]').addClass('henrylink');

  // La diferencia con:  $('tr:even').addClass('alt');
  // Es que el contador se resetea cada vez que hay un cambio de padre (tabla)
  // Según la documentación:  Notice that this is different from the even and odd which have no regard for parent and
  // just filter the list of elements to every other one.
  // The :nth-child, however, counts the index of the child to its particular parent.
  $('tr:nth-child(odd)').addClass('alt');

  $('td:contains(Henry)').addClass('highlight');

  /**
   * PRACTICA 3
   */
  $('td:contains(Henry)').next().addClass('highlight');
  $('table').first().find('td:contains(et)').nextAll().addClass('highlight');
});
