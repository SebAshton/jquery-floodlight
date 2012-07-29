// $('#a').floodlightTag({
//   src: '1234567',
//   type: 'foo',
//   cat: 'bar',
//   return_false: true
// });

;(function ( $, window, undefined ) {

  var pluginName = 'floodlightTag',
      document = window.document,
      defaults = {
        src: null,
        type: null,
        cat: null,
        return_false: true
      };

  function Plugin( element, options ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options) ;
    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype.init = function () {

    if (this.options.src == null || this.options.type == null || this.options.cat == null) {
      console.debug('Not all options defined.');
      return false
    };

    var $this = $(this),
        self = this;

    return $this.each(function () {

      var rand = Math.random() + "",
          a = rand * 10000000000000;

      $(this.element).on({
        click: function() {
          $('body').append('<img src="https://ad.doubleclick.net/activity;src=' + self.options.src + ';type=' + self.options.type + ';cat=' + self.options.cat + ';ord=' + a + '?" width="1" height="1" alt=""/>');
          return self.options.return_false;
        }
      })
    });
  };

  // A really lightweight plugin wrapper around the constructor, 
  // preventing against multiple instantiations
  $.fn[pluginName] = function ( options ) {
    var $this = $(this);
    return $this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  }

}(jQuery, window));