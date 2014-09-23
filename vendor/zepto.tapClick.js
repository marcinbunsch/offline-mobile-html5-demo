//  Zepto.js tapClick module
//  (c) 2014 Marcin Bunsch
//  May be freely distributed under the MIT license.

;(function($){
  var tapClick = function(callback){
    var eventName

    if (!$.os || !$.fn.tap) {
      (console.warn || console.log)('zepto.tapClick requires zepto.js with touch and detect modules. Falling back to click.')
      eventName = 'click'
    } else {
      var isMobile = $.os.phone || $.os.tablet
      eventName = isMobile ? 'tap' : 'click'
    }

    return this.on(eventName, callback)
  }

  $.fn.tapClick = tapClick

})(Zepto)
