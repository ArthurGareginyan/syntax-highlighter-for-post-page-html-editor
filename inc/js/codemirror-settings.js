/*
 * Settings of CodeMirror editor
 *
 * Copyright (c) 2017 Arthur Gareginyan ( http://www.arthurgareginyan.com ).
 * All Rights Reserved.
 */


jQuery(document).ready(function($) {

    "use strict";

    // Get values for variables
    var line_numbers = ( scriptParams["line_numbers"] == 'true' );
    var first_line_number = parseInt( scriptParams["first_line_number"] );
    var line_wrapping = ( scriptParams["line_wrapping"] == 'true' );
    var tab_size = parseInt( scriptParams["tab_size"] );
    var theme = scriptParams["theme"];
    var mode = scriptParams["mode"];

    // Find textareas on page
    $('textarea').each(function(index, elements) {

        // Change editor to CodeMirror
        var editor = CodeMirror.fromTextArea( elements , {
                                lineNumbers: line_numbers,
                                firstLineNumber: first_line_number,
                                lineWrapping: line_wrapping,
                                matchBrackets: true,
                                indentUnit: tab_size,
                                readOnly: false,
                                theme: theme,
                                mode: 'text/html'
        });

        // Refresh CodeMirror editor
        editor.refresh();

    });

});