jquery-floodlight
=================

A jQuery plugin for firing doubleclick floodlight tags
jQuery 1.7+

Usage
-----

All options by default are null except return_false which is set as true.

Setting the return_false to false will allow the click's action i.e. a link going to its href.

    $('#a').floodlightTag({
        src: '1234567',
        type: 'foo',
        cat: 'bar',
        return_false: true
    });
