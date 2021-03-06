/**
 * MIT License
 *
 * Copyright (c) 2020 lk-code
 * see more at https://github.com/lk-code/jquery-content-scaling
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
jQuery.fn.contentScaling = function (options) {

    var defaults = {
        selectors: {
            scalingSelector: '.scaling'
        }
    };

    var settings = $.extend({}, defaults, options);

    var methods = {
        init: function (element) {
            var me = this;

            methods.scale(element);
        },

        scale: function (element) {
            var me = this;

            var containerWidth = $(element).width();
            var scalingContainer = $(element).children(settings.scalingSelector)[0];
            var scalingContainerWidth = $(scalingContainer).width();

            var scaleFactor = (containerWidth / scalingContainerWidth);

            $(scalingContainer).css('transform', 'scale(' + scaleFactor + ')');
            $(scalingContainer).css('transform-origin', 'left top');

            var containerHeight = ($(scalingContainer).height() * scaleFactor);
            $(element).css('height', containerHeight);
        },
    };

    return this.each(function () {
        methods.init($(this));
    });
};
