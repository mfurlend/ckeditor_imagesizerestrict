CKEditor Imagesizerestrict Plugin
==========

Copyright (c) 2016, Mike Furlender All rights reserved.

This is a restriction on the image2 plugin (enhanced image) by CKSource.
It includes support for a new `config` property: `image`. The value of this 
property is an object with two properties of its own, `maxwidth` and `maxheight`:

example: 
        
    CKEDITOR.replace("editor1", {
        customConfig: '',
        image: {
                maxwidth: 600,
                maxheight: 750 * 2/5
            }

## Installation

 1. Download the package.
 2. Extract files and save them in ckeditor/plugins/imagesizerestrict directory.
 3. Enable the plugin:
    `config.extraPlugins = 'imagesizerestrict';`

**Dependencies:** Requires the following plugins to work: Image2, Widget, Line Utilities, Dialog.
