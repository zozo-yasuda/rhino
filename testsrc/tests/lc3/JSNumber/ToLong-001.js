/* -*- Mode: javascript; tab-width: 8 -*-
 * Copyright (C) 1997, 1998 Netscape Communications Corporation,
 * All Rights Reserved.
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

gTestfile = 'ToLong-001.js';

/**
 *  JavaScript to Java type conversion.
 *
 *  This test passes JavaScript number values to several Java methods
 *  that expect arguments of various types, and verifies that the value is
 *  converted to the correct value and type.
 *
 *  This tests instance methods, and not static methods.
 *
 *  Running these tests successfully requires you to have
 *  com.netscape.javascript.qa.liveconnect.DataTypeClass on your classpath.
 *
 *  Specification:  Method Overloading Proposal for Liveconnect 3.0
 *
 *  @author: christine@netscape.com
 *
 */
var SECTION = "number conversion to long";
var VERSION = "1_4";
var TITLE   = "LiveConnect 3.0 JavaScript to Java Data Type Conversion " +
  SECTION;
startTest();

var dt = new DT();

var a = new Array();
var i = 0;

// passing a JS number to a method that expects a long:
// round JS number to integral value using round-to-negative-infinity mode
// numbers with a magnitude too large to be represented in the target integral
//  type result in a runtime error.
// Nan converts to 0.

// Special cases:  0, -0, Infinity, -Infinity, and NaN

a[i++] = new TestObject(
  "dt.setLong( 0 )",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  0,
  "number" );

a[i++] = new TestObject(
  "dt.setLong( -0 )",
  "Infinity / dt.PUB_LONG",
  "Infinity / dt.getLong()",
  "typeof dt.getLong()",
  Infinity,
  "number" );

a[i++] = new TestObject(
  "dt.setLong(1234567890123)",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  1234567890123,
  "number" );

a[i++] = new TestObject(
  "dt.setLong(-1234567890123)",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  -1234567890123,
  "number" );

a[i++] = new TestObject(
  "dt.setLong(0x7ffffffffffffff)",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  0x7ffffffffffffff,
  "number" );

a[i++] = new TestObject(
  "dt.setLong(0x7ffffffffffffff)",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  0x7ffffffffffffff,
  "number" );

a[i++] = new TestObject(
  "dt.setLong(0xfffffffffffffff)",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  0xfffffffffffffff,
  "number" );

a[i++] = new TestObject(
  "dt.setLong(0x6fffffffffffffff)",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  0x6fffffffffffffff,
  "number" );

a[i++] = new TestObject(
  "dt.setLong(-0x6fffffffffffffff)",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  -0x6fffffffffffffff,
  "number" );

/*
  a[i++] = new TestObject(
  "dt.setLong( java.lang.Long.MAX_VALUE )",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  java.lang.Long.MAX_VALUE,
  "number" );

  a[i++] = new TestObject(
  "dt.setLong( java.lang.Long.MIN_VALUE )",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  java.lang.Long.MIN_VALUE,
  "number" );

  a[i++] = new TestObject(
  "dt.setLong( -java.lang.Long.MAX_VALUE )",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  -java.lang.Long.MAX_VALUE,
  "number" );

  a[i++] = new TestObject(
  "dt.setLong( -java.lang.Long.MIN_VALUE )",
  "dt.PUB_LONG",
  "dt.getLong()",
  "typeof dt.getLong()",
  -java.lang.Long.MIN_VALUE,
  "number" );
*/
for ( i = 0; i < a.length; i++ ) {
  new TestCase(
    a[i].description +"; "+ a[i].javaFieldName,
    a[i].jsValue,
    a[i].javaFieldValue );

  new TestCase(
    a[i].description +"; " + a[i].javaMethodName,
    a[i].jsValue,
    a[i].javaMethodValue );

  new TestCase(
    a[i].javaTypeName,
    a[i].jsType,
    a[i].javaTypeValue );
}

test();

function TestObject( description, javaField, javaMethod, javaType,
		     jsValue, jsType )
{
  eval (description );

  this.description = description;
  this.javaFieldName = javaField;
  this.javaFieldValue = eval( javaField );
  this.javaMethodName = javaMethod;
  this.javaMethodValue = eval( javaMethod );
  this.javaTypeName = javaType,
    this.javaTypeValue = eval( javaType );

  this.jsValue   = jsValue;
  this.jsType      = jsType;
}
