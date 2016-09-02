/**
 * @license Copyright (c) 2016, Mike Furlender. All rights reserved.
 * @author Mike Furlender <furlender@weatherbell.com>
 */

'use strict';

(function () {
    CKEDITOR.plugins.add('imagesizerestrict', {
        lang: 'en',
        requires: 'widget,dialog,image2',
        init: function (editor) {
            // bind to widget#instanceCreated so we can see when the image widget is about to be initiated
            editor.widgets.on('instanceCreated', function (e) {
                var widget = e.data;

                // figure out if this is the image dialog.
                if (widget.name != 'image')
                    return;

                // register handler for data
                widget.on('data', function (e) {
                    widget = e.data;
                    var width = widget.width;
                    var height = widget.height;
                    var maxWidth = editor.config.image.maxwidth || 600;
                    var maxHeight = editor.config.image.maxheight || 750 * (2 / 5);
                    var ratio = 0;  // Used for aspect ratio

                    if ((!width && !height) || (width <= maxWidth && height <= maxHeight)){
                        return true;
                    }

                    // Check if the current width is larger than the max
                    if (width > maxWidth) {
                        ratio = maxWidth / width;   // get ratio for scaling image
                        height = height * ratio;    // Reset height to match scaled image
                        width = width * ratio;    // Reset width to match scaled image
                    }
                    // Check if current height is larger than max
                    if (height > maxHeight) {
                        ratio = maxHeight / height; // get ratio for scaling image
                        height = height * ratio;
                        width = width * ratio;    // Reset width to match scaled image
                    }
                    width = Math.floor(width);
                    height = Math.floor(height);
                    e.cancel(); //needed to prevent image2 from attempting to remove styles that don't exist (why?)
                    this.setData({width: width, height: height});
                });

            });
        }
    });
})();
