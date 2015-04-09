
angular.module('ngS3upload.directives', []).
  directive('s3Upload', ['$parse', 'S3Uploader', 'ngS3Config', function ($parse, S3Uploader, ngS3Config) {
    return {
      restrict: 'AC',
      require: '?ngModel',
      replace: true,
      transclude: false,
      scope: true,
      controller: ['$scope', '$element', '$attrs', '$transclude', function ($scope, $element, $attrs, $transclude) {
        $scope.attempt = false;
        $scope.success = false;
        $scope.uploading = false;

        $scope.barClass = function () {
          return {
            "bar-success": $scope.attempt && !$scope.uploading && $scope.success
          };
        };
      }],
      compile: function (element, attr, linker) {
        return {
          pre: function ($scope, $element, $attr) {
            if (angular.isUndefined($attr.bucket)) {
              throw Error('bucket is a mandatory attribute');
            }
          },
          post: function (scope, element, attrs, ngModel) {
            // Build the opts array
            var opts = angular.extend({}, scope.$eval(attrs.s3UploadOptions || attrs.options));
            opts = angular.extend({
              submitOnChange: true,
              getOptionsUri: '/getS3Options',
              getManualOptions: null,
              mimeTypes: [],
              acl: 'public-read',
              uploadingKey: 'uploading',
              folder: '',
              buttonText: 'Select File',
              dropText: 'Drop File Here',
              errorText: 'Incorrect File Type',
              enableValidation: true,
              targetFilename: null
            }, opts);
            var bucket = scope.$eval(attrs.bucket);
            scope.buttonText = opts.buttonText;
            scope.dropText = opts.dropText;

            // Bind the button click event
            var button = angular.element(document.getElementById('s3-button-target')),
              file = angular.element(element.find("input"))[0];
            button.bind('click', function (e) {
              file.click();
            });

            function Init() {

                var fileselect = document.getElementById("s3-file-target"),
                  filedrag = document.getElementById("s3-drop-target");

                // file drop
                filedrag.addEventListener("dragover", FileDragHover, false);
                filedrag.addEventListener("dragleave", FileDragHover, false);
                filedrag.addEventListener("drop", FileSelectHandler, false);
                filedrag.style.display = "block";


            }

            function FileDragHover(e) {
              e.stopPropagation();
              e.preventDefault();
              e.target.className = (e.type == "dragover" ? "hover" : "");
            }

            if (window.File && window.FileList && window.FileReader) {
              Init();
            }

            // file selection
            function FileSelectHandler(e) {

              // cancel event and hover styling
              FileDragHover(e);

              // fetch FileList object
              uploadFile((e.target.files || e.dataTransfer.files)[0]);
            }


            // Update the scope with the view value
            ngModel.$render = function () {
              scope.filename = ngModel.$viewValue;
            };

            function uploadFile(selectedFile) {
              var filename, mimeTypeMatch, ext;
              if(arguments.length === 0){
                selectedFile = file.files[0];
              }
              filename = selectedFile.name;
              mimeTypeMatch = false;
              if(opts.mimeTypes.length > 0){
                mimeTypeMatch = opts.mimeTypes.some(function(element){
                  if(selectedFile.type.match(element)){
                    return true;
                  }
                  return false;
                });
              } else {
                mimeTypeMatch = true;
              }

              if(!mimeTypeMatch){
                if(typeof(sweetAlert) === 'function'){
                  return sweetAlert('File Type Error', opts.errorText,  'error');
                }
                return alert('File Type Error: ' + opts.errorText);
              }
              ext = filename.split('.').pop();

              if(angular.isObject(opts.getManualOptions)) {
                _upload(opts.getManualOptions);
              } else {
                S3Uploader.getUploadOptions(opts.getOptionsUri).then(function (s3Options) {
                  _upload(s3Options);
                }, function (error) {
                  throw Error("Can't receive the needed options for S3 " + error);
                });
              }

              function _upload(s3Options){
                if (opts.enableValidation) {
                  ngModel.$setValidity('uploading', false);
                }

                var s3Uri = 'https://' + bucket + '.s3.amazonaws.com/';
                var key = opts.folder + (new Date()).getTime() + '-' + S3Uploader.randomString(16) + '.' + ext;
                S3Uploader.upload(scope,
                    s3Uri,
                    key,
                    opts.acl,
                    selectedFile.type,
                    s3Options.key,
                    s3Options.policy,
                    s3Options.signature,
                    selectedFile
                  ).then(function () {
                    ngModel.$setViewValue(s3Uri + key);
                    scope.filename = ngModel.$viewValue;

                    if (opts.enableValidation) {
                      ngModel.$setValidity('uploading', true);
                      ngModel.$setValidity('succeeded', true);
                    }
                  }, function () {
                    scope.filename = ngModel.$viewValue;

                    if (opts.enableValidation) {
                      ngModel.$setValidity('uploading', true);
                      ngModel.$setValidity('succeeded', false);
                    }
                  });
              }
            };

            element.bind('change', function (nVal) {
              if (opts.submitOnChange) {
                scope.$apply(function () {
                  uploadFile();
                });
              }
            });

            if (angular.isDefined(attrs.doUpload)) {
              scope.$watch(attrs.doUpload, function(value) {
                if (value) uploadFile();
              });
            }
          }
        };
      },
      templateUrl: 'ng-s3upload.html'
    };
  }]);
