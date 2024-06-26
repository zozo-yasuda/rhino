/* -*- Mode: javascript; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var gTestfile = 'regress-352044-02-n.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 352044;
var summary = 'issues with Unicode escape sequences in JavaScript source code';
var actual = 'No Error';
var expect = 'SyntaxError';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  print('This test case is expected to throw an uncaught SyntaxError');

  try
  {
    var i = 1;
    i \u002b= 1; 
    print(i);
  }
  catch(ex)
  {
    actual = ex + '';
  }

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
