/*
 * Plugin JavaScript and jQuery code for the admin pages of website
 *
 * @package     Syntax Highlighter for Post/Page HTML Editor
 * @author      Arthur Gareginyan
 * @link        https://www.spacexchimp.com
 * @copyright   Copyright (c) 2017-2021 Space X-Chimp. All Rights Reserved.
 */


jQuery(document).ready(function($) {

    "use strict";

    // Remove the 'successful' message after 3 seconds
    if ('.updated') {
        setTimeout(function() {
            $('.updated').fadeOut();
        }, 3000);
    }

    // Add a dynamic content to the plugin settings page. Needed for having an up to date banners
    $('.include-tab-store').load('https://resources.spacexchimp.com/wordpress/plugins/dynamic-content/page.html');

    // Add questions and answers into spoilers and color them in different colors
    $('.panel-group .panel').each(function(i) {
        $('.question-' + (i+1) ).appendTo( $('h4', this) );
        $('.answer-' + (i+1) ).appendTo( $('.panel-body', this) );

        if ( $(this).find('h4 div').hasClass('question-red') ) {
            $(this).addClass('panel-danger');
        } else {
            $(this).addClass('panel-info');
        }
    });

    // Enable switches
    $('.control-switch').checkboxpicker();

    // Enable number fields
    $('.control-number .btn-danger').on('click', function(){
        var input = $(this).parent().siblings('input');
        var value = parseInt(input.val());
        input.val(value - 1);
        input.change();
    });
    $('.control-number .btn-success').on('click', function(){
        var input = $(this).parent().siblings('input');
        var value = parseInt(input.val());
        input.val(value + 1);
        input.change();
    });

});
