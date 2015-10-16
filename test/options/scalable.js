window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  var image = window.createCropperImage();

  image.newCropper = new Cropper(image, {
    built: function () {
      var cropper = this.cropper;

      QUnit.test('options.scalable: true', function (assert) {
        var imageData = cropper.scale(-1, -1).getImageData();

        assert.equal(imageData.scaleX, -1);
        assert.equal(imageData.scaleY, -1);
      });

    }
  });

  (function () {
    var image = window.createCropperImage();

    image.newCropper = new Cropper(image, {
      scalable: false,

      built: function () {
        var cropper = this.cropper;

        QUnit.test('options.scalable: false', function (assert) {
          var imageData = cropper.scale(-1, -1).getImageData();

          assert.equal(imageData.scaleX, undefined);
          assert.equal(imageData.scaleY, undefined);
        });

      }
    });
  })();

});
