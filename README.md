Spectrum
========

![spectrum](https://raw.githubusercontent.com/silvanocerza/spectrum/master/images/spectrum.png)

An highly customizable Hugo theme based on the CSS framework Bulma.

Features
========

* Responsive layout, supports any screen size
* Fully customizable using Bulma variables
* No Javascript (except for optional internal templates)

You can find some examples of theme customization in the `images` folder.

Configuration
=============

The theme colors can be customized completely, to do so you must create a custom file named `bulma-variables.sass` in your site `assets/css` folder, the name must be exact.

Inside `bulma-variables.sass` you can change any of Bulma's initial or derived variables. [Here](https://bulma.io/documentation/customize/variables/) you can find a complete list.

For an example of a `bulma-variables.sass` file see the [exampleSite](https://github.com/silvanocerza/spectrum/blob/master/exampleSite/assets/css/bulma-variables.sass).

Also you can add a subtitle on your site with:

    [params]
      subtitle = "This is the subtitle"


Custom shortcodes
=================

## image

The `image` shortcode can be used to show an image from the page resources.

Given this resource specified in a page front matter:

    [[resources]]
        name = "some-image"
        src = "imagename.jpg"

You can load the image like so:

    {{< image "some-image" "This is the really long caption about this image" >}}

The first argument is the name of image specified in the front matter.
The optional second argument is the caption that will be shown below the image.
It's safe to use HTML in the image caption.

Installation
============

From your site root:

    git submodule add git@github.com:silvanocerza/spectrum.git themes/spectrum
    git submodule update --init --recursive

Set the theme in your site config:

    theme = "spectrum"

And you're all set!

Update
======

To update the theme from your site root:

    git submodule update --recursive

License
=======

This theme is licensed under the [BSD 3-Clause License](https://github.com/silvanocerza/spectrum/blob/master/LICENSE).
