/*jshint esversion: 6 */

function singleNote() {

  const single = new SingleNote(new Note('Foo'));

  console.log('HTML output - Single note: ');
  assert.isEqual(single.returnSingle(), 'Foo', 'Output matches input');
  assert.isEqual(single.outputSingle(), '<ul><li>Foo</li></ul>', 'Returns a html formatted single note');
}

singleNote();
