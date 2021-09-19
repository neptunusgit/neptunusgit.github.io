var test = new RegExp("/customcss/");
tinyMCE.init({
        mode : "exact",
        elements: "id_text.0.text, id_text.1.text, id_text.2.text, id_text.3.text, id_text.4.text, id_text.5.text, id_text.6.text, id_text.7.text, id_text.8.text, id_text.9.text, id_text.10.text, id_text.11.text, id_text.12.text, id_text.13.text, id_text.14.text, id_text.15.text, id_text.16.text, id_text.17.text, id_text.18.text, id_text.19.text, id_text.20.text, id_text.21.text, id_text.22.text, id_text.23.text, id_text.24.text, id_text.25.text, id_text.26.text, id_text.27.text, id_text.28.text, id_text.29.text, id_text.30.text, id_text.31.text, id_text.32.text, id_text.33.text, id_text.34.text, id_text.35.text, id_text.36.text, id_text.37.text, id_text.38.text, id_text.39.text",
        theme : "advanced",
        plugins : "advimage,advlink,insertdatetime,searchreplace, paste, safari",
        theme_advanced_buttons1_add : "fontselect,fontsizeselect",
        theme_advanced_buttons2_add : "separator,insertdate,inserttime,separator,forecolor,backcolor, seperator, pastetext, pasteword",
        theme_advanced_buttons2_add_before: "search,replace,separator",
        theme_advanced_buttons3 : "",
        theme_advanced_toolbar_location : "top",
        theme_advanced_toolbar_align : "left",
        theme_advanced_path_location : "bottom",
        plugin_insertdate_dateFormat : "%Y-%m-%d",
        plugin_insertdate_timeFormat : "%H:%M:%S",
        extended_valid_elements : "a[name|href|target|title|onclick],img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name],hr[class|width|size|noshade],font[face|size|color|style],span[class|align|style],blockquote[class],textarea[name|class|cols|rows]",
        theme_advanced_resize_horizontal : false,
        theme_advanced_resizing : true,
        remove_linebreaks: false,
        width: "700",
        height: "500"
});
