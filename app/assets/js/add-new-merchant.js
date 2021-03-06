/* ------------------------------------------------------------------------------
 *
 *  # Color pickers
 *
 *  Demo JS code for picker_color.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var ColorPicker = function() {


    //
    // Setup module components
    //

    // Location picker
    var _componentColorPicker = function() {
        if (!$().spectrum) {
            console.warn('Warning - spectrum.js is not loaded.');
            return;
        }

        // Color palette
        var demoPalette = [
            ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
            ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
            ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
            ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
            ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
            ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
            ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
            ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
        ]


        // Basic examples
        // ------------------------------

        // Basic setup
        $('.colorpicker-basic').spectrum();

        // Clear selection
        $('.colorpicker-clear').spectrum({
            allowEmpty: true
        });

        // Display color formats
        $('.colorpicker-show-input').spectrum({
            showInput: true
        });

        // Display alpha channel
        $('.colorpicker-show-alpha').spectrum({
            showAlpha: true
        });

        // Display initial color
        $('.colorpicker-show-initial').spectrum({
            showInitial: true
        });

        // Display input and initial color
        $('.colorpicker-input-initial').spectrum({
            showInitial: true,
            showInput: true
        });

        // Full featured color picker
        $('.colorpicker-full').spectrum({
            showInitial: true,
            showInput: true,
            showAlpha: true,
            allowEmpty: true
        });

        // Container color
        $('.colorpicker-container-class').spectrum({
            containerClassName: 'bg-green-400'
        });

        // Replacer color
        $('.colorpicker-replacer-class').spectrum({
            replacerClassName: 'bg-green-400',
        });


        //
        // Toggle picker state
        //

        // Initialize
        $('.colorpicker-disabled').spectrum({
            disabled: true
        });


        // Flat pickers
        // ------------------------------

        // Basic setup
        $('.colorpicker-flat').spectrum({
            flat: true
        });

        // Display input field
        $('.colorpicker-flat-input').spectrum({
            flat: true,
            showInput: true
        });

        // Set picker color
        $('.colorpicker-flat-custom').spectrum({
            flat: true,
            containerClassName: 'bg-slate'
        });

        // Display color palette
        $('.colorpicker-flat-palette').spectrum({
            flat: true,
            showPalette: true,
            showPaletteOnly: true,
            togglePaletteOnly: true,
            togglePaletteMoreText: 'More',
            togglePaletteLessText: 'Less',
            palette: demoPalette
        });

        // Display initial color
        $('.colorpicker-flat-initial').spectrum({
            flat: true,
            showInitial: true
        });

        // Full featued flat picker
        $('.colorpicker-flat-full').spectrum({
            flat: true,
            showInitial: true,
            showInput: true,
            showAlpha: true,
            allowEmpty: true
        });


        // Color palettes
        // ------------------------------

        // Display color palette
        $('.colorpicker-palette').spectrum({
            showPalette: true,
            palette: demoPalette
        });

        // Display palette only
        $('.colorpicker-palette-only').spectrum({
            showPalette: true,
            showPaletteOnly: true,
            palette: demoPalette
        });

        // Toggle palette
        $('.colorpicker-palette-toggle').spectrum({
            showPalette: true,
            showPaletteOnly: true,
            togglePaletteOnly: true,
            togglePaletteMoreText: 'More',
            togglePaletteLessText: 'Less',
            palette: demoPalette
        });

        // Selection palette
        $('.colorpicker-palette-selection').spectrum({
            showPalette: true,
            palette: [],
            localStorageKey: 'spectrum.homepage'
        });

        // Limit number of selections
        $('.colorpicker-palette-limit').spectrum({
            showPalette: true,
            palette: [ ],
            selectionPalette: ['red', 'green', 'blue'],
            maxSelectionSize: 3
        });

        // Hide after select
        $('.colorpicker-palette-hide').spectrum({
            showPalette: true,
            hideAfterPaletteSelect: true,
            palette: demoPalette
        });


        // Events
        // ------------------------------

        // Change event
        $('.colorpicker-event-change').spectrum({
            change: function(c) {
                var label = $('#change-result');
                label.removeClass('hidden').html('Change called: ' + '<span class="font-weight-semibold">' + c.toHexString() + '</span>');
            }
        });

        // Move event
        $('.colorpicker-event-move').spectrum({
            move: function(c) {
                var label = $('#move-result');
                label.removeClass('hidden').html('Move called: ' + '<span class="font-weight-semibold">' + c.toHexString() + '</span>');
            }
        });

        // Hide event
        $('.colorpicker-event-hide').spectrum({
            hide: function(c) {
                var label = $('#hide-result');
                label.removeClass('hidden').html('Hide called: ' + '<span class="font-weight-semibold">' + c.toHexString() + '</span>');
            }
        });

        // Show event
        $('.colorpicker-event-show').spectrum({
            show: function(c) {
                var label = $('#show-result');
                label.removeClass('hidden').html('Show called: ' + '<span class="font-weight-semibold">' + c.toHexString() + '</span>');
            }
        });


        //
        // Drag start event
        //

        // Initialize
        $('.colorpicker-event-dragstart').spectrum();

        // Attach event
        $('.colorpicker-event-dragstart').on('dragstart.spectrum', function (e, c) {
            var label = $('#dragstart-result');
            label.removeClass('hidden').html('Dragstart called: ' + '<span class="font-weight-semibold">' + c.toHexString() + '</span>');
        });


        //
        // Drag stop event
        //

        // Initialize
        $('.colorpicker-event-dragstop').spectrum();

        // Attach event
        $('.colorpicker-event-dragstop').on('dragstop.spectrum', function (e, c) {
            var label = $('#dragstop-result');
            label.removeClass('hidden').html('Dragstop called: ' + '<span class="font-weight-semibold">' + c.toHexString() + '</span>');
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialization
        var toggleState = document.querySelector('.form-input-switchery');
        var toggleStateInit = new Switchery(toggleState);

        // Toggle navbar type state toggle
        toggleState.onchange = function() {
            if(toggleState.checked) {
                $('.colorpicker-disabled').spectrum('enable');
            }
            else {
                $('.colorpicker-disabled').spectrum('disable');
            }
        }
    };
    

    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentColorPicker();
            _componentSwitchery();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    ColorPicker.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Bootstrap multiple file uploader
 *
 *  Demo JS code for uploader_bootstrap.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FileUpload = function() {


    //
    // Setup module components
    //

    // Bootstrap file upload
    var _componentFileUpload = function() {
        if (!$().fileinput) {
            console.warn('Warning - fileinput.min.js is not loaded.');
            return;
        }

        //
        // Define variables
        //

        // Modal template
        var modalTemplate = '<div class="modal-dialog modal-lg" role="document">\n' +
            '  <div class="modal-content">\n' +
            '    <div class="modal-header align-items-center">\n' +
            '      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n' +
            '      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
            '    </div>\n' +
            '    <div class="modal-body">\n' +
            '      <div class="floating-buttons btn-group"></div>\n' +
            '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</div>\n';

        // Buttons inside zoom modal
        var previewZoomButtonClasses = {
            toggleheader: 'btn btn-light btn-icon btn-header-toggle btn-sm',
            fullscreen: 'btn btn-light btn-icon btn-sm',
            borderless: 'btn btn-light btn-icon btn-sm',
            close: 'btn btn-light btn-icon btn-sm'
        };

        // Icons inside zoom modal classes
        var previewZoomButtonIcons = {
            prev: '<i class="icon-arrow-left32"></i>',
            next: '<i class="icon-arrow-right32"></i>',
            toggleheader: '<i class="icon-menu-open"></i>',
            fullscreen: '<i class="icon-screen-full"></i>',
            borderless: '<i class="icon-alignment-unalign"></i>',
            close: '<i class="icon-cross2 font-size-base"></i>'
        };

        // File actions
        var fileActionSettings = {
            zoomClass: '',
            zoomIcon: '<i class="icon-zoomin3"></i>',
            dragClass: 'p-2',
            dragIcon: '<i class="icon-three-bars"></i>',
            removeClass: '',
            removeErrorClass: 'text-danger',
            removeIcon: '<i class="icon-bin"></i>',
            indicatorNew: '<i class="icon-file-plus text-success"></i>',
            indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
            indicatorError: '<i class="icon-cross2 text-danger"></i>',
            indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>'
        };


        //
        // Basic example
        //

        $('.file-input').fileinput({
            browseLabel: 'Browse',
            browseIcon: '<i class="icon-file-plus mr-2"></i>',
            uploadIcon: '<i class="icon-file-upload2 mr-2"></i>',
            removeIcon: '<i class="icon-cross2 font-size-base mr-2"></i>',
            allowedFileExtensions: ["jpg", "png"],
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>',
                modal: modalTemplate
            },
            initialCaption: "Error: File type not accepted",
            previewZoomButtonClasses: previewZoomButtonClasses,
            previewZoomButtonIcons: previewZoomButtonIcons,
            fileActionSettings: fileActionSettings
        });


        //
        // Custom layout
        //

        $('.file-input-custom').fileinput({
            previewFileType: 'image',
            browseLabel: 'Browse',
            browseClass: 'btn bg-green-400',
            browseIcon: '<i class="icon-image2 mr-2"></i>',
            removeLabel: 'Remove',
            removeClass: 'btn btn-danger',
            removeIcon: '<i class="icon-cancel-square mr-2"></i>',
            allowedFileExtensions: ["jpg", "png"],
            uploadClass: 'btn bg-teal-400',
            uploadIcon: '<i class="icon-file-upload mr-2"></i>',
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>',
                modal: modalTemplate
            },
            initialPreviewAsData: true,
            initialCaption: "Please select logo image",
            mainClass: 'input-group',
            previewZoomButtonClasses: previewZoomButtonClasses,
            previewZoomButtonIcons: previewZoomButtonIcons,
            fileActionSettings: fileActionSettings
        });


        //
        // Template modifications
        //

        $('.file-input-advanced').fileinput({
            browseLabel: 'Browse',
            browseClass: 'btn btn-light',
            removeClass: 'btn btn-light',
            uploadClass: 'btn bg-success-400',
            browseIcon: '<i class="icon-file-plus mr-2"></i>',
            uploadIcon: '<i class="icon-file-upload2 mr-2"></i>',
            removeIcon: '<i class="icon-cross2 font-size-base mr-2"></i>',
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>',
                main1: "{preview}\n" +
                    "<div class='input-group {class}'>\n" +
                    "   <div class='input-group-prepend'>\n" +
                    "       {browse}\n" +
                    "   </div>\n" +
                    "   {caption}\n" +
                    "   <div class='input-group-append'>\n" +
                    "       {upload}\n" +
                    "       {remove}\n" +
                    "   </div>\n" +
                    "</div>",
                modal: modalTemplate
            },
            initialCaption: "No file selected",
            previewZoomButtonClasses: previewZoomButtonClasses,
            previewZoomButtonIcons: previewZoomButtonIcons,
            fileActionSettings: fileActionSettings
        });


        //
        // Custom file extensions
        //

        $('.file-input-extensions').fileinput({
            browseLabel: 'Browse',
            browseIcon: '<i class="icon-file-plus mr-2"></i>',
            uploadIcon: '<i class="icon-file-upload2 mr-2"></i>',
            removeIcon: '<i class="icon-cross2 font-size-base mr-2"></i>',
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>',
                modal: modalTemplate
            },
            maxFilesNum: 10,
            allowedFileExtensions: ["jpg", "gif", "png", "txt"],
            initialCaption: "No file selected",
            previewZoomButtonClasses: previewZoomButtonClasses,
            previewZoomButtonIcons: previewZoomButtonIcons,
            fileActionSettings: fileActionSettings
        });


        //
        // Always display preview
        //

        $('.file-input-preview').fileinput({
            browseLabel: 'Browse',
            browseIcon: '<i class="icon-file-plus mr-2"></i>',
            uploadIcon: '<i class="icon-file-upload2 mr-2"></i>',
            removeIcon: '<i class="icon-cross2 font-size-base mr-2"></i>',
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>',
                modal: modalTemplate
            },
            initialPreview: [
                '../../../../global_assets/images/placeholders/placeholder.jpg'
            ],
            initialPreviewConfig: [
                {caption: 'Jane.jpg', size: 930321, key: 1, url: '{$url}', showDrag: false}
            ],
            initialPreviewAsData: true,
            overwriteInitial: false,
            maxFileSize: 100,
            previewZoomButtonClasses: previewZoomButtonClasses,
            previewZoomButtonIcons: previewZoomButtonIcons,
            fileActionSettings: fileActionSettings
        });


        //
        // Display preview on load
        //

        $('.file-input-overwrite').fileinput({
            browseLabel: 'Browse',
            browseIcon: '<i class="icon-file-plus mr-2"></i>',
            uploadIcon: '<i class="icon-file-upload2 mr-2"></i>',
            removeIcon: '<i class="icon-cross2 font-size-base mr-2"></i>',
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>',
                modal: modalTemplate
            },
            initialPreview: [
                '../../../../global_assets/images/placeholders/placeholder.jpg',
                '../../../../global_assets/images/placeholders/placeholder.jpg'
            ],
            initialPreviewConfig: [
                {caption: 'Jane.jpg', size: 930321, key: 1, url: '{$url}'},
                {caption: 'Anna.jpg', size: 1218822, key: 2, url: '{$url}'}
            ],
            initialPreviewAsData: true,
            overwriteInitial: true,
            previewZoomButtonClasses: previewZoomButtonClasses,
            previewZoomButtonIcons: previewZoomButtonIcons,
            fileActionSettings: fileActionSettings
        });


        //
        // AJAX upload
        //

        $('.file-input-ajax').fileinput({
            browseLabel: 'Browse',
            uploadUrl: "http://localhost", // server upload action
            uploadAsync: true,
            maxFileCount: 5,
            initialPreview: [],
            browseIcon: '<i class="icon-file-plus mr-2"></i>',
            uploadIcon: '<i class="icon-file-upload2 mr-2"></i>',
            removeIcon: '<i class="icon-cross2 font-size-base mr-2"></i>',
            fileActionSettings: {
                removeIcon: '<i class="icon-bin"></i>',
                uploadIcon: '<i class="icon-upload"></i>',
                uploadClass: '',
                zoomIcon: '<i class="icon-zoomin3"></i>',
                zoomClass: '',
                indicatorNew: '<i class="icon-file-plus text-success"></i>',
                indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
                indicatorError: '<i class="icon-cross2 text-danger"></i>',
                indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>',
            },
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>',
                modal: modalTemplate
            },
            initialCaption: 'No file selected',
            previewZoomButtonClasses: previewZoomButtonClasses,
            previewZoomButtonIcons: previewZoomButtonIcons
        });


        //
        // Misc
        //

        // Disable/enable button
        $('#btn-modify').on('click', function() {
            $btn = $(this);
            if ($btn.text() == 'Disable file input') {
                $('#file-input-methods').fileinput('disable');
                $btn.html('Enable file input');
                alert('Hurray! I have disabled the input and hidden the upload button.');
            }
            else {
                $('#file-input-methods').fileinput('enable');
                $btn.html('Disable file input');
                alert('Hurray! I have reverted back the input to enabled with the upload button.');
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFileUpload();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FileUpload.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Tag inputs
 *
 *  Demo JS code for form_tag_inputs.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var TagInputs = function() {


    //
    // Setup module components
    //

    // Tokenfield
    var _componentTokenfield = function() {
        if (!$().tokenfield) {
            console.warn('Warning - tokenfield.min.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.tokenfield').tokenfield();

        // Create token on blur
        $('.tokenfield-blur').tokenfield({
            createTokensOnBlur: true
        });

        // Custom delimiter
        $('.tokenfield-delimiter').tokenfield({
            delimiter: ';'
        });


        //
        // Primary color
        //

        // Add class on init
        $('.tokenfield-primary').on('tokenfield:initialize', function (e) {
            $(this).parent().find('.token').addClass('bg-primary text-white');
        });

        // Initialize plugin
        $('.tokenfield-primary').tokenfield();

        // Add class when token is created
        $('.tokenfield-primary').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-primary text-white');
        });


        //
        // Teal color
        //

        // Add class on init
        $('.tokenfield-teal').on('tokenfield:initialize', function (e) {
            $(this).parent().find('.token').addClass('bg-teal text-white');
        });

        // Initialize plugin
        $('.tokenfield-teal').tokenfield();

        // Add class when token is created
        $('.tokenfield-teal').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-teal text-white');
        });


        //
        // Success color
        //

        // Add class on init
        $('.tokenfield-success').on('tokenfield:initialize', function (e) {
            $(this).parent().addClass('border-success');
            $(this).parent().find('.token').addClass('bg-success text-white');
        });

        // Initialize plugin
        $('.tokenfield-success').tokenfield();

        // Add class when token is created
        $('.tokenfield-success').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-success text-white');
        });


        //
        // Danger color
        //

        // Add class on init
        $('.tokenfield-danger').on('tokenfield:initialize', function (e) {
            $(this).parent().addClass('border-danger');
            $(this).parent().find('.token').addClass('bg-danger text-white');
        });

        // Initialize plugin
        $('.tokenfield-danger').tokenfield();

        // Add class when token is created
        $('.tokenfield-danger').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-danger text-white');
        });


        //
        // Typeahead support
        //

        // Use Bloodhound engine
        var engine = new Bloodhound({
            local: [
                {value: 'red'},
                {value: 'blue'},
                {value: 'green'} ,
                {value: 'yellow'},
                {value: 'violet'},
                {value: 'brown'},
                {value: 'purple'},
                {value: 'black'},
                {value: 'white'}
            ],
            datumTokenizer: function(d) {
                return Bloodhound.tokenizers.whitespace(d.value);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace
        });

        // Initialize engine
        engine.initialize();

        // Initialize tokenfield
        $('.tokenfield-typeahead').tokenfield({
            typeahead: [null, {
                displayKey: 'value',
                source: engine.ttAdapter()
            }]
        });


        //
        // Set tokens method
        //

        $('#set-tokens').on('click', function() {
            $('#set-tokens-field').tokenfield('setTokens', ['blue','red','white']);
        });


        //
        // Get tokens method
        //

        $('#get-tokens').on('click', function() {
            var tokens = $('#get-tokens-field').tokenfield('getTokensList');
            alert(tokens);
        });


        //
        // Create tokens method
        //

        $('#create-token').on('click', function() {
            $('#create-token-field').tokenfield('createToken', { value: 'new', label: 'New token' });
        });


        //
        // Disable, enable
        //

        // Initialize plugin
        $('.tokenfield-disable').tokenfield();

        // Disable on click
        $('#disable').on('click', function() {
            $('.tokenfield-disable').tokenfield('disable');
        });

        // Enabe on click
        $('#enable').on('click', function() {
            $('.tokenfield-disable').tokenfield('enable');
        });


        //
        // Readonly, writeable
        //

        // Initialize plugin
        $('.tokenfield-readonly').tokenfield();

        // Readonly on click
        $('#readonly').on('click', function() {
            $('.tokenfield-readonly').tokenfield('readonly');
        });

        // Writeable on click
        $('#writeable').on('click', function() {
            $('.tokenfield-readonly').tokenfield('writeable');
        });


        //
        // Destroy, create
        //

        // initialize plugin
        $('.tokenfield-destroy').tokenfield();

        // Destroy on click
        $('#destroy').on('click', function() {
            $('.tokenfield-destroy').removeAttr('data-fouc').tokenfield('destroy');
        });

        // Create on click
        $('#create').on('click', function() {
            $('.tokenfield-destroy').tokenfield();
        });
    };

    // Tags input
    var _componentTagsinput = function() {
        if (!$().tagsinput) {
            console.warn('Warning - tagsinput.min.js is not loaded.');
            return;
        }

        // Display values
        $('.tags-input, [data-role="tagsinput"], .tagsinput-max-tags, .tagsinput-custom-tag-class').on('change', function(event) {
            var $element = $(event.target),
                $container = $element.parent().parent('.mb-3');

            if (!$element.data('tagsinput'))
            return;

            var val = $element.val();
            if (val === null)
            val = "null";
        
            $('pre.val > code', $container).html( ($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\"") );
            $('pre.items > code', $container).html(JSON.stringify($element.tagsinput('items')));
            Prism.highlightAll();
        }).trigger('change');



        // Basic examples
        // ------------------------------

        // Basic initialization
        $('.tags-input').tagsinput();


        // Allow dublicates
        $('.tags-input-dublicates').tagsinput({
            allowDuplicates: true
        });


        // Set maximum allowed tags
        $('.tagsinput-max-tags').tagsinput({
            maxTags: 5
        });


        // Custom tag class
        $('.tagsinput-custom-tag-class').tagsinput({
            tagClass: function(item){
                return 'bg-success text-white';
            }
        });


        //
        // Typeahead implementation
        //

        // Use Bloodhound engine
        var citynames = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: {
                url: '../../../../global_assets/demo_data/tags_input/citynames.json',
                filter: function(list) {
                    return $.map(list, function(cityname) {
                    return { name: cityname }; });
                }
            }
        });

        // Initialize
        citynames.initialize();

        // Attach typeahead
        $('.tagsinput-typeahead').tagsinput({
            typeaheadjs: {
                name: 'citynames',
                displayKey: 'name',
                valueKey: 'name',
                source: citynames.ttAdapter()
            }
        });


        //
        // Objects as tags
        //

        // Use Bloodhound engine
        var countries = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {
                url: '../../../../global_assets/demo_data/tags_input/cities.json'
            }
        });

        // Kicks off the loading/processing of `local` and `prefetch`
        countries.initialize();

        // Define element
        var elt = $('.tagsinput-tag-objects');

        // Initialize
        elt.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'countries',
                displayKey: 'text',
                source: countries.ttAdapter()
            }
        });

        // Add data
        elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
        elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
        elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
        elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
        elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });


        //
        // Categorize tags
        //

        // Use Bloodhound engine
        var continents = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('continent'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {
                url: '../../../../global_assets/demo_data/tags_input/cities.json'
            }
        });

        // Kicks off the loading/processing of `local` and `prefetch`
        continents.initialize();

        // Define element
        var elt2 = $('.tagsinput-tag-categorizing');

        // Initialize
        elt2.tagsinput({
            tagClass: function(item) {
                switch (item.continent) {
                    case 'Europe'   : return 'text-white bg-indigo-400';
                    case 'America'  : return 'text-white bg-danger';
                    case 'Australia': return 'text-white bg-success';
                    case 'Africa'   : return 'text-white bg-primary';
                    case 'Asia'     : return 'text-white bg-pink-400';
                }
            },
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'continents',
                displayKey: 'text',
                source: continents.ttAdapter()
            }
        });

        // Add data
        elt2.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
        elt2.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
        elt2.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
        elt2.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
        elt2.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });


        //
        // Methods
        //

        // Define elements
        var tagsMethods = $('.tagsinput-add-tag, .tagsinput-remove-tag, .tagsinput-remove-tags, .tagsinput-destroy, .tagsinput-refresh');

        // Initialize
        tagsMethods.tagsinput({
            itemValue: 'id',
            itemText: 'text'
        });

        // Add values
        tagsMethods.tagsinput('add', {id: 1, text: 'Amsterdam'});
        tagsMethods.tagsinput('add', {id: 2, text: 'Washington'});
        tagsMethods.tagsinput('add', {id: 3, text: 'Sydney'});

        // "Add" methos
        $('.add-tag-button').on('click', function() {
            $('.tagsinput-add-tag').tagsinput('add', {id: 4, text: 'Beijing'});
            $(this).addClass('disabled');
        });

        // "Remove" method
        $('.remove-tag-button').on('click', function() {
            $('.tagsinput-remove-tag').tagsinput('remove', {id: 3, text: 'Sydney'});
            $(this).addClass('disabled');
        });

        // "Remove all" method
        $('.remove-all-tags-button').on('click', function() {
            $('.tagsinput-remove-tags').tagsinput('removeAll');
            $(this).addClass('disabled');
        });

        // "Destroy" method
        $('.destroy-tagsinput-button').on('click', function() {
            $('.tagsinput-destroy').removeAttr('data-fouc').tagsinput('destroy');
            $(this).addClass('disabled');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentTokenfield();
            _componentTagsinput();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    TagInputs.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Bootstrap multiselect
 *
 *  Demo JS code for form_multiselect.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var BootstrapMultiselect = function() {


    //
    // Setup module components
    //

    // Default file input style
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }


        // Basic examples
        // ------------------------------

        // Basic initialization
        $('.multiselect').multiselect();

        // Limit options number
        $('.multiselect-number').multiselect({
            numberDisplayed: 1
        });

        // Custom empty text
        $('.multiselect-nonselected-text').multiselect({
            nonSelectedText: 'Please choose'
        });

        // Select All option
        $('.multiselect-select-all').multiselect({
            includeSelectAllOption: true
        });

        // Enable filtering
        $('.multiselect-filtering').multiselect({
            enableFiltering: true,
            includeSelectAllOption: true,
            enableCaseInsensitiveFiltering: true
        });

        // Select All and Filtering features
        $('.multiselect-select-all-filtering').multiselect({
            includeSelectAllOption: true,
            enableFiltering: true,
            enableCaseInsensitiveFiltering: true
        });

        // Linked button style
        $('.multiselect-link').multiselect({
            buttonClass: 'btn btn-link'
        });

        // Clickable optgroups
        $('.multiselect-clickable-groups').multiselect({
            enableClickableOptGroups: true
        });

        // Disable if empty
        $('.multiselect-disable-empty').multiselect({
            disableIfEmpty: true
        });

        // Menu background color
        $('.multiselect-menu-bg-color').multiselect({
            templates: {
                ul: '<div class="multiselect-container bg-teal-400 dropdown-menu"></div>'
            }
        });

        // Combined colors
        $('.multiselect-combine-all').multiselect({
            buttonClass: 'btn bg-slate',
            templates: {
                ul: '<div class="multiselect-container bg-slate dropdown-menu"></div>'
            }
        });

        // Full featured example
        $('.multiselect-full-featured').multiselect({
            includeSelectAllOption: true,
            enableFiltering: true
        });

        // With max height
        $('.multiselect-max-height').multiselect({
            maxHeight: 200
        });

        // Prevent deselect
        var $preventDeselectElement = $('.multiselect-prevent-deselect');
        $preventDeselectElement.multiselect({
            onChange: function(option, checked) {
                if (checked === false) {
                    $preventDeselectElement.multiselect('select', option.val());
                }
            }
        });

        // Remove active option class
        $('.multiselect-no-active-class').multiselect({
            selectedClass: null
        });



        // Events
        // ------------------------------

        // onChange
        $('.multiselect-onchange-notice').multiselect({
            onChange: function(element, checked){
                new PNotify({
                    text: '<code>onChange</code> callback fired.',
                    addclass: 'bg-teal border-teal'
                });
            }
        });

        // onChange desktop
        $('.multiselect-onchange-desktop').multiselect({
            onChange:function(element, checked){
                PNotify.desktop.permission();
                (new PNotify({
                    title: 'Desktop Notice',
                    text: 'onChange callback desktop notification.',
                    desktop: {
                        desktop: true,
                        addclass: 'bg-blue',
                        icon: 'assets/images/pnotify/info.png'
                    }
                })).get().on('click', function(e) {
                    if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)) return;
                    alert('Hey! You clicked the desktop notification!');
                });
            }
        });

        // onShow
        $('.multiselect-show-event').multiselect({
            onDropdownShow: function() {
                new PNotify({
                    text: '<code>onDropdownShow</code> event fired.',
                    addclass: 'bg-teal border-teal'
                });
            }
        });

        // onHide
        $('.multiselect-hide-event').multiselect({
            onDropdownHide: function() {
                new PNotify({
                    text: '<code>onDropdownHide</code> event fired.',
                    addclass: 'bg-teal border-teal'
                });
            }
        });



        // Methods
        // ------------------------------

        //
        // Create and destroy
        //

        // Initialize
        $('.multiselect-method-destroy').multiselect();

        // Destroy
        $('.multiselect-destroy-button').on('click', function() {
            $('.multiselect-method-destroy').multiselect('destroy');
        });

        // Create
        $('.multiselect-create-button').on('click', function() {
            $('.multiselect-method-destroy').multiselect();
        });


        //
        // Refresh
        //

        // Initialize
        $('.multiselect-method-refresh').multiselect();

        // Select option
        $('.multiselect-select-button').on('click', function() {
            
            $('option[value="tomatoes"]', $('.multiselect-method-refresh')).attr('selected', 'selected');
            $('option[value="tomatoes"]', $('.multiselect-method-refresh')).prop('selected', true);
            
            $('option[value="mushrooms"]', $('.multiselect-method-refresh')).prop('selected', true);
            $('option[value="mushrooms"]', $('.multiselect-method-refresh')).attr('selected', 'selected');
            
            $('option[value="onions"]', $('.multiselect-method-refresh')).prop('selected', true);
            $('option[value="onions"]', $('.multiselect-method-refresh')).attr('selected', 'selected');

            alert('Selected Tomatoes, Mushrooms and Onions.');
        });

        // Deselect
        $('.multiselect-deselect-button').on('click', function() {
            $('option', $('.multiselect-method-refresh')).each(function(element) {
                $(this).removeAttr('selected').prop('selected', false);
            });
        });

        // Refresh
        $('.multiselect-refresh-button').on('click', function() {
            $('.multiselect-method-refresh').multiselect('refresh');
        });


        //
        // Rebuild
        //

        // Initialize
        $('.multiselect-method-rebuild').multiselect();

        // Add option
        $('.multiselect-add-button').on('click', function() {
            $('.multiselect-method-rebuild').append('<option value="add1">Addition 1</option><option value="add2">Addition 2</option><option value="add3">Addition 3</option>');
        });

        // Remove option
        $('.multiselect-delete-button').on('click', function() {
            $('option[value="add1"]', $('.multiselect-method-rebuild')).remove();
            $('option[value="add2"]', $('.multiselect-method-rebuild')).remove();
            $('option[value="add3"]', $('.multiselect-method-rebuild')).remove();
        });

        // Rebuild menu
        $('.multiselect-rebuild-button').on('click', function() {
            $('.multiselect-method-rebuild').multiselect('rebuild');
        });


        //
        // Select
        //

        // Initialize
        $('.multiselect-method-select').multiselect();

        // Select first option
        $('.multiselect-select-cheese-button').on('click', function() {
            $('.multiselect-method-select').multiselect('select', 'cheese');
        });

        // Select second option
        $('.multiselect-select-onions-button').on('click', function() {
            $('.multiselect-method-select').multiselect('select', 'onions');
        });


        //
        // Deselect
        //

        // Initialize
        $('.multiselect-method-deselect').multiselect();

        // Deselect first option
        $('.multiselect-deselect-cheese-button').on('click', function() {
            $('.multiselect-method-deselect').multiselect('deselect', 'cheese');
        });

        // Deselect second option
        $('.multiselect-deselect-onions-button').on('click', function() {
            $('.multiselect-method-deselect').multiselect('deselect', 'onions');
        });


        //
        // Disable
        //

        // Initialize
        $('.multiselect-method-disable').multiselect();

        // Enable
        $('.multiselect-enable1-button').on('click', function() {
            $('.multiselect-method-disable').multiselect('enable');
        });

        // Disable
        $('.multiselect-disable1-button').on('click', function() {
            $('.multiselect-method-disable').multiselect('disable');
        });


        //
        // Enable
        //

        // Initialize
        $('.multiselect-method-enable').multiselect();

        // Enable
        $('.multiselect-enable2-button').on('click', function() {
            $('.multiselect-method-enable').multiselect('enable');
        });

        // Disable
        $('.multiselect-disable2-button').on('click', function() {
            $('.multiselect-method-enable').multiselect('disable');
        });



        // Advanced examples
        // ------------------------------

        // Simulate selections
        $('.multiselect-simulate-selections').multiselect({
            onChange: function(option, checked) {
                var values = [];
                $('.multiselect-simulate-selections option').each(function() {
                    if ($(this).val() !== option.val()) {
                        values.push($(this).val());
                    }
                });

                $('.multiselect-simulate-selections').multiselect('deselect', values);
            }
        });

        // Close dropdown automaticallywhen options are selected
        $('.multiselect-close-dropdown').multiselect({
            onChange: function(option, checked) {
                var selected = 0;
                $('option', $('.multiselect-close-dropdown')).each(function() {
                    if ($(this).prop('selected')) {
                        selected++;
                    }
                });

                if (selected >= 3) {
                    $('.multiselect-close-dropdown').siblings('div').children('.dropdown-menu').dropdown('toggle');
                }
            }
        });

        // Templates
        $('.multiselect-templates').multiselect({
            templates: {
                divider: '<div class="multiselect-item dropdown-divider border-danger"></div>'
            }
        });


        //
        // Display values
        //

        // Initialize
        $('.multiselect-display-values').multiselect();

        // Select options
        $('.multiselect-display-values-select').on('click', function() {
            $('.multiselect-display-values').multiselect('select', 'cheese');
            $('.multiselect-display-values').multiselect('select', 'tomatoes');

            $('.values-area').addClass('alert alert-info').text('Selected: ' + $('.multiselect-display-values').val().join(', '));
        });

        // Deselect options
        $('.multiselect-display-values-deselect').on('click', function() {
            $('.multiselect-display-values').multiselect('deselect', 'cheese');
            $('.multiselect-display-values').multiselect('deselect', 'tomatoes');

            $('.values-area').addClass('alert alert-info').text('Selected: ' + $('.multiselect-display-values').val() > 0 ? $('.multiselect-display-values').val().join(', ') : 'Nothing selected');
        });


        //
        // Toggle selection
        //

        // Select all/Deselect all
        function multiselect_selected($el) {
            var ret = true;
            $('option', $el).each(function(element) {
                if (!!!$(this).prop('selected')) {
                    ret = false;
                }
            });
            return ret;
        }
        function multiselect_selectAll($el) {
            $('option', $el).each(function(element) {
                $el.multiselect('select', $(this).val());
            });
        }
        function multiselect_deselectAll($el) {
            $('option', $el).each(function(element) {
                $el.multiselect('deselect', $(this).val());
            });
        }
        function multiselect_toggle($el, $btn) {
            if (multiselect_selected($el)) {
                multiselect_deselectAll($el);
                $btn.text('Select All');
            }
            else {
                multiselect_selectAll($el);
                $btn.text('Deselect All');
            }
        }

        // Initialize
        $('.multiselect-toggle-selection').multiselect();

        // Toggle selection on button click
        $('.multiselect-toggle-selection-button').on('click', function(e) {
            e.preventDefault();
            multiselect_toggle($('.multiselect-toggle-selection'), $(this));
        });


        //
        // Order options
        //

        var orderCount = 0;

        // Initialize
        $('.multiselect-order-options').multiselect({
            buttonText: function(options) {
                if (options.length == 0) {
                    return 'None selected';
                }
                else if (options.length > 3) {
                    return options.length + ' selected';
                }
                else {
                    var selected = [];
                    options.each(function() {
                        selected.push([$(this).text(), $(this).data('order')]);
                    });

                    selected.sort(function(a, b) {
                        return a[1] - b[1];
                    });

                    var text = '';
                    for (var i = 0; i < selected.length; i++) {
                        text += selected[i][0] + ', ';
                    }

                    return text.substr(0, text.length -2);
                }
            },
            onChange: function(option, checked) {
                if (checked) {
                    orderCount++;
                    $(option).data('order', orderCount);
                }
                else {
                    $(option).data('order', '');
                }
            }
        });
     
        // Order selected options on button click
        $('.multiselect-order-options-button').on('click', function() {
            var selected = [];
            $('.multiselect-order-options option:selected').each(function() {
                selected.push([$(this).val(), $(this).data('order')]);
            });

            selected.sort(function(a, b) {
                return a[1] - b[1];
            });

            var text = '';
            for (var i = 0; i < selected.length; i++) {
                text += selected[i][0] + ', ';
            }
            text = text.substring(0, text.length - 2);

            alert(text);
        });


        //
        // Reset selections
        //

        // Initialize
        $('.multiselect-reset').multiselect();

        // Reset using reset button
        $('#multiselect-reset-form').on('reset', function() {
            $('.multiselect-reset option:selected').each(function() {
                $(this).prop('selected', false);
            })

            $('.multiselect-reset').multiselect('refresh');
        });
    };

    // Uniform
    var _componentUniform = function(element) {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-control-styled').uniform();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentMultiselect();
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    BootstrapMultiselect.init();
});



/* ------------------------------------------------------------------------------
 *
 *  # Noty and jGrowl notifications
 *
 *  Demo JS code for extra_jgrowl_noty.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var NotyJgrowl = function() {


    //
    // Setup module components
    //

    // Noty.js examples
    var _componentNoty = function() {
        if (typeof Noty == 'undefined') {
            console.warn('Warning - noty.min.js is not loaded.');
            return;
        }

        // Override Noty defaults
        Noty.overrideDefaults({
            theme: 'limitless',
            layout: 'topRight',
            type: 'alert',
            timeout: 2500
        });


        //
        // Notification types
        //

        // Error
        $('#noty_error').on('click', function() {
            new Noty({
                text: 'Change a few things up and try submitting again.',
                type: 'error'
            }).show();
        });

        // Success
        $('#noty_saved_changes').on('click', function() {
            new Noty({
                text: 'Success! Your changes have been saved.',
                type: 'success'
            }).show();
        });

        // Success
        $('#noty_refund_success').on('click', function() {
            new Noty({
                text: 'The order was successfully updated with CRM actions.',
                type: 'success'
            }).show();
        });

        // Success
        $('#noty_new_user_added').on('click', function() {
            new Noty({
                text: 'New user has been added.',
                type: 'success'
            }).show();
        });

        // Success
        $('.noty_user_removed').on('click', function() {
            new Noty({
                text: 'User has been removed.',
                type: 'success'
            }).show();
        });

        // Success
        $('#noty_upload_success').on('click', function() {
            new Noty({
                text: 'The PDF was successfully uploaded. The chargeback has been move to "Pending" and is awaiting results.',
                type: 'success'
            }).show();
        });

        // Success
        $('#noty_new_prevention_account').on('click', function() {
            new Noty({
                text: 'Success! The merchant has been created.',
                type: 'success'
            }).show();
        });

        // Success
        $('#noty_new_merchant').on('click', function() {
            new Noty({
                text: 'Success! The prevention account has been added.',
                type: 'success'
            }).show();
        });

        // Success
        $('#noty_delete_success').on('click', function() {
            new Noty({
                text: 'The template has been deleted.',
                type: 'success'
            }).show();
        });

        // Success
        $('#noty_not_found_success').on('click', function() {
            new Noty({
                text: 'The order was marked as "Not Found" and can be viewed on the completed tab.' ,
                type: 'success'
            }).show();
        });

        // Warning
        $('#noty_warning').on('click', function() {
            new Noty({
                text: 'Warning! Best check yo self, you\'re not looking too good.',
                type: 'warning'
            }).show();
        });

        // Info
        $('#noty_info').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });

        // Alert
        $('#noty_alert').on('click', function() {
            new Noty({
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });

        // Confirmation
        $('#noty_confirm').on('click', function() {
            var notyConfirm = new Noty({
                text: '<h6 class="mb-3">Please confirm your action</h6><label>Enter comment (optional)</label> <input type="text" class="form-control" placeholder="Enter comment">',
                timeout: false,
                modal: true,
                layout: 'center',
                closeWith: 'button',
                type: 'confirm',
                buttons: [
                    Noty.button('Cancel', 'btn btn-link', function () {
                        notyConfirm.close();
                    }),

                    Noty.button('Submit <i class="icon-paperplane ml-2"></i>', 'btn bg-blue ml-1', function () {
                            alert('Submitted!');
                            notyConfirm.close();
                        },
                        {id: 'button1', 'data-status': 'ok'}
                    )
                ]
            }).show();
        });


        //
        // Top position
        //

        // Top
        $('#noty_top').on('click', function() {
            new Noty({
                layout: 'top',
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });

        // Left
        $('#noty_top_left').on('click', function() {
            new Noty({
                layout: 'topLeft',
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });

        // Center
        $('#noty_top_center').on('click', function() {
            new Noty({
                layout: 'topCenter',
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });

        // Right (default)
        $('#noty_top_right').on('click', function() {
            new Noty({
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });


        //
        // Center position
        //

        // Left
        $('#noty_center_left').on('click', function() {
            new Noty({
                layout: 'centerLeft',
                text: 'You successfully read this important alert message.',
                type: 'success'
            }).show();
        });

        // Center
        $('#noty_center').on('click', function() {
            new Noty({
                layout: 'center',
                text: 'You successfully read this important alert message.',
                type: 'success'
            }).show();
        });

        // Right
        $('#noty_center_right').on('click', function() {
            new Noty({
                layout: 'centerRight',
                text: 'You successfully read this important alert message.',
                type: 'success'
            }).show();
        });


        //
        // Bottom position
        //

        // Bottom
        $('#noty_bottom').on('click', function() {
            new Noty({
                layout: 'bottom',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });

        // Left
        $('#noty_bottom_left').on('click', function() {
            new Noty({
                layout: 'bottomLeft',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });

        // Center
        $('#noty_bottom_center').on('click', function() {
            new Noty({
                layout: 'bottomCenter',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });

        // Right (default)
        $('#noty_bottom_right').on('click', function() {
            new Noty({
                layout: 'bottomRight',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });


        //
        // Other examples
        //

        // Overlay
        $('#noty_overlay').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                modal: true
            }).show();
        });

        // Sticky
        $('#noty_sticky').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                timeout: false
            }).show();
        });

        // Close button
        $('#noty_close').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                closeWith: ['button']
            }).show();
        });

        // No progress
        $('#noty_progress').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                progressBar: false
            }).show();
        });

        // Styled
        $('#noty_styled').on('click', function() {
            new Noty({
                theme: ' alert alert-danger alert-styled-left p-0',
                text: 'Change a few things up and try submitting again.',
                type: 'error',
                progressBar: false,
                closeWith: ['button']
            }).show();
        });

        // Styled with white background
        $('#noty_styled_white').on('click', function() {
            new Noty({
                theme: ' alert alert-success alert-styled-left p-0 bg-white',
                text: 'You successfully read this important alert message.',
                type: 'success',
                progressBar: false,
                closeWith: ['button']
            }).show();
        });

        // Solid styled
        $('#noty_solid_styled').on('click', function() {
            new Noty({
                theme: ' alert bg-info text-white alert-styled-left p-0',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                progressBar: false,
                closeWith: ['button']
            }).show();
        });
    };

    // jGrowl examples
    var _componentJgrowl = function() {
        if (!$().jGrowl) {
            console.warn('Warning - jgrowl.min.js is not loaded.');
            return;
        }

        // Defaults override - hide "close all" button
        $.jGrowl.defaults.closer = false;


        //
        // Contextual options
        //

        // Solid color theme
        $('#jgrowl-default').on('click', function () {
            $.jGrowl('We are glad to see you again', {
                header: 'Good morning!',
                theme: 'bg-primary'
            });
        });

        // Danger notification
        $('#jgrowl-danger').on('click', function () {
            $.jGrowl('Change a few things up and try submitting again', {
                header: 'Oh snap!',
                theme: 'bg-danger'
            });
        });

        // Success notification
        $('#jgrowl-success').on('click', function () {
            $.jGrowl('You successfully read this important alert message', {
                header: 'Well done!',
                theme: 'bg-success'
            });
        });

        // Warning notification
        $('#jgrowl-warning').on('click', function () {
            $.jGrowl('Better check yourself, you\'re not looking too good', {
                header: 'Attention Here!',
                theme: 'bg-warning'
            });
        });

        // Info notification
        $('#jgrowl-info').on('click', function () {
            $.jGrowl('This alert needs your attention, but it\'s not super important.', {
                header: 'Heads up!',
                theme: 'bg-info'
            });
        });


        //
        // Notification styling
        //

        // Solid left
        $('#jgrowl-solid-styled-left').on('click', function () {
            $.jGrowl('Solid color notification with left icon', {
                header: 'Left icon',
                theme: 'alert-styled-left bg-danger'
            });
        });

        // Solid right
        $('#jgrowl-solid-styled-right').on('click', function () {
            $.jGrowl('Solid color notification with right icon', {
                header: 'Right icon',
                theme: 'alert-styled-right bg-info'
            });
        });

        // Solid custom
        $('#jgrowl-solid-custom-styled').on('click', function () {
            $.jGrowl('Notification with custom colors', {
                header: 'Custom styling',
                theme: 'bg-teal alert-styled-left alert-styled-custom'
            });
        });


        // Styled left
        $('#jgrowl-styled-left').on('click', function () {
            $.jGrowl('Notification with left contextual icon', {
                header: 'Left icon',
                theme: 'alert-bordered alert-styled-left alert-danger'
            });
        });

        // Styled right
        $('#jgrowl-styled-right').on('click', function () {
            $.jGrowl('Notification with right contextual icon', {
                header: 'Right icon',
                theme: 'alert-bordered alert-styled-right alert-danger'
            });
        });

        // Custom style
        $('#jgrowl-custom-styled').on('click', function () {
            $.jGrowl('Notification with custom style', {
                header: 'Custom style',
                theme: 'alert-styled-left alert-styled-custom alpha-teal text-teal-900 border-teal'
            });
        });

        // Styled with arrow
        $('#jgrowl-styled-arrow').on('click', function () {
            $.jGrowl('Styled alert with arrow', {
                header: 'Styled with arrow',
                theme: 'alert-styled-left alert-arrow-left alert-primary'
            });
        });


        // Rounded
        $('#jgrowl-rounded').on('click', function () {
            $.jGrowl('Alert with rounded corners', {
                theme: 'bg-primary alert-rounded'
            });
        });

        // Basic style
        $('#jgrowl-alert-default').on('click', function () {
            $.jGrowl('Default alert style example', {
                header: 'Default alert style',
                theme: 'alert-bordered alert-primary'
            });
        });


        //
        // Options
        //

        // Sticky notification
        $('#jgrowl-sticky').on('click', function () {
            $.jGrowl('I am a sticky message', {
                header: 'Sticky message',
                sticky: true,
                theme: 'bg-slate-600'
            });
        });

        // Long life message
        $('#jgrowl-long-life').on('click', function () {
            $.jGrowl('A message that will live a little longer.', {
                header: 'Long life message',
                life: 10000,
                theme: 'bg-slate-600'
            });
        });

        // Callbacks
        $('#jgrowl-callbacks').on('click', function () {
            $.jGrowl('Check out your console', {
                theme: 'bg-slate-600',
                life: 5000,
                header: 'Callbacks',
                beforeOpen: function(e,m,o) {
                    console.log("I am going to be opened!", this);
                },
                afterOpen: function(e,m,o) {
                    console.log("I am opened!", this);
                },
                close: function(e,m,o) {
                    console.log("I am closed!", this);
                }
            });
        });

        // Animation options
        $('#jgrowl-animation').on('click', function () {
            $.jGrowl('I am a notice!', {
                speed: 100,
                theme: 'bg-danger',
                header: 'Fast animation speed'
            });
        });


        //
        // Positions
        //

        // Top left
        $('#jgrowl-top-left').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'top-left',
                theme: 'bg-teal',
                header: 'Top Left position'
            });
        });

        // Top center
        $('#jgrowl-top-center').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'top-center',
                theme: 'bg-teal',
                header: 'Top Center position'
            });
        });

        // Top right
        $('#jgrowl-top-right').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'top-right',
                theme: 'bg-teal',
                header: 'Top Right position'
            });
        });


        // Center
        $('#jgrowl-center').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'center',
                theme: 'bg-danger',
                header: 'Center position'
            });
        });


        // Bottom left
        $('#jgrowl-bottom-left').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'bottom-left',
                theme: 'bg-info',
                header: 'Bottom Left position'
            });
        });

        // Bottom right
        $('#jgrowl-bottom-right').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'bottom-right',
                theme: 'bg-info',
                header: 'Bottom Right position'
            });
        });

        // Bottom center
        $('#jgrowl-bottom-center').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'bottom-center',
                theme: 'bg-info',
                header: 'Bottom Center position'
            });
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentNoty();
            _componentJgrowl();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    NotyJgrowl.init();
});


/* ------------------------------------------------------------------------------
 *
 *  # Steps wizard
 *
 *  Demo JS code for form_wizard.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FormWizard = function() {


    //
    // Setup module components
    //

    // Wizard
    var _componentWizard = function() {
        if (!$().steps) {
            console.warn('Warning - steps.min.js is not loaded.');
            return;
        }

        // Basic wizard setup
        $('.steps-basic').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            transitionEffect: 'fade',
            titleTemplate: '<span class="number">#index#</span> #title#',
            labels: {
                previous: 'Back',
                next: 'Next Step',
                finish: 'Create Rule'
            },
            onFinished: function (event, currentIndex) {
                alert('Form submitted.');
            }
        });

        // Async content loading
        $('.steps-async').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            transitionEffect: 'fade',
            titleTemplate: '<span class="number">#index#</span> #title#',
            loadingTemplate: '<div class="card-body text-center"><i class="icon-spinner2 spinner mr-2"></i>  #text#</div>',
            labels: {
                previous: '<i class="icon-arrow-left13 mr-2" /> Previous',
                next: 'Next <i class="icon-arrow-right14 ml-2" />',
                finish: 'Submit form <i class="icon-arrow-right14 ml-2" />'
            },
            onContentLoaded: function (event, currentIndex) {
                $(this).find('.card-body').addClass('hide');

                // Re-initialize components
                _componentSelect2();
                _componentUniform();
            },
            onFinished: function (event, currentIndex) {
                alert('Form submitted.');
            }
        });

        // Saving wizard state
        $('.steps-state-saving').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            titleTemplate: '<span class="number">#index#</span> #title#',
            labels: {
                previous: '<i class="icon-arrow-left13 mr-2" /> Previous',
                next: 'Next <i class="icon-arrow-right14 ml-2" />',
                finish: 'Submit form <i class="icon-arrow-right14 ml-2" />'
            },
            transitionEffect: 'fade',
            saveState: true,
            autoFocus: true,
            onFinished: function (event, currentIndex) {
                alert('Form submitted.');
            }
        });

        // Specify custom starting step
        $('.steps-starting-step').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            titleTemplate: '<span class="number">#index#</span> #title#',
            labels: {
                previous: '<i class="icon-arrow-left13 mr-2" /> Previous',
                next: 'Next <i class="icon-arrow-right14 ml-2" />',
                finish: 'Submit form <i class="icon-arrow-right14 ml-2" />'
            },
            transitionEffect: 'fade',
            startIndex: 2,
            autoFocus: true,
            onFinished: function (event, currentIndex) {
                alert('Form submitted.');
            }
        });

        // Enable all steps and make them clickable
        $('.steps-enable-all').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            transitionEffect: 'fade',
            enableAllSteps: true,
            titleTemplate: '<span class="number">#index#</span> #title#',
            labels: {
                previous: '<i class="icon-arrow-left13 mr-2" /> Previous',
                next: 'Next <i class="icon-arrow-right14 ml-2" />',
                finish: 'Submit form <i class="icon-arrow-right14 ml-2" />'
            },
            onFinished: function (event, currentIndex) {
                alert('Form submitted.');
            }
        });


        //
        // Wizard with validation
        //

        // Stop function if validation is missing
        if (!$().validate) {
            console.warn('Warning - validate.min.js is not loaded.');
            return;
        }

        // Show form
        var form = $('.steps-validation').show();


        // Initialize wizard
        $('.steps-validation').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            titleTemplate: '<span class="number">#index#</span> #title#',
            labels: {
                previous: '<i class="icon-arrow-left13 mr-2" /> Previous',
                next: 'Next <i class="icon-arrow-right14 ml-2" />',
                finish: 'Submit form <i class="icon-arrow-right14 ml-2" />'
            },
            transitionEffect: 'fade',
            autoFocus: true,
            onStepChanging: function (event, currentIndex, newIndex) {

                // Allways allow previous action even if the current form is not valid!
                if (currentIndex > newIndex) {
                    return true;
                }

                // Needed in some cases if the user went back (clean up)
                if (currentIndex < newIndex) {

                    // To remove error styles
                    form.find('.body:eq(' + newIndex + ') label.error').remove();
                    form.find('.body:eq(' + newIndex + ') .error').removeClass('error');
                }

                form.validate().settings.ignore = ':disabled,:hidden';
                return form.valid();
            },
            onFinishing: function (event, currentIndex) {
                form.validate().settings.ignore = ':disabled';
                return form.valid();
            },
            onFinished: function (event, currentIndex) {
                alert('Submitted!');
            }
        });


        // Initialize validation
        $('.steps-validation').validate({
            ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
            errorClass: 'validation-invalid-label',
            highlight: function(element, errorClass) {
                $(element).removeClass(errorClass);
            },
            unhighlight: function(element, errorClass) {
                $(element).removeClass(errorClass);
            },

            // Different components require proper error label placement
            errorPlacement: function(error, element) {

                // Unstyled checkboxes, radios
                if (element.parents().hasClass('form-check')) {
                    error.appendTo( element.parents('.form-check').parent() );
                }

                // Input with icons and Select2
                else if (element.parents().hasClass('form-group-feedback') || element.hasClass('select2-hidden-accessible')) {
                    error.appendTo( element.parent() );
                }

                // Input group, styled file input
                else if (element.parent().is('.uniform-uploader, .uniform-select') || element.parents().hasClass('input-group')) {
                    error.appendTo( element.parent().parent() );
                }

                // Other elements
                else {
                    error.insertAfter(element);
                }
            },
            rules: {
                email: {
                    email: true
                }
            }
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-blue'
        });
    };

    // Select2 select
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        var $select = $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity,
            width: '100%'
        });

        // Trigger value change when selection is made
        $select.on('change', function() {
            $(this).trigger('blur');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentWizard();
            _componentUniform();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FormWizard.init();
});



/* ------------------------------------------------------------------------------
 *
 *  # Checkboxes and radios
 *
 *  Demo JS code for form_checkboxes_radios.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InputsCheckboxesRadios = function () {


    //
    // Setup components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-check-input-styled').uniform();


        //
        // Contextual colors
        //

        // Primary
        $('.form-check-input-styled-primary').uniform({
            wrapperClass: 'border-green-400 text-green-800'
        });

        // Danger
        $('.form-check-input-styled-danger').uniform({
            wrapperClass: 'border-danger-600 text-danger-800'
        });

        // Success
        $('.form-check-input-styled-success').uniform({
            wrapperClass: 'border-success-600 text-success-800'
        });

        // Warning
        $('.form-check-input-styled-warning').uniform({
            wrapperClass: 'border-warning-600 text-warning-800'
        });

        // Info
        $('.form-check-input-styled-info').uniform({
            wrapperClass: 'border-info-600 text-info-800'
        });

        // Custom color
        $('.form-check-input-styled-custom').uniform({
            wrapperClass: 'border-green-400 text-green-400'
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-check-input-switchery'));
        elems.forEach(function(html) {
          var switchery = new Switchery(html);
        });

        var auto1 = document.querySelector('.form-check-input-switchery-auto1');
        var switchery = new Switchery(auto1, { color: '#afd25c' });

        var auto2 = document.querySelector('.form-check-input-switchery-auto2');
        var switchery = new Switchery(auto2, { color: '#afd25c' });

        var auto3 = document.querySelector('.form-check-input-switchery-auto3');
        var switchery = new Switchery(auto3, { color: '#afd25c' });

        var dashboard = document.querySelector('.form-check-input-switchery-dashboard');
        var switchery = new Switchery(dashboard, { color: '#afd25c' });

        var accounts = document.querySelector('.form-check-input-switchery-accounts');
        var switchery = new Switchery(accounts, { color: '#afd25c' });

        var notifications = document.querySelector('.form-check-input-switchery-notifications');
        var switchery = new Switchery(notifications, { color: '#afd25c' });

        var midbreak = document.querySelector('.form-check-input-switchery-midbreak');
        var switchery = new Switchery(midbreak, { color: '#afd25c' });

        var cbanalytics = document.querySelector('.form-check-input-switchery-cbanalytics');
        var switchery = new Switchery(cbanalytics, { color: '#afd25c' });

        var preventanalytics = document.querySelector('.form-check-input-switchery-preventanalytics');
        var switchery = new Switchery(preventanalytics, { color: '#afd25c' });

        var hide = document.querySelector('.form-check-input-switchery-hide');
        var switchery = new Switchery(hide, { color: '#afd25c' });

        var replace = document.querySelector('.form-check-input-switchery-replace');
        var switchery = new Switchery(replace, { color: '#afd25c' });


        // Colored switches
        var primary = document.querySelector('.form-check-input-switchery-primary');
        var switchery = new Switchery(primary, { color: '#afd25c' });

        var danger = document.querySelector('.form-check-input-switchery-danger');
        var switchery = new Switchery(danger, { color: '#EF5350' });

        var warning = document.querySelector('.form-check-input-switchery-warning');
        var switchery = new Switchery(warning, { color: '#FF7043' });

        var info = document.querySelector('.form-check-input-switchery-info');
        var switchery = new Switchery(info, { color: '#00BCD4'});
    };

    // Bootstrap switch
    var _componentBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            console.warn('Warning - switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-check-input-switch').bootstrapSwitch();
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentUniform();
            _componentSwitchery();
            _componentBootstrapSwitch();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    InputsCheckboxesRadios.initComponents();
});



/* ------------------------------------------------------------------------------
 *
 *  # Select2 selects
 *
 *  Specific JS code additions for form_select2.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Select2Selects = function() {


    //
    // Setup module components
    //

    // Select2 examples
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }


        //
        // Basic examples
        //

        // Default initialization
        $('.select').select2({
            minimumResultsForSearch: Infinity
        });

        // Select with search
        $('.select-search').select2();

        // Fixed width. Single select
        $('.select-fixed-single').select2({
            minimumResultsForSearch: Infinity,
            width: 150
        });

        // Fixed width. Multiple selects
        $('.select-fixed-multiple').select2({
            minimumResultsForSearch: Infinity,
            width: 400
        });


        //
        // Advanced examples
        //

        // Minimum input length
        $('.select-minimum').select2({
            minimumInputLength: 2,
            minimumResultsForSearch: Infinity
        });

        // Allow clear selection
        $('.select-clear').select2({
            placeholder: 'Select a State',
            allowClear: true
        });

        // Tagging support
        $('.select-multiple-tags').select2({
            tags: true
        });

        // Maximum input length
        $('.select-multiple-maximum-length').select2({
            tags: true,
            maximumInputLength: 5
        });

        // Tokenization
        $('.select-multiple-tokenization').select2({
            tags: true,
            tokenSeparators: [',', ' ']
        });

        // Maximum selection
        $('.select-multiple-limited').select2({
            maximumSelectionLength: 3
        });

        // Maximum selections allowed
        $('.select-multiple-maximum').select2({
            maximumSelectionSize: 3
        });


        //
        // Drag and drop selected items
        //

        // Initialize with tags
        $('.select-multiple-drag').select2({
            containerCssClass: 'sortable-target'
        });

        // Add jQuery UI Sortable support
        $('.sortable-target .select2-selection__rendered').sortable({
            containment: '.sortable-target',
            items: '.select2-selection__choice:not(.select2-search--inline)'
        });


        //
        // Single select with icons
        //

        // Format icon
        function iconFormat(icon) {
            var originalOption = icon.element;
            if (!icon.id) { return icon.text; }
            var $icon = '<i class="icon-' + $(icon.element).data('icon') + '"></i>' + icon.text;

            return $icon;
        }

        // Initialize with options
        $('.select-icons').select2({
            templateResult: iconFormat,
            minimumResultsForSearch: Infinity,
            templateSelection: iconFormat,
            escapeMarkup: function(m) { return m; }
        });


        //
        // Customize matched results
        //

        // Setup matcher
        function matchStart (term, text) {
            if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
                return true;
            }

            return false;
        }

        // Initialize
        $.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
            $('.select-matched-customize').select2({
                minimumResultsForSearch: Infinity,
                placeholder: 'Select a State',
                matcher: oldMatcher(matchStart)
            });
        });


        //
        // Loading arrays of data
        //

        // Data
        var array_data = [
            {id: 0, text: 'enhancement'},
            {id: 1, text: 'bug'},
            {id: 2, text: 'duplicate'},
            {id: 3, text: 'invalid'},
            {id: 4, text: 'wontfix'}
        ];

        // Loading array data
        $('.select-data-array').select2({
            placeholder: 'Click to load data',
            minimumResultsForSearch: Infinity,
            data: array_data
        });


        //
        // Loading remote data
        //

        // Format displayed data
        function formatRepo (repo) {
            if (repo.loading) return repo.text;

            var markup = '<div class="select2-result-repository clearfix">' +
                '<div class="select2-result-repository__avatar"><img src="' + repo.owner.avatar_url + '" /></div>' +
                '<div class="select2-result-repository__meta">' +
                '<div class="select2-result-repository__title">' + repo.full_name + '</div>';

            if (repo.description) {
                markup += '<div class="select2-result-repository__description">' + repo.description + '</div>';
            }

            markup += '<div class="select2-result-repository__statistics">' +
                '<div class="select2-result-repository__forks">' + repo.forks_count + ' Forks</div>' +
                '<div class="select2-result-repository__stargazers">' + repo.stargazers_count + ' Stars</div>' +
                '<div class="select2-result-repository__watchers">' + repo.watchers_count + ' Watchers</div>' +
                '</div>' +
                '</div></div>';

            return markup;
        }

        // Format selection
        function formatRepoSelection (repo) {
            return repo.full_name || repo.text;
        }

        // Initialize
        $('.select-remote-data').select2({
            ajax: {
                url: 'https://api.github.com/search/repositories',
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term, // search term
                        page: params.page
                    };
                },
                processResults: function (data, params) {

                    // parse the results into the format expected by Select2
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data, except to indicate that infinite
                    // scrolling can be used
                    params.page = params.page || 1;

                    return {
                        results: data.items,
                        pagination: {
                            more: (params.page * 30) < data.total_count
                        }
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
            minimumInputLength: 1,
            templateResult: formatRepo, // omitted for brevity, see the source of this page
            templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
        });


        //
        // Programmatic access (single)
        //

        // Set/get value
        $('.select-access-value').select2({
            minimumResultsForSearch: Infinity,
            placeholder: 'Select State...'
        });
        $('.access-get').on('click', function () { alert('Selected value is: '+$('.select-access-value').val()); });
        $('.access-set').on('click', function () { $('.select-access-value').val('CA').trigger('change'); });


        // Open/close menu
        $('.select-access-open').select2({
            minimumResultsForSearch: Infinity,
            placeholder: 'Select State...'
        });
        $('.access-open').on('click', function () { $('.select-access-open').select2('open'); });
        $('.access-close').on('click', function () { $('.select-access-open').select2('close'); });


        // Enable/disable menu
        $('.select-access-enable').select2({
            minimumResultsForSearch: Infinity,
            placeholder: 'Select State...'
        });
        $('.access-disable').on('click', function () { $('.select-access-enable').prop('disabled', true); });
        $('.access-enable').on('click', function () { $('.select-access-enable').prop('disabled', false); });


        // Destroy/create menu
        function create_menu() {
            $('.select-access-create').select2({
                minimumResultsForSearch: Infinity,
                placeholder: 'Select State...'
            });
        }
        create_menu();
        $('.access-create').on('click', function () { return create_menu()});
        $('.access-destroy').on('click', function () { $('.select-access-create').select2('destroy'); });


        //
        // Programmatic access (multiple)
        //

        // Reacting to external value changes
        $('.select-access-multiple-value').select2();
        $('.change-to-ca').on('click', function() { $('.select-access-multiple-value').val('CA').trigger('change'); });
        $('.change-to-ak-co').on('click', function() { $('.select-access-multiple-value').val(['AK','CO']).trigger('change'); });


        // Open/close menu
        $('.select-access-multiple-open').select2({
            minimumResultsForSearch: Infinity
        });
        $('.access-multiple-open').on('click', function () { $('.select-access-multiple-open').select2('open'); });
        $('.access-multiple-close').on('click', function () { $('.select-access-multiple-open').select2('close'); });


        // Enable/disable menu
        $('.select-access-multiple-enable').select2({
            minimumResultsForSearch: Infinity
        });
        $('.access-multiple-disable').on('click', function () { $('.select-access-multiple-enable').prop('disabled', true); });
        $('.access-multiple-enable').on('click', function () { $('.select-access-multiple-enable').prop('disabled', false); });


        // Destroy/create menu
        function create_menu_multiple() {
            $('.select-access-multiple-create').select2({
                minimumResultsForSearch: Infinity
            });
        }
        create_menu_multiple();
        $('.access-multiple-create').on('click', function () { return create_menu_multiple()});
        $('.access-multiple-destroy').on('click', function () { $('.select-access-multiple-create').select2('destroy'); });


        // Clear selection
        $('.select-access-multiple-clear').select2({
            minimumResultsForSearch: Infinity
        });
        $('.access-multiple-clear').on('click', function () { $('.select-access-multiple-clear').val(null).trigger('change'); });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Select2Selects.init();
});






/* ------------------------------------------------------------------------------
 *
 *  # Buttons extension for Datatables. HTML5 examples
 *
 *  Demo JS code for datatable_extension_buttons_html5.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableButtonsHtml5 = function() {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableButtonsHtml5 = function() {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Setting datatable defaults
        $.extend( $.fn.dataTable.defaults, {
            autoWidth: false,
            dom: '<"datatable-header"fB><"datatable-scroll-wrap"t><"datatable-footer"ilp>',
            language: {
                search: '_INPUT_',
                searchPlaceholder: 'Type to search...',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            }
        });


        // Basic initialization
        $('.match-modal-table').DataTable({
            autoWidth: false,
            dom: '<"datatable-scroll-wrap"t><"datatable-footer">',
            language: {
                search: '_INPUT_',
                searchPlaceholder: 'Type to search...',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            },
            select: true,
            buttons: {            
                dom: {
                    button: {
                        className: 'btn btn-light'
                    }
                },
                buttons: [
                    
                ]

            }
        });


        // Basic initialization
        $('.datatable-button-html5-basic').DataTable({
            buttons: {            
                dom: {
                    button: {
                        className: 'btn btn-light'
                    }
                },
                buttons: [
                    'excelHtml5',
                    'csvHtml5',
                ]
            }
        });


        // PDF with image
        $('.datatable-button-html5-image').DataTable({
            buttons: [
                {
                    extend: 'pdfHtml5',
                    text: 'Export to PDF <i class="icon-file-pdf ml-2"></i>',
                    className: 'btn bg-teal-400',
                    customize: function (doc) {
                        doc.content.splice(1, 0, {
                            margin: [0, 0, 0, 12],
                            alignment: 'center',
                            fontFamily: 'Helvetica',
                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxN2FlYzk4Yy0zMjgzLTExZGEtYTIzOC1lM2UyZmFmNmU5NjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUYzODU5RTYxNDNCMTFFNTlBNjVCOTY4NjAwQzY5QkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUYzODU5RTUxNDNCMTFFNTlBNjVCOTY4NjAwQzY5QkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODgwMTE3NDA3MjA2ODExOTJCMDk2REE0QTA5NjJFNCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjE3YWVjOThjLTMyODMtMTFkYS1hMjM4LWUzZTJmYWY2ZTk2OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu9vBW8AADRxSURBVHja3H0JmFxXdea79y21967uVi+SbLXUkiVZso2NZWJjsyQEAsYZlnHIJCyZJPARMsnnyZedBJjJB5kMA5kQCAkhkECCweAVbxjvtmRsy7YWS+puLb13V3fXvrzl3jnn3HtfVRsbwsQ2JKXncnUtr97731n+s9xTTEpp/bhvQRDU6dZoNHzfD8PIsiS3bc91E8lkOpVKp9Oe5/3Yj9N5+b8SLs/KyurCwvzM7Ozc3Nzi4tLKykqxWKxWa00AK/CjSEgpGAO4uOclUqlkLpvr7u7u798wPDK8aXTT6OjowEC/bdv/YcECOCYnJ48de/b4ieOnT51ZWFhYKxSq1Wqz2QTJiqJImlv8EcYY3HP4HwfgbMdxQL4ymUxvb+/o6MjOnTv37du7e/fugf7+l+cU2EuthuVy5eixo48//vjTTz8zNTm1uLRUKpUAIIWOQiS+vZAkqvv29wN2rutms9mhoaHzz99zxeWX799/aV9f379XsE6fPvPIo488+uiBY8eOgcKBZIE9QknhvB0dif/gJuBmSaH+tFgMC1eb+vP7seModE4mk968edNP/dRP/dyb3nTBBfv+PYEF6Nzz3e8+/PAjJ06cWFpaBssNT4IsxAAJEUVhEEZgniIAx2KObSc4T9g8wbjHLBuQQfRkIIUvREPIBrgBxgSpo8vhPQz31q65gBroaU9Pz6WXvvKd73jHlVe++oVE9ScFrBMnTt5xxx33P/DA8eMn8vk8GCM4OSVK8EVhCOa7AQABLolkbzqzMZMdTqcGvWSv63RxnuEsaUlPWo6UtowYoBXCu8NmGFR8f6XRnGs2zjaap4NwXsiSzUEZk+AzQe5i1Mi+8VwuB1r5nne/+4orLv9JBGtpaem2226/8667jhw+vLS8DOeoYIKXwjBoNmtRGCUS3Z3d53b3jnd0bkmm+l0nyyxXWrYUsMEJcwswklzAY3hGgnDZ8BifxD9pE1YYAb1YqtdPVKtPVOuHgnCac+E4ac7ddhsHqAFkP/3613/wgx8YHx//SQEL1OW+++674ZvfOnjg4PTMTBiGCibYM8hRo1EDk9LTNz4weEFXz9ZksocxOCuAAHC0yR3TRjARKHCv8EL4RMQINZAycy8ZvNmSIH0sjAq12pFS+Z5y9aFQLLgOCFrKQoPX8qoDAwPve997f/W//koikfgxgzU/P3/99V+//Y47gBNUKhWwGkqaQJQa9VoqPbBx5OLBoQuz2QEwNEQDwNa4tIFhctA84WnHMmUECjBCyBihhhgRahY9hnuLHpMAWShQfjBfLH93tXBj0z8GRg0ErV3K4LZ///4P//Ef7d17/o8NrAMHDv7TV77y4IMPzc7Okgl34Nh9H1AqpzKDm865YuPwhclkN7kzm4NhZmCbNVIIE22kX0rX4GBskiAEKIL7iGAipERkCS1fVgsvqf0iw8vgRqJUKt+7vPqP9cYzjpMCixbDBZYP2Nnv/Pfr3vOed7/cYIGufevGG//lX772xBNPAm8CygM2AnxctVKwndyWrVeNbN6fSnXB/gEjsME2JxfGQawcpgTKUmqoZIop7SPhYoQRjwCaEEUpUlIWWZGSL0BNGsiIdRidExgkcU+Iylrx1sXlLwThGdfNwdcZpoEE5dprr/0fH/soMNuXCaxyufylL335W9+6EdgmxHGKEzQa1Ua9MTRy8diON+Q6NiJtdFzH9lCgtEw5pIO0WVxqvNB4kUyxNqSMNOE9jyIjWfoZS90b4UKnaVlazECGKK5MhMHCwvLf5le/xmzh2Bl6CW9gRF/1qld95jP/d3Rk5CUHa3l5+W8+//lbb7ltcmpKMWnYQ6W85npdO3ZfMzRyAYkS2K6E7STwMXcRTe5wy1b6iJ5ewYRIkcEGmbKMCQdE8PwJmpArgBCvkCnUSNAsBRnhBfcx2ZIkX7BFeGzcKVUemp7/RL1x3PM6yPDjDQL2bdvGvvB3f7t7966XEKy5ufnPfOYz3779jrNnzypbDrSgUi70b9y36/y3ZTr6OaDiJkCgbMdD7bPhPbDZSH6YTQaeW0THcZO0WZxsUMvrtdkpZsSKR6H+Ex8oKNWnyH4p2SLhEjFkjIWglWG0Mj3/yfzqDa6bIkcslXwNDgz8w5e+ePErXvGSgAWO79Of/stv3347xC7KSPnNeq1W27bzjWM7fsZxkxSuJQAjCHgBI0JKMVJO1ooBTPAf3iFGjOy6pYRLmSEES2qbJSKDl0CAgMkKgxdIXGREjNQQwdGSpWw+IAVPwc6skGgqW8p/dWb+kyBxyuqTv252d3d/9Sv/ePHFF7/IYIH2/Z9PffqWW26dm1NI8Xq9HAZyz4W/MLL5UkAEYEKZUqqHGxBsTlFdHNmpO9zUV5NkwT9FnUi5SLikQkoiQDLSuGikDEyxrBFYTAuXUOeyTr4sFgJGcGCF0n2nzvxxJFZtY8JAvsBF3vCNr+/Zs/tFAwss+qc+9Zc3fPOb09PTCqlarSSld+Er3zuwcTeg4bgp1006jova56Ah55hV4QocRsGOgogBHJaijZY2ItJYd8kMBeWKZ5HL40olI7JfSg1JyhA1SaihVmoXIYl8aZ0E/2xMPmwQeCVqtWdOnvkdP5hx7Cy9gVWr1c2bNt18y02bRkdfBLCAJXz2s5/7p698dWJy0kUgECnLSl582a/19W8DSFxPIeWBuVKqB7pnKbEinYtTLQojrSp4egqyyOYCNxvuLU7vAZIVBjzw7abv+L4X+G4YOhQVWcqEhaGGTyksokae0ewTZYwpy7UOL7fenDh56rqGf1q5SDhCoD6XXHLxjd/6Zjab/beCdf313/js5z53+PBhjje7US9H0r3ksvf3DWyHPz0vjQroKIvucKIRKFOkcpx0Dq82U9YXtYIeRJ7TSCf9jozI5Xg246ZTrge2ToeTeFSRkEEQNRpRtRoVi3J11V5Z8QqFTL2eFBHwfmQPIWqirTymjJgyecZyaeZloSgDZBovbjuN5sSJqd9u+jO2nVZ4ra2tvetdv/D5v/ncvwmsgwcPfvwTf/7II49CAAhmCCx60w8vedX7BzbuQaQSKbDrLrAE2wFWRSJFGQZusiPMUhaKiCOYc+E69c5Mra/H2tCb6urMpNJpAFoZNeX+NQnQd5pOAt0Ft1urNVdXfQgWTp9OLS1mm80ks5Rn1MKl7BfptdZEVHutlQAcGi+LBUApqvUjx6d+K4rWONcBY6FQ+F9//okPfOD9/59gLSwsfvRjH/v2t28HxQaigCyhUrrwkvduOucyDF4SSqYS4APh6zlFz2jOufJ5xiThKQNpECm30tdTGx5M9m/oymRzoBFwCpiz0hi1Z/TwodA5QdAokx+0yCGIsFZvzM02jx3zpqY669UUfB28GSAj50DuQhkuy8gXW48X6WOx/ODJU79DjMxR1gbuv33bLRdddNGPDBacBri/L3/5yzMzs64LMbAsFpbHd7115563kEylwVSR9gFNJzKl01YoVaR+lrLqcOWTbnWgt7p5ND3QvyGVyhBRiNSJGCZpApc2wGKklJsj+ZKaiCJhk2HYnJtrHHoyceLZbrBrmOZANeSWUOelz6+N3MPhKGUEXAKHu4v5fzk983GVqIBbpVI5f8+eO++8PZVKPS8m9p/8yZ887wvf/e53v/gPX5qYmHDQqLNyeW1g6IK9F/5nsE1uIuWBRXeRTznAEhyFFMkUck/1CPUOSGt/9+p529h546P9GwZADBUS5CQVtkYGdQ617Zk2LdZPoWAxLXeIiN3Rkdi6NeofKBcKsriWUEJtqSuldtX6gx61BAOugZ/N7gqDfKX6FGVELM8DUZ2C03n1FVf8CJKVz+f/6I8+DPwTmAioF8R9jGcuf8112dwAqB6A5ToIFogV6CMjpGzeVnRAI85TXmnzxurY1oHu7g1kXISJN8xRm7wTY9KUcozGoUCRKEVS1X1QK4UkdTMSh6/imyHiqlabBx91Hn+sJ4ocNIBER5gVO5ZYgnUwpIQLDyoqHZ/6jVr9BOdJSk5gaHn33Xft2b37XytZX/3qP994081ARB3XhSOqVav7Lv6lDQPjgDoqIBEFRArMlEkbc25oJ7m7ruzKrm1i5/g5uVy3Tl2qkhbXgCI7A02gWAiOsFaPCqVgZS3Ir/pwXyyHtVoUhAJO3HU5CDfnJp6RWt6kEjU8Q9iVc845orevPDPj1utwYNKKE/Ca6sVP6MtJ/49sJ51Kjq4W7iEQ8fiq1cr02Zl3vvMd/6q64cmTE7ffcQcwdVRAy6pUCiOb94+MXgQyrmAiSuWQ79OGinMl8RTEWGKgO79rPDs8NAqvCCyX6kqNqQZaDtAqIQvlcGGpAdta0a/WQt+H64wWnwI9oeD1PDuXcXq7vYF+r6/HSXgcEAwDtUNpaRRQAEPpbB9nnV1rt90iFheycJVbWqw4HmXoCWVOYgaIOkL4uewrBvvfNr/0ZWahqcpmO+64887bbvv2G9/4sz9cDf/3Jz/5hS98cWlpCci6j/UF+9Wv/91c50ZAClmVRx4QGBHmEmySqVbtD+jkxp7lPef19g8MKUkw11T/H0QJQDk7V588U13MNxpNtPS4B0vzBUqBCm3dBepgRBwKzg1QGx1KnLPF6+6CWEf6Ab2R3kZJCPw4MNtiKbz1ps6Zs1nPE5TbkFQtYbEuEs1XmYlQWgFQsFCsTZz6ULV2RkkPBLz79u29+647QVx+kBoeO/bs3/3d34Nd5xT6VsqFHbvePLTpIiAHxNQTJFkkVrZCSisgISU39ub37t7Q3z+k6DozhgzgAG2C/U+eqT3y+NqzE5VSJeQkYo5tEZGNjbjRFxYrr6ToyWo0xdx8ODEVlkqys4NnMpgRNPaaKbYLzyST/Jxz6/NzdrEARytbfsPSRoy+w9ImEu8gugYqkyxXH8T6CCq+Ozk5tXv37p07d7SDw58jVnfccefkxARVq1izUcvmhraMXQ57xiDZpQgZUy6cazul0i36QPu78nt29vRt2Iiq13JIiCZoE1iiu+/PP3hgpVD0PZclXCWSClQjm1yfBmGn3qB2goEeWCIP3Wn07PHmTbfWDz0VwNvIVDBFPnFvHEyYlcnYb3pzsW9DA8gT0yQrdrn60Ag3uF6YvLVk0NVxVWfHBeC+FQ6A11995q8FOd3nB+vMmbMPPfTQ6toa9VzIRrO+dfy1qVSXynlidRMkwdaypLQPjxAdmN2ZWQM7BdqHbMegBAcE8geCeORE+c77lhaWG16CKcauUICd2G2yiRfA1gEAM2YQTohz4uK0weNEUoaReOSAf/sdQbksPc8YcE0/MAzq6GQ/87OFVBqsoEp+6DjeiJcizpwpvOA4Wbqv++c9UwFKp9MHDhx44IEHXhCs+++/f2JyArgsyE2z2chkB0c2vQL2TOkEh2TK5lyTKm2K0EnxpFceP9faODRianaaNgFM8OfDj68dPFSAl1yPsbbz4sZPWa0/LSWp2mvoLGG8Twn0jRkpSyblzEx0083h7KxIJCRrUTLcZxDwwSFx+ZUFEWc52HrXqPeutMOBSDSTvqQjuxusnirWglj9/d9/8fnBgpjmoYcfXllZ1bWsRm3zOZel0l0Y92EeXWsf047PilNTnAXApzZv3sQUwzEaaDvACeT9B1ZOTFU8VawwYQhr34M2bMaOmOc57YorleStrAs4WHyeCxSxlKzV5W3fFpOTFuBlKUCJtcGbfZ/tPK9x3u5y4GsJNdeqJV/mK0mmeaar42cSCV2szWazd3/nnpmZmecB6+mnnwHrDv5JJYtdL4dihQUutFOofoqaG+attB6IZm9HYevWAQiqFb9UhwPKBX89+Njqmdm65+nsA5w2XAgtLkyaZBdqGSGyXur4OsahPqJcm0lUoVNzXTQsd91lTU1ZCa8VkCotloLv31/u7vExwGZxgKWPPvY+qjggrTCTuiSb2WI7FNDaNpDzm2++5XnAAhVdXFxUh9ps1voHz8t1DOhGDMOqDKlUVwMVMOHUzt3sdnX2wiG3zCcgYrODTxUAqQQiJVmbirVtzHipFhXjrHVMLUGjfco4fwDyRSrJCT5weSDCd93J5+el28KL/FzEsrnoootL2lKv+3ZL9+q0KgPSsXtz2VfCMSsNSCS8m26++blglUqlQ089BZGkKrsDORwGFmpTHl2l0nXrT9z8o3CRg72V4aFBy2RzybwgSzg+UTkxVU14dP50IOakKRGviju0h3XgM7mOc3PLgEnHuu5UpRFPwsuVzSb7zt1OvSYwpRbTdPBzAd8+Xh8aaooI5F3G8ZjpaorpBKdqpkwnL0mnOtXbUqn0k08eOnXq1DqwTpw4AU8FQQCfDkM/me7t3TBGvkwhZVttehJf+KRb3TScTiYzQLoVJZVIO1l+xT90pOg6yjoLY6ekEX+pDRGKhja9baTBxEOW9X05KZVmp3oOaCKL6B6+GjirBH1cztsPPgCXO2K8JZtgrF3X2ntB2QQQ0moFQjpYj78bdu4652Yy5wIjoUyAXSgU7rvv/nVgPfPMkeXlvPICgd/o7RtLp7vJoCsPaLJ6+qvwbIAx93XV+/v7ZJxfp6sDAv/k4aIfCJXybJltI1vciIzOKjBdEWNtMbYOZeiNVhzX6V42LYA6ga85FIpYwhPPHktMTABwMrYJ8C8I2aYtjQ0DPmglWxccGuOljD2hwVk2ldyTTDqK8IMZuvfee1tgwWkfO3YMvKHyg8BMNgzsYLreR3le1v7VFDjA5bIbQ4PYHytU2phYAxi3MzP1+cUGyJdlyLP5VIudG9lXUqNIZXwGTGGnX1KWShFOdcSsZbniQo62/aRljx306o2QTsVUE6XluWL7eJXMvHGslmylbFjMOvBjnrszlcqo55LJJGhio9HQYK2urigdBFwglgXi3927meifw3XBvS3406olc5nahr5O83VSUQCI+46dLHNTRTXmxYqxttZ5OBk7OtmyuCoh2mIZdCSknpbykJau3OjcC+mm0PlW2xFLS96J45YWLkNMwohv2lLPZCIVGOmviK8cfQ/XTkg4fFMq2Q+2TyW5ZmZnIPrRWYfZ2dmFxUXVfgakIZ3pzWT6yKlx4/14nJxTmsJZONAn0+ksHCQcDnWxgMTyucXmaiEAjq5DLzwwIVvpEe0GWnG8FSd/mTAxniTvSaYfQ2WQ9CgQAWxhFAUyCEUUYhI5DOzQt+neCfwoDBwIiCPhhr714P32pk01iGRVvEIXS3Z0BIMbG6emMhAdUzrMXJOYB+G7yPCyrkRyFALERgP0llertSNHjuzadR6Cdfbs2WKxqEgSfGfHho2elyb6YZsgLZaGVoY8lcqBswypY5ZR9gKOrKvDyWScejOyudWuWi0R0n+sy5MzEwjDvxBcMSZhhB9EgE6ImxDwDGIGL1EukPq2BD62wgikBl6Fx4CmhHeKKJqe9iZOFsd32CDp0qTzPS/KdZbz+VQqBWzDAjIFMTy345KKFedwGbzX2ZRIOPW6UmcLwLKst+PD6ZnZer2uwIDjyXUOKb5OZfe4/qA8uzEolj09z5X3jH1LJKxcxtm6OQ2nFNt0DZX+rLVOwKSWvkha4BDqtaBU9otlH+7LtaDRDEGaCBop9ZdaZi+SxUZHCpNit1QsDZdYSufEcQ/TL1odEK0oZP39dVCgQkGs5KPlxWh5KVpbFdWqCEPJDNtWh+3YQ2CtlENxHOfkyZPaZi3ML6jTJrW3srmBlrK3bLsSV31cYPqXV625xToEf6Z0hfdwkQGsbNoWQmp7EtvTuEmK6WorvBlksFINiqVmpdKsNVCUUAyM5YptsJSqmUHGiedWDcIylTZF08i3gsGanU2WSwFv1XgxG9HZFXR1B2jGKe8aBLJaEYDX8pJYXg6LReE3cYdAx2zel0hkFNau60LQg0wCYAJSD8GzSiKCUQfSoA41tlYmhGh5XDpYPnm6iR/UdVM83kjITMbeMpoKIkGF+rgVSMYGFeSuXo/KFb9Y8au1ABOk6kxNwcdUwVqtahoOKu+oLJ8wfUbPWZOhBBrC7EolubwsuB37OzyCREL09ARCmKSWCr9oVUvgy3JJ5JfDxaVgdc1vNnOel1VYAzfPr6wUSyVeq9XAYClDiJVUJ5FI5GjvcW9QW5ig4zPEARR+acVaWKqh14h9NEq7HNuSTiV4JGIZILkSVrMpShWQI8IoIMphCsiaAkiDDFXgRQyIgkmvLSCkcI0BIdaCrT1tBXLkLC0xqqoa/oKJfwlxopQmNLRMDcgEvZjeCWSpHK7kIRzOwqlhQYTbENsU1tYQrGqtqugovuAkHDclZWsNBGu5cUN/WWzl+cTpBrioWCqwTSESuay7eSQFRlq9F+sRNdQ1kCbfjzSJNTKn9VXVc3RdR1jtcmMwMz1rCjWrrXxtSU1spU7FINvga6sOeARd3NAqzMAnqtxWG2+PIweVYsOoSEqX84xtc7UcAXgWiBSv0cI107ohVJKPtVL9rfRifIjaAKFuWwt5ubRcQ/bQKr6jYxrbkoFwtOkLVLdSs9pAnxabF9UhFBe82pDRKLXERZgamDCSJto/EUOmYVK8jnKKslq1A0yVUlOT9gZAdyKkOogKxuFcJRRZnFxsJdw5T9oIm17kVyqVOWin7wda77EGB4jaUlGTdtYWN1vEHJQuYRTyiVMN8O3tVWUAqzNn9/W4K2uNho+CwmLHZbUh0q5byuuJuGSo9U2t6YlfEgoyoUsVcVup4cZauzAmti3fd1C6W5ESvtlLRHB+rQQNb2UF1p0xAGh5ZLN0IhAIAw9xwUfUcudIPFr9ZhpC0aKQOjBT7WeY7WJzSzKfr3FuTI0AAhk1m9H2c9IQ9GjzYmwMgIK4RKIlJSRoRoyIgyoo9Ge0TIkYtZbqWaaTLY5YdQEF4zTMSTE4tXYGTDwAi7Kcq2w1cmkKDyR9UOrMmg5pnbhhChdAQITzHHfSngySsRDFLlowXdPV8Ri+FEb25OkGVYphjyGtRAV+KPp6vM3DKU0LjR8T6wVIKZyBpR0UJV1R6zVj0YUxBaoHVcXgsWTAaYNMgX2wiVC3+kws+dwzJNWjBLbUkZyiKCa9wXh7ioXCUtWY3Sqrm5YNkyBhOufW7vwxhmH6iKkkMbMgF5crId6iliwIsWs7OBSK3ITmBKYqr4VI26yohYb+bBSpZyP610JK3wNHQb8RqTZv1fJstVLUHKk5EEvJDKeLV1ugJCqDxbVkmfB13WnDGzkTsoUvc12He55r26afCpQzwnihLRSRravSKrQx06OPz4JdWF6Jnj5aBqANrJKkTPT3eaNDSSVcUdSuWKSPhAk9r57Rd5GyYOqmnozMC6q/Qfed6iU+tAyItApbzTlKlgMPmJcIua1rq7EEAPumsq5KZFOigtOf2gmIuN+G8ZCK48o6sWQqxSFSAoZqsh88ivxI+Po6qH+KL0iSJkHNn6plFhtleK0qikWIX9npabmyUudtawCVGIFwEeshnYti2y1iY61j5RioiESJ7iP1QLSrqVI9WhIlzGoxygur7hSAyaHeCNhSKd9xuGwJC55Ko2FTjoBx7TQZj9OnrTQ9PAPsP4AvV70bEPHksjmeTmeSyVS8JjmKICRrtARS6hioFb1gzxVmisPAKhTDSjWivAOr1Z1nT9YwuDSqBv8FvhjsTwwPoHBp7TSSEwNB/4+M1AiDVBRFBiDlDVTaitboQAQCPAg2y3Kwqk3LN4Bnuy52mrguU1s223RoTUN7FaNadWLiji2stlRgPacOYtsQ/zXhGJTLAqbe1dXpZLOZXDarGCmAHAVNv1khNy+0ZSYzScUaZQoR1Fo9qtSw34dhCkx5E3vyjNi5vd7ZmYnZNLJcyXeNZ8/M1ISxzHFLgyXbpdAy4tZum0S8Mpqjm4YQ2ZXMjaSHyUfu4pIw7NvDvBuu/nWwV4wWM2BnW2dn07ZTEG62IkkJMY2rPIDyesquCyG1Spg4wnYaUtaBHJIARd1dnd1d3bievaenW0fR2LAU1msFzRfUimV9ciZ+F6xcDesNQdlhUgqVAgISWHOPTzReeVFSCa9CFizX8GByaCA5M193bCsOuVUuQdNPS9P0dnqqIm50QVxl/RwUKOFGIeDlAFhomQAp7qC1wuomaZ9LQKCkVDs6gZHaSiYVsQ8DXiwC66bKkDJbKjGDkYc0SVR0665bDQWmKODEwG319PZ2dHYgnR8cHFRFHRVLV6vLxnVp8qPDCjQ9cq0Q1GqYR6YVNpx6Hrmg5adweSdOsWKxQVk7/SH4NMj87vEOrtYY4gJDtbLJiiM74z9lzD+VxnFc9+Nh946bcZ2MzTOWTFsyZcmkZXmwceaohnviCpLbcJUo34N1z+VcjouYquDqFFGt8lLJwYoGFtMEY60qpGk5p4KIJRLJst+sksQxYFgjw8NYjwCwRkdHgUDAU5hJ4LxcmgezgaKizgAZP/obvynLZSSwgIoQtKhEaiKsVpfA+ZXLiROT/iv2JUOp+5lw1YovR4YSQwPZ5XxgO0TgVZRsRZpPtTXhkvjqFfe0dBNNuIicKLJDn4NDB3uCzRwWFqZVDMsJKWCbqiVCksHr7FxJpztE1Ao4bUes5NONOnc9oXiDAsvYB2Eqkril0oXlfC2Odca2jem08jnnnJNMJilCxHCnUpoP/DpPOqLtNOqNqFKh9AHjqpwqTLOYNHG7Sh+fmLC3b22m00m0ZQQo3Hse27ktk1/xadWBSqWrAoxs1X7ayi2q6ZgWVrAQNtDIsFUYZaapA3fCBQiUjTIlkJ9EIaYeWaO/37ftJEakcbxtydmZFF0/RbIka6VI4/ZJDC/AtCe81XK5pkpqgPTuXbtisLZ0dXdBVK1Wo9ZqK7B5iayKTWAvtVpQqaq1AHbcEsZM3MNM7lL507WCd2KiccH5Xhi1mhObTWtokHVk7NWCpIZei7XXODXqOoJRa3vN4hOLFlOg84WgmLLvqjVQUvZN2Fi5iDDxbGH6GR1p6PRvWOzrS+vcFxkE+CKI7WZnk44rKKyxVI8J6byS7gglXYbwwPUqjOerVWBCIBkinUrtphZTR9msTaObzpw+QzsFe1YprJ3t6t6suGGl4sPXcNuD66FoV5wwlazVSxtHAeA5jx23t53bBHdLwkVMTWBj0Ni5/L6HBDxoTU+RJgIVFHXq9YMGqQjRweY/YOr0QJ05LY9DmaJ1E6GAMwyBE4Vk82zO/ZGRSjo1SkNJtFg5jjh7Nl0qeYkE6KO0FVgIs5YsGReKpMhkio1mvtEIqJuoOTQ0NDa2TaeVwWDt3r1LrUZSRii/fAJ5vIzK5UahWDchnWGq6vpb8aJ4jP4p+EDFgTfkV5InJwMkFSqkoftmU24esToyvF7jfhO3ZoO2OoOt0eCNGgODUq+xWg3v6/AkvdRsML+JKeBI90LSihweOTZsIbWfBUDpUDTQadj9fYvDwzmagBDbQQRsaiIH9MNxsP/NdnTwaOg3iqclYVcgWWGuY6lQWFHdG7Vabe++fel0qlWRvuTii0EQlD45jre2Muk3SyVAqlDTqYE4plM96Dq7q1o6TegvtOKAcB055lSrPrVNEF6RBPPheXL7mAUQBE04f+Y3WLNJG0KmsGP4ALGDV8GlgCdSqmep6BJbJm3peiCnwksI1Ckb5YtyUvAvkU7Xto41M5meyMiM6v1eWUnMz2dSSfys46rcg5J6Za2UE0Q15HY9lZ5bWSmoknMQ+FdddeW68v2FF14wMDCgs162W6/nZ6aPAwlAW0DRog7XVC7KUpZfaQ19j04qWAo7OIalpeTklBauOI8AwrX1HJHLoBwFPmyAmpYyeIzw0QMI38KAkamiReRCpz5QLlyACTc4Z9uOgAQQQZIU63hAtTZvnhsa6lfLw0zGDx37ieNdAFoiaRG5R/nivG39AFqBiEoIIpsrhNF8sYj1eVDkXC531VVXrQOrv79/7969ijGrVoPZmSejKIhEIKgUR6u0ItnSQyXaOhjSi2Y0Xkox7cNHvUbdp74fvYFwwbXdsT0CCUIfF9JKOAVNjA7psvKGKjdnE0ZuArsjk0npJQksF0wPRS3gdCBys5OcpQcGzo6NZVw3EwkRF5bAWuWXk2fPZpNpgdZK+U1LV28xqpJk11EB8WR7eufz+fkgCNVqxL3nn79927bn9me9/nWvjTuZHTtRLZ9s1lfUhB2FF00hUqGwqTFIqadSaO6k1mWRcHE5v5CaOh0iJxNx7GQ1fTm+PcxlLSBN8apevfTNNIgY6oTXH6QAHAJYCNrwsecSTbctVdPHiNBJWSzX1TUzPh52dvRjQBeXGTG6sA4/02NhjgVXNWLvjVR+E5h5QBtWugVOCAJmU05npufmlpQO1mrVq69+y/M0s1155atHRoZNJGaHYamwdoQC3QD3hb5GR7SxkZct4it11lhI7VoQAvuZI16zGVgmcQ63MJSZtNi5AwuVyveZFRM6yYsYIcO0XI2U5SXoHjYVIXtMtbjiCn8v6XkZxjo6cjM7dqz19w8TCbXiBD0Ytamp3Px8KpGIXYEfRD5gFPhwDIhXFPqYa4ma8FR3z2K1erZYrFD7Y9jV1XXNNdc8D1h9fX1XXXllPAMM4oy1lSf9Zjmi3cXKSJtuw7BatT7W6kc3tWEwq2BTz5wFk2niPoLMDySAlctS5K5zu5bKlmCIiwKFCRbXQEP3HDMKHq7WA4xwIZrjgUAxlgnDdCY9Nb59aWhoE7maVlUMDqBYcJ9+utv14BhwfUAk/DDCKXBBgBvJFKZ14flINEGSNmyYPnNmWvnBUrH4mquu2rJly/N3K7/97W+PR2mAmW/WF4pKuCISLqWMcVpYyVKrJhwnCOPuIDh05/DRBAZSVpxvB8slO3LhjvFmFLX1kKqcid4YJQ9Aggg1fAwhIuobxP2uC4Y8afOUiLJhaHd3PbNz58rQ8CZaTW1oAPlNoBqPHewBr2LbcLEx9RQETVI+QCoksaI/QAGlT9FyPohOzc/nbQzKJIQCv/Ir73vB1u6LLrpw//5L4WN6fJdtryw/6vvlMIR9+YLwokwlypclTE5iXTbWtAGpMroj5uYyMzOgAnFEi5gBejt3NjIZYVmmcEDxh36gsgK2fknV9dTSRfAAgQ9c3C6X3SBYGuh/ZOfOoL9/hFheKzONSWEePf69zvkFkMF6FAFMjQDVDdtMAurJoUpNSPPMcKSZxWpDw9NTU5PU2c7K5fJFF130ute97getsHjfe98TZ+VBExv1ubWVQyRczTDSeJm61boyy7oFQcz0aGCY6hw7lgRd1pbECFdXZ7htrAnWHUHB3gLya7ay3EzZb3pJL04CpMBdNht2pQJHVctln9wxfvi8nT0dHf2hkvhWLR9Mnjj8TMfERCaRDC3MQ4Q0nhLrEzglIlIxk9BWxUIZGxjIB+Hk9PSCGlJZrVZ+44MffM7AyueC9ZrXvAaEq9n0Y2VcWXqw0VhGyxU1SRkDbbx0SKXSGrGlb1+phqcJPmh2LjO/EFKZt3VKYQSWqwZMgiQYIDMVKoOU2g9hBKGlXau6lbLtN4u57NPbtz+2b5+/afNmx8mgGom4OwIvEhj1Y0c7jh7tSqeFq/0mpwEKNKWLJiCY6xYRXfAdtzI8cubYseMgbph3KZcuuGDf29/+th+yhA7e+qEP/cZDDz1s/nSCYG154YHhTVdbQYNmFFFOynThx+1tuolIyucWnLCl03v2eHJwoEmJYGkmIFidXeH4eAXkTgjP9BeaRIWl5jSoOAH0opxKrnZ15fv767296UxmBI4cTXOcNiMJx7S6LY8c7jpytCuRjLgphWHZWGDWispCpqImSQdlEyzM1rH51dVngTGA98DROpXK7/3u737/GNnnX8n6S7/87ptuujmdTitXB5H86JZrO7t34zJWL4OjqXiSc8y9WTjry7bMyCLMP1umMGXFjbWYQfvp1y319yfCsPV1HCu94dx8eXUVbASEDV4QODglhAQE/JfrNBPJRjbT6OiIOnIugOQ4aUrdRHG+2ZQGpWODLlqHDvWeOpVLYNmZ8i3aOyLpBS8c+IK640LFFYSoB0Et17G8deyJe+75TrVaAwFcXVl51WX777rrzu+fr/j8Q11///d+795774OA26YICpR9cf6OZGqIsR49J0x19nGzyiPu8tNXmenCkKkUBH4ChKuvD4TLMc3NFvZ3MntkpGt4GKlvEDaQIUZqdaal61o41gaYlEN0F05VtK03j9tOgdBHxaL35BP9EMOn0iG1gyLguHglUkE+9sWZQlJIqRh0kdyujm07e+TIU6VSBTxtSJWyP/uz//m8kyiff9kvcC7w93fddbfqfoPDDv1iGNYy2W2m00SvhIllx4ClMi3MjMRSI4jwbcWiM7SxnE7ZMeNXgSaxXYarPzhQAyCZKbU5bpLbCVyChCZZFaefgxJdbQe7GU6d6vze9wZrtUQqJRzbtI5jHgWnsEA0TukwDEfQA+pxnihW27ZPl8uPHzp0FBdRMr6wMP+bH/rQC01ve8FRBY1G441v+rknnngyk0mbSXDN/sE39PVf7rg4tdex07adgECfMY9ZDgORMfpIY9bowurmPTxoP+Dn7Vx81WVNHJSiVafVJBeff7tuyfgZ8wEts4QDRXkyn089+2zf8nLG8wRE11hh5rofCtAh1Yt8nygoMisgpU0RNYSoNv3a0ND8wMChu+6+FxwaKGCxUNiyZdMjDz8MwfOPPATj0KGnfvaNbwI2omJG4i9s48jbOrv3uHjL2DbO1eMAFvPIeOF8UVUfxkKxRZPW9EQx7C92Xf/Nb5rt7vZoEm5bs1+rsyLuDzWltPbhD/Q08gwMCazV1dTERNfcHE4RSySEqtmoJQgRIoUWCjYfYSL9VkiJuhA136+CuxgfP37f/d9ZXl6Fk6GmouKdd95xxeUvONr0Bec6qAwqYHzLLbcYZcQWo1plKpkacZxOSlcahxinh/VgLHUZzBAjoRuUm02w4lZnp0gmBaiPAkO0UnQtUYpb46QpjlJJAnPtYEjn5rJPP73hyNENxUISc1uuMK0vuvUQBMoHmJrC90OMbDBiA4qhkQqCajq9tmvXqcefeGhmZkEV5BcX5j7ykT/9xXf94r9pcM+v//oHvvTlL3d3d5tOvcDxuodG3pHJbgJ9xAoVOkdQxgRNwdTypUQM9VGNeJJ6SFYQcIiT+/r84eHG4ECjszMAH2/zlvxI2erZUe07ACZ8qlp1VteSiwvp5eV0reYCXwW9s22dwyPOQSwDc/bYGY4cnaK/EO0U2nK0U4BUWE0kCnv3njl69MEjR04AUsCW5ufnrr76Ld/4+td/8IThHw5WtVq9+uprDhw82NHRYdQi8BJ9g0P/KZMdhcjfdcF4pTiRCYblPBdcnqWqWGpApORxhxBNQYTzQSYN55lJRbmOoLMjyObCVCry3Ai1iSkuajeavF51yxXYvFoNGJ9NC9MxitLlGV1P1RwTiC5EChj6hTqaCUNlzkmmsMJMSJ0/fXLi0UNPHXWpeL2Sz28f3/bde+7p6el5EYaNTU/PvOnn3nzmzJlsNmveHyYSvRsGr85kz8HIlvBC8gXGC+29SwNIzVxbGq5paqtcmkFXYM70mEg1z661CFHGky7QE3PM86myoCq76+4ErvVcTTQAI4WrDULFpCgIpHQCIiXrUirtA6TmTpw88NRTR226FYuFzo4OIFnbt29/0cbYHT58+K1v/fmV1VVgqiabGiUSXb0b3pDJ7VB4OYQX+EfOtD5a5CLXqaRylPHoOkM4Wk10jLVXBmPZURG1Cq310BTsJRDEobDNJKQEuGpkhEeR9GniNzC7umXV/KDW3bW6Y+fskSMHDh8+4dBcCghrgLDcduutl1566Ys8IPHgwcfe8c53FoulGC9cpZxId3ZfkcldQEX2pO2k0T9qPuFazGVqbrKl8dL3huVLXaTV/YWtOT087ns0qDHJ2hqlsedeZ6uRbeKqHXPTiQTknA1pNVCmwsrw8Oqm0bPfe+zRyakzyk4BUrCzG274BoTDL8nozYMHD1577bvyKyuxPsJ1Tia8TG5POrc/keimKRkpUkmc7M41ZA61deiptwQWbw+G4tEwpk+KStxW7GZ1oya19qjFA7jyALl4KDRe9EhRcwEyJZuWbEqrHkU1xsvbxlZSqcmHHz6wtJRXSIH2gW/62teuf+1rX/OvP/0feajr008//Qvv+i+nT5/u7OyMP5tM2tnsaCqzP5Hc4npJmp6NG5ZmLc9Mnka8WBxImkkBrLVCMu74b/9NBtMrT9UQPfeImraI1qskFlYcCKlAWj7AZDEQqAaEHJ0da2PblvP5IwcPHqrXGw5NAFrN53t7e66//mv79+9/yccFg6X/5Xe/99FHH43dB+wkkXCy2Y5UerebON9L9LgOjaxBlUzS8GmPmtBoYrCRMlpvbYYrtBYjMNNqr1IOTMh44Ixs61fVbakqJ2UhTIFl+Yw1IPoIo4ZtVzaNrnR1Tj/9zKGTJ0/Fw3oXFxf27N79z//81R07drxMg6jL5fJv/rff+spXvgp8AgRbpajAWGYziUx2CPBy3HNdNweGX5kw1Eeu8HINWK1chQJLmj7alrvUjfJWnJKWps5rMKIaMq7+AqSaABNadKu6oa8wNLScXz7+5KHDxWJZjaAFjr68tHjNNW/9/Oc/39vb+3KPOP/0p//yIx/9mO/7QPTjtBKIWEdHLp0Zte2d3AEiliUR81pWnww/DsC3aBK8smLaV2ovGY+WjhdixC1jVA3FihZDUQo5B6TQSAFLYKza1VkaHFxuNE4fOXx0emYeMFKxWqlYDMPgD/7g9//wD//wxzY8/8CBA7/929d97/HHu7q6VOZM9WSlUx4YtWR6mNtbLTZi250EmRsTV8MtzO8ttHMLs2hCrkvHqAnAEY1yikiUcBPo9XxQuu7uUl/vSrMxfeLkyTNnZoGOqgF88GB5aWnXrvM+/elPxbXlH9vPMtRqtY9//BN/9Zm/rtfroJWqiVBDlk50duYymQHbGZFshLFezjOIGloxR1kxIhYOShbSCwXW+gC71ZGgxxvielVKB4OFSqUqXZ2FVCpfKs1MTZ2enV1s/12ItbU18CC/9mu/+uEPfxgu3k/KD348+eSTf/qnH73zrrswHZHJqCZVajO0Egm3oyOTy3WnUhtsZ1BaGyzWzVmWI4M1c+LVDAqmmtrbMjZW24IorIeDkQI5qicS1XSq5CXW/ObS4uLc9PTc6mqR7Kb+lZFSqVSrVa668sqPfOQjl1122U/KD36032688aa/+Iu/OPjY99TvVMVSpkZLppJeLpfO5TpT6W7P62Z2N2NwtbM4P44lNYPFfrnYMyqBCjkLbLvpOHXXqQHxFqJYra6srOSBNxUKJd8P6KeK9C/xgPOpVSv79u297rrrrr322hfx7F78HykCDv2Nb9zw2c9+9sDBx2DnQF/JXZrJo9SoC9YklUqk00kIBlKpTCKR8dwUR3bm0W8SqBlaegwrWiX8+RjQ8mqlXC6W4K6KA/AiwVX7LS1HCoOgWCpBTHjRhRe8//3vB5he9B+uewl//uruu+/+4j986Z7v3AOMP5lMplIpk0SU63+JiVGlCn+PydajlDjVeFDxQr0AX68K0gMYzA9oqWtTrVZrNfCDnVdedeV73/OeN7zhDS/RD9S95D+sBlz/5ptvufnmmw899VSxULRRplKuhwNOY0K7flJw6/df2ue8srZWTGyY8H1wLL7fBNZy/p49b3nLm6+++q3bqKf4pbuxl+3HIE+ePHnfffffe9+9hw49NTszC6eqZr652MLgkMXhbH20Y9ZxCZWaCvCGy89TqeTQxo179+69Cgz4lVfu3Lnz5TkF9vL/cibANDk5efjwEbidnDg5MzMLthrsUKPZxB9b0w11+le/sK8okcjibxr2DA8Pj41t27V7F8QrY2NjP3R8+38EsJ5zgwMo6FuxXCmDGQ98YJsSJA4UNpvNdeK6Gbxxzn+8h/r/BBgA16kwIwArdGsAAAAASUVORK5CYII='
                        });
                    }
                }
            ]
        });


        // Column selectors
        $('.datatable-button-html5-columns').DataTable({
            buttons: {            
                buttons: [
                    {
                        extend: 'copyHtml5',
                        className: 'btn btn-light',
                        exportOptions: {
                            columns: [ 0, ':visible' ]
                        }
                    },
                    {
                        extend: 'excelHtml5',
                        className: 'btn btn-light',
                        exportOptions: {
                            columns: ':visible'
                        }
                    },
                    {
                        extend: 'pdfHtml5',
                        className: 'btn btn-light',
                        exportOptions: {
                            columns: [0, 1, 2, 5]
                        }
                    },
                    {
                        extend: 'colvis',
                        text: '<i class="icon-three-bars"></i>',
                        className: 'btn bg-blue btn-icon dropdown-toggle'
                    }
                ]
            }
        });


        // Tab separated values
        $('.datatable-button-html5-tab').DataTable({
            buttons: {            
                buttons: [
                    {
                        extend: 'copyHtml5',
                        className: 'btn btn-light',
                        text: '<i class="icon-copy3 mr-2"></i> Copy'
                    },
                    {
                        extend: 'csvHtml5',
                        className: 'btn btn-light',
                        text: '<i class="icon-file-spreadsheet mr-2"></i> CSV',
                        fieldSeparator: '\t',
                        extension: '.tsv'
                    }
                ]
            }
        });
    };

    // Select2 for length menu styling
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity,
            dropdownAutoWidth: true,
            width: 'auto'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentDatatableButtonsHtml5();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DatatableButtonsHtml5.init();
});

