// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
'use strict';

angular.module('ngS3upload.config', []).value('ngS3upload.config', {
  debug: true
}).config(['$compileProvider', function ($compileProvider) {
  if (angular.isDefined($compileProvider.urlSanitizationWhitelist)) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
  } else {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
  }
}]);

// Modules
angular.module('ngS3upload.directives', []);
angular.module('ngS3upload', ['ngS3upload.config', 'ngS3upload.directives', 'ngS3upload.services', 'ngSanitize']);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZy1zM3VwbG9hZC9uZy1zM3VwbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FDckMsS0FBSyxDQUFDLG1CQUFtQixFQUFFO0FBQ3ZCLE9BQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQyxDQUNGLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixFQUFFLFVBQVMsZ0JBQWdCLEVBQUM7QUFDcEQsTUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLEVBQUU7QUFDaEUsb0JBQWdCLENBQUMsd0JBQXdCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztHQUNqRixNQUFNO0FBQ0wsb0JBQWdCLENBQUMsMEJBQTBCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztHQUNuRjtDQUNGLENBQUMsQ0FBQyxDQUFDOzs7QUFHTixPQUFPLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUN2QixDQUNJLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLFlBQVksQ0FDZixDQUFDLENBQUMiLCJmaWxlIjoic3JjL25nLXMzdXBsb2FkL25nLXMzdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlIGFsbCBtb2R1bGVzIGFuZCBkZWZpbmUgZGVwZW5kZW5jaWVzIHRvIG1ha2Ugc3VyZSB0aGV5IGV4aXN0XG4vLyBhbmQgYXJlIGxvYWRlZCBpbiB0aGUgY29ycmVjdCBvcmRlciB0byBzYXRpc2Z5IGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4vLyBiZWZvcmUgYWxsIG5lc3RlZCBmaWxlcyBhcmUgY29uY2F0ZW5hdGVkIGJ5IEdydW50XG5cbi8vIENvbmZpZ1xuYW5ndWxhci5tb2R1bGUoJ25nUzN1cGxvYWQuY29uZmlnJywgW10pLlxuICB2YWx1ZSgnbmdTM3VwbG9hZC5jb25maWcnLCB7XG4gICAgICBkZWJ1ZzogdHJ1ZVxuICB9KS5cbiAgY29uZmlnKFsnJGNvbXBpbGVQcm92aWRlcicsIGZ1bmN0aW9uKCRjb21waWxlUHJvdmlkZXIpe1xuICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCgkY29tcGlsZVByb3ZpZGVyLnVybFNhbml0aXphdGlvbldoaXRlbGlzdCkpIHtcbiAgICAgICRjb21waWxlUHJvdmlkZXIudXJsU2FuaXRpemF0aW9uV2hpdGVsaXN0KC9eXFxzKihodHRwcz98ZnRwfG1haWx0b3xmaWxlfGRhdGEpOi8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAkY29tcGlsZVByb3ZpZGVyLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KC9eXFxzKihodHRwcz98ZnRwfG1haWx0b3xmaWxlfGRhdGEpOi8pO1xuICAgIH1cbiAgfV0pO1xuXG4vLyBNb2R1bGVzXG5hbmd1bGFyLm1vZHVsZSgnbmdTM3VwbG9hZC5kaXJlY3RpdmVzJywgW10pO1xuYW5ndWxhci5tb2R1bGUoJ25nUzN1cGxvYWQnLFxuICAgIFtcbiAgICAgICAgJ25nUzN1cGxvYWQuY29uZmlnJyxcbiAgICAgICAgJ25nUzN1cGxvYWQuZGlyZWN0aXZlcycsXG4gICAgICAgICduZ1MzdXBsb2FkLnNlcnZpY2VzJyxcbiAgICAgICAgJ25nU2FuaXRpemUnXG4gICAgXSk7XG4iXX0=;
'use strict';

angular.module('ngS3upload.config', []).constant('ngS3Config', {
  theme: 'bootstrap3'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZy1zM3VwbG9hZC9zZXJ2aWNlcy9zMy1jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUNyQyxRQUFRLENBQUMsWUFBWSxFQUFFO0FBQ3JCLE9BQUssRUFBRSxZQUFZO0NBQ3BCLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvbmctczN1cGxvYWQvc2VydmljZXMvczMtY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ25nUzN1cGxvYWQuY29uZmlnJywgW10pLlxuICBjb25zdGFudCgnbmdTM0NvbmZpZycsIHtcbiAgICB0aGVtZTogJ2Jvb3RzdHJhcDMnXG4gIH0pO1xuIl19;
'use strict';

angular.module('ngS3upload.services', []).service('S3Uploader', ['$http', '$q', '$window', function ($http, $q, $window) {
  this.uploads = 0;
  var self = this;

  this.getUploadOptions = function (uri) {
    var deferred = $q.defer();
    $http.get(uri).success(function (response, status) {
      deferred.resolve(response);
    }).error(function (error, status) {
      deferred.reject(error);
    });

    return deferred.promise;
  };

  this.randomString = function (length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];

    return result;
  };

  this.upload = function (scope, uri, key, acl, type, accessKey, policy, signature, file) {
    var deferred = $q.defer();
    scope.attempt = true;

    var fd = new FormData();
    fd.append('key', key);
    fd.append('acl', acl);
    fd.append('Content-Type', file.type);
    fd.append('AWSAccessKeyId', accessKey);
    fd.append('policy', policy);
    fd.append('signature', signature);
    fd.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', uploadProgress, false);
    xhr.addEventListener('load', uploadComplete, false);
    xhr.addEventListener('error', uploadFailed, false);
    xhr.addEventListener('abort', uploadCanceled, false);
    scope.$emit('s3upload:start', xhr);

    // Define event handlers
    function uploadProgress(e) {
      scope.$apply(function () {
        if (e.lengthComputable) {
          scope.progress = Math.round(e.loaded * 100 / e.total);
        } else {
          scope.progress = 'unable to compute';
        }
        var msg = { type: 'progress', value: scope.progress };
        scope.$emit('s3upload:progress', msg);
        if (typeof deferred.notify === 'function') {
          deferred.notify(msg);
        }
      });
    }
    function uploadComplete(e) {
      var xhr = e.srcElement || e.target;
      scope.$apply(function () {
        self.uploads--;
        scope.uploading = false;
        if (xhr.status === 204) {
          // successful upload
          scope.success = true;
          deferred.resolve(xhr);
          scope.$emit('s3upload:success', xhr, { path: uri + key });
        } else {
          scope.success = false;
          deferred.reject(xhr);
          scope.$emit('s3upload:error', xhr);
        }
      });
    }
    function uploadFailed(e) {
      var xhr = e.srcElement || e.target;
      scope.$apply(function () {
        self.uploads--;
        scope.uploading = false;
        scope.success = false;
        deferred.reject(xhr);
        scope.$emit('s3upload:error', xhr);
      });
    }
    function uploadCanceled(e) {
      var xhr = e.srcElement || e.target;
      scope.$apply(function () {
        self.uploads--;
        scope.uploading = false;
        scope.success = false;
        deferred.reject(xhr);
        scope.$emit('s3upload:abort', xhr);
      });
    }

    // Send the file
    scope.uploading = true;
    this.uploads++;
    xhr.open('POST', uri, true);
    xhr.send(fd);

    return deferred.promise;
  };

  this.isUploading = function () {
    return this.uploads > 0;
  };
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZy1zM3VwbG9hZC9zZXJ2aWNlcy9zMy11cGxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQ3ZDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO0FBQzdFLE1BQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLE1BQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsTUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQ3JDLFFBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMxQixTQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNaLE9BQU8sQ0FBQyxVQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUU7QUFDbEMsY0FBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNoQyxjQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCLENBQUMsQ0FBQzs7QUFFTCxXQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7R0FDekIsQ0FBQzs7QUFFRixNQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsTUFBTSxFQUFFO0FBQ3BDLFFBQUksS0FBSyxHQUFHLGdFQUFnRSxDQUFDO0FBQzdFLFFBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixTQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUks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LE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixhQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO09BQ3BDLENBQUMsQ0FBQztLQUNKOzs7QUFHRCxTQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN2QixRQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDZixPQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUIsT0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFYixXQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7R0FDekIsQ0FBQzs7QUFFRixNQUFJLENBQUMsV0FBVyxHQUFHLFlBQVk7QUFDN0IsV0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztHQUN6QixDQUFDO0NBQ0gsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic3JjL25nLXMzdXBsb2FkL3NlcnZpY2VzL3MzLXVwbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ25nUzN1cGxvYWQuc2VydmljZXMnLCBbXSkuXG4gIHNlcnZpY2UoJ1MzVXBsb2FkZXInLCBbJyRodHRwJywgJyRxJywgJyR3aW5kb3cnLCBmdW5jdGlvbiAoJGh0dHAsICRxLCAkd2luZG93KSB7XG4gICAgdGhpcy51cGxvYWRzID0gMDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmdldFVwbG9hZE9wdGlvbnMgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAuZ2V0KHVyaSkuXG4gICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24gKGVycm9yLCBzdGF0dXMpIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMucmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgICAgdmFyIGNoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbiAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgIGZvciAodmFyIGkgPSBsZW5ndGg7IGkgPiAwOyAtLWkpIHJlc3VsdCArPSBjaGFyc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoY2hhcnMubGVuZ3RoIC0gMSkpXTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG5cbiAgICB0aGlzLnVwbG9hZCA9IGZ1bmN0aW9uIChzY29wZSwgdXJpLCBrZXksIGFjbCwgdHlwZSwgYWNjZXNzS2V5LCBwb2xpY3ksIHNpZ25hdHVyZSwgZmlsZSkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgIHNjb3BlLmF0dGVtcHQgPSB0cnVlO1xuXG4gICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZkLmFwcGVuZCgna2V5Jywga2V5KTtcbiAgICAgIGZkLmFwcGVuZCgnYWNsJywgYWNsKTtcbiAgICAgIGZkLmFwcGVuZCgnQ29udGVudC1UeXBlJywgZmlsZS50eXBlKTtcbiAgICAgIGZkLmFwcGVuZCgnQVdTQWNjZXNzS2V5SWQnLCBhY2Nlc3NLZXkpO1xuICAgICAgZmQuYXBwZW5kKCdwb2xpY3knLCBwb2xpY3kpO1xuICAgICAgZmQuYXBwZW5kKCdzaWduYXR1cmUnLCBzaWduYXR1cmUpO1xuICAgICAgZmQuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcblxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgdXBsb2FkUHJvZ3Jlc3MsIGZhbHNlKTtcbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB1cGxvYWRDb21wbGV0ZSwgZmFsc2UpO1xuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB1cGxvYWRGYWlsZWQsIGZhbHNlKTtcbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgdXBsb2FkQ2FuY2VsZWQsIGZhbHNlKTtcbiAgICAgIHNjb3BlLiRlbWl0KCdzM3VwbG9hZDpzdGFydCcsIHhocik7XG5cbiAgICAgIC8vIERlZmluZSBldmVudCBoYW5kbGVyc1xuICAgICAgZnVuY3Rpb24gdXBsb2FkUHJvZ3Jlc3MoZSkge1xuICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb2dyZXNzID0gTWF0aC5yb3VuZChlLmxvYWRlZCAqIDEwMCAvIGUudG90YWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29wZS5wcm9ncmVzcyA9ICd1bmFibGUgdG8gY29tcHV0ZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBtc2cgPSB7dHlwZTogJ3Byb2dyZXNzJywgdmFsdWU6IHNjb3BlLnByb2dyZXNzfTtcbiAgICAgICAgICBzY29wZS4kZW1pdCgnczN1cGxvYWQ6cHJvZ3Jlc3MnLCBtc2cpO1xuICAgICAgICAgIGlmICh0eXBlb2YgZGVmZXJyZWQubm90aWZ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkobXNnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiB1cGxvYWRDb21wbGV0ZShlKSB7XG4gICAgICAgIHZhciB4aHIgPSBlLnNyY0VsZW1lbnQgfHwgZS50YXJnZXQ7XG4gICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi51cGxvYWRzLS07XG4gICAgICAgICAgc2NvcGUudXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwNCkgeyAvLyBzdWNjZXNzZnVsIHVwbG9hZFxuICAgICAgICAgICAgc2NvcGUuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHhocik7XG4gICAgICAgICAgICBzY29wZS4kZW1pdCgnczN1cGxvYWQ6c3VjY2VzcycsIHhociwge3BhdGg6IHVyaSArIGtleX0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29wZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeGhyKTtcbiAgICAgICAgICAgIHNjb3BlLiRlbWl0KCdzM3VwbG9hZDplcnJvcicsIHhocik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHVwbG9hZEZhaWxlZChlKSB7XG4gICAgICAgIHZhciB4aHIgPSBlLnNyY0VsZW1lbnQgfHwgZS50YXJnZXQ7XG4gICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi51cGxvYWRzLS07XG4gICAgICAgICAgc2NvcGUudXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2NvcGUuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh4aHIpO1xuICAgICAgICAgIHNjb3BlLiRlbWl0KCdzM3VwbG9hZDplcnJvcicsIHhocik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gdXBsb2FkQ2FuY2VsZWQoZSkge1xuICAgICAgICB2YXIgeGhyID0gZS5zcmNFbGVtZW50IHx8IGUudGFyZ2V0O1xuICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYudXBsb2Fkcy0tO1xuICAgICAgICAgIHNjb3BlLnVwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNjb3BlLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeGhyKTtcbiAgICAgICAgICBzY29wZS4kZW1pdCgnczN1cGxvYWQ6YWJvcnQnLCB4aHIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VuZCB0aGUgZmlsZVxuICAgICAgc2NvcGUudXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBsb2FkcysrO1xuICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmksIHRydWUpO1xuICAgICAgeGhyLnNlbmQoZmQpO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5pc1VwbG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwbG9hZHMgPiAwO1xuICAgIH07XG4gIH1dKTtcbiJdfQ==;
'use strict';

angular.module('ngS3upload.directives', []).directive('s3Upload', ['$parse', 'S3Uploader', 'ngS3Config', function ($parse, S3Uploader, ngS3Config) {
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
          'bar-success': $scope.attempt && !$scope.uploading && $scope.success
        };
      };
    }],
    compile: function compile(element, attr, linker) {
      return {
        pre: function pre($scope, $element, $attr) {
          if (angular.isUndefined($attr.bucket)) {
            throw Error('bucket is a mandatory attribute');
          }
        },
        post: function post(scope, element, attrs, ngModel) {
          // Build the opts array
          var opts = angular.extend({}, scope.$eval(attrs.s3UploadOptions || attrs.options));
          opts = angular.extend({
            submitOnChange: true,
            getOptionsUri: '/getS3Options',
            getManualOptions: null,
            acl: 'public-read',
            uploadingKey: 'uploading',
            folder: '',
            enableValidation: true,
            targetFilename: null
          }, opts);
          var bucket = scope.$eval(attrs.bucket);

          // Bind the button click event
          var button = angular.element(document.getElementById('s3-button-target')),
              file = angular.element(element.find('input'))[0];
          console.log(button);
          button.bind('click', function (e) {
            console.log('test this');

            file.click();
          });

          function Init() {

            var fileselect = document.getElementById('s3-file-target'),
                filedrag = document.getElementById('s3-drop-target');

            // file drop
            filedrag.addEventListener('dragover', FileDragHover, false);
            filedrag.addEventListener('dragleave', FileDragHover, false);
            filedrag.addEventListener('drop', FileSelectHandler, false);
            filedrag.style.display = 'block';
          }

          function FileDragHover(e) {
            e.stopPropagation();
            e.preventDefault();
            e.target.className = e.type == 'dragover' ? 'hover' : '';
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
            if (arguments.length === 0) {
              selectedFile = file.files[0];
              console.log('testing here yo');
              console.log(file.files[0]);
            }
            console.log(selectedFile);
            var filename = selectedFile.name;
            var ext = filename.split('.').pop();

            if (angular.isObject(opts.getManualOptions)) {
              _upload(opts.getManualOptions);
            } else {
              S3Uploader.getUploadOptions(opts.getOptionsUri).then(function (s3Options) {
                _upload(s3Options);
              }, function (error) {
                throw Error('Can\'t receive the needed options for S3 ' + error);
              });
            }

            function _upload(s3Options) {
              if (opts.enableValidation) {
                ngModel.$setValidity('uploading', false);
              }

              var s3Uri = 'https://' + bucket + '.s3.amazonaws.com/';
              var key = opts.folder + new Date().getTime() + '-' + S3Uploader.randomString(16) + '.' + ext;
              S3Uploader.upload(scope, s3Uri, key, opts.acl, selectedFile.type, s3Options.key, s3Options.policy, s3Options.signature, selectedFile).then(function () {
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
            scope.$watch(attrs.doUpload, function (value) {
              if (value) uploadFile();
            });
          }
        }
      };
    },
    templateUrl: function templateUrl(elm, attrs) {
      var theme = attrs.theme || ngS3Config.theme;
      return 'theme/' + theme + '.html';
    }
  };
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZy1zM3VwbG9hZC9kaXJlY3RpdmVzL3MzLXVwbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE9BQU8sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLENBQ3pDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3JHLFNBQU87QUFDTCxZQUFRLEVBQUUsSUFBSTtBQUNkLFdBQU8sRUFBRSxVQUFVO0FBQ25CLFdBQU8sRUFBRSxJQUFJO0FBQ2IsY0FBVSxFQUFFLEtBQUs7QUFDakIsU0FBSyxFQUFFLElBQUk7QUFDWCxjQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7QUFDM0csWUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDdkIsWUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDdkIsWUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7O0FBRXpCLFlBQU0sQ0FBQyxRQUFRLEdBQUcsWUFBWTtBQUM1QixlQUFPO0FBQ0wsdUJBQWEsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTztTQUNyRSxDQUFDO09BQ0gsQ0FBQztLQUNILENBQUM7QUFDRixXQUFPLEVBQUUsaUJBQVUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDeEMsYUFBTztBQUNMLFdBQUcsRUFBRSxhQUFVLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLGNBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDckMsa0JBQU0sS0FBSyxDQUFD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QUMsY0FBYyxFQUFFO0FBQ3ZCLG1CQUFLLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDdkIsMEJBQVUsRUFBRSxDQUFDO2VBQ2QsQ0FBQyxDQUFDO2FBQ0o7V0FDRixDQUFDLENBQUM7O0FBRUgsY0FBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNyQyxpQkFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVMsS0FBSyxFQUFFO0FBQzNDLGtCQUFJLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUN6QixDQUFDLENBQUM7V0FDSjtTQUNGO09BQ0YsQ0FBQztLQUNIO0FBQ0QsZUFBVyxFQUFFLHFCQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDaEMsVUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDO0FBQzVDLGFBQU8sUUFBUSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7S0FDbkM7R0FDRixDQUFDO0NBQ0gsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic3JjL25nLXMzdXBsb2FkL2RpcmVjdGl2ZXMvczMtdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hbmd1bGFyLm1vZHVsZSgnbmdTM3VwbG9hZC5kaXJlY3RpdmVzJywgW10pLlxuICBkaXJlY3RpdmUoJ3MzVXBsb2FkJywgWyckcGFyc2UnLCAnUzNVcGxvYWRlcicsICduZ1MzQ29uZmlnJywgZnVuY3Rpb24gKCRwYXJzZSwgUzNVcGxvYWRlciwgbmdTM0NvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0FDJyxcbiAgICAgIHJlcXVpcmU6ICc/bmdNb2RlbCcsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgdHJhbnNjbHVkZTogZmFsc2UsXG4gICAgICBzY29wZTogdHJ1ZSxcbiAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRhdHRycycsICckdHJhbnNjbHVkZScsIGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICR0cmFuc2NsdWRlKSB7XG4gICAgICAgICRzY29wZS5hdHRlbXB0ID0gZmFsc2U7XG4gICAgICAgICRzY29wZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICRzY29wZS51cGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAkc2NvcGUuYmFyQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwiYmFyLXN1Y2Nlc3NcIjogJHNjb3BlLmF0dGVtcHQgJiYgISRzY29wZS51cGxvYWRpbmcgJiYgJHNjb3BlLnN1Y2Nlc3NcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfV0sXG4gICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWxlbWVudCwgYXR0ciwgbGlua2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHIpIHtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzVW5kZWZpbmVkKCRhdHRyLmJ1Y2tldCkpIHtcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2J1Y2tldCBpcyBhIG1hbmRhdG9yeSBhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHBvc3Q6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBvcHRzIGFycmF5XG4gICAgICAgICAgICB2YXIgb3B0cyA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBzY29wZS4kZXZhbChhdHRycy5zM1VwbG9hZE9wdGlvbnMgfHwgYXR0cnMub3B0aW9ucykpO1xuICAgICAgICAgICAgb3B0cyA9IGFuZ3VsYXIuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgc3VibWl0T25DaGFuZ2U6IHRydWUsXG4gICAgICAgICAgICAgIGdldE9wdGlvbnNVcmk6ICcvZ2V0UzNPcHRpb25zJyxcbiAgICAgICAgICAgICAgZ2V0TWFudWFsT3B0aW9uczogbnVsbCxcbiAgICAgICAgICAgICAgYWNsOiAncHVibGljLXJlYWQnLFxuICAgICAgICAgICAgICB1cGxvYWRpbmdLZXk6ICd1cGxvYWRpbmcnLFxuICAgICAgICAgICAgICBmb2xkZXI6ICcnLFxuICAgICAgICAgICAgICBlbmFibGVWYWxpZGF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICB0YXJnZXRGaWxlbmFtZTogbnVsbFxuICAgICAgICAgICAgfSwgb3B0cyk7XG4gICAgICAgICAgICB2YXIgYnVja2V0ID0gc2NvcGUuJGV2YWwoYXR0cnMuYnVja2V0KTtcblxuICAgICAgICAgICAgLy8gQmluZCB0aGUgYnV0dG9uIGNsaWNrIGV2ZW50XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzMy1idXR0b24tdGFyZ2V0JykpLFxuICAgICAgICAgICAgICBmaWxlID0gYW5ndWxhci5lbGVtZW50KGVsZW1lbnQuZmluZChcImlucHV0XCIpKVswXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b24uYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCB0aGlzJyk7XG5cbiAgICAgICAgICAgICAgZmlsZS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIEluaXQoKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgZmlsZXNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiczMtZmlsZS10YXJnZXRcIiksXG4gICAgICAgICAgICAgICAgICBmaWxlZHJhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiczMtZHJvcC10YXJnZXRcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBmaWxlIGRyb3BcbiAgICAgICAgICAgICAgICBmaWxlZHJhZy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgRmlsZURyYWdIb3ZlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGZpbGVkcmFnLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgRmlsZURyYWdIb3ZlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGZpbGVkcmFnLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIEZpbGVTZWxlY3RIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZmlsZWRyYWcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIEZpbGVEcmFnSG92ZXIoZSkge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IChlLnR5cGUgPT0gXCJkcmFnb3ZlclwiID8gXCJob3ZlclwiIDogXCJcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuRmlsZSAmJiB3aW5kb3cuRmlsZUxpc3QgJiYgd2luZG93LkZpbGVSZWFkZXIpIHtcbiAgICAgICAgICAgICAgSW5pdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaWxlIHNlbGVjdGlvblxuICAgICAgICAgICAgZnVuY3Rpb24gRmlsZVNlbGVjdEhhbmRsZXIoZSkge1xuXG4gICAgICAgICAgICAgIC8vIGNhbmNlbCBldmVudCBhbmQgaG92ZXIgc3R5bGluZ1xuICAgICAgICAgICAgICBGaWxlRHJhZ0hvdmVyKGUpO1xuXG4gICAgICAgICAgICAgIC8vIGZldGNoIEZpbGVMaXN0IG9iamVjdFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlKChlLnRhcmdldC5maWxlcyB8fCBlLmRhdGFUcmFuc2Zlci5maWxlcylbMF0pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2NvcGUgd2l0aCB0aGUgdmlldyB2YWx1ZVxuICAgICAgICAgICAgbmdNb2RlbC4kcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzY29wZS5maWxlbmFtZSA9IG5nTW9kZWwuJHZpZXdWYWx1ZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwbG9hZEZpbGUoc2VsZWN0ZWRGaWxlKSB7XG4gICAgICAgICAgICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZSA9IGZpbGUuZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3RpbmcgaGVyZSB5bycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRmlsZSk7XG4gICAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IHNlbGVjdGVkRmlsZS5uYW1lO1xuICAgICAgICAgICAgICB2YXIgZXh0ID0gZmlsZW5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcblxuICAgICAgICAgICAgICBpZihhbmd1bGFyLmlzT2JqZWN0KG9wdHMuZ2V0TWFudWFsT3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgICBfdXBsb2FkKG9wdHMuZ2V0TWFudWFsT3B0aW9ucyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgUzNVcGxvYWRlci5nZXRVcGxvYWRPcHRpb25zKG9wdHMuZ2V0T3B0aW9uc1VyaSkudGhlbihmdW5jdGlvbiAoczNPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICBfdXBsb2FkKHMzT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNhbid0IHJlY2VpdmUgdGhlIG5lZWRlZCBvcHRpb25zIGZvciBTMyBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIF91cGxvYWQoczNPcHRpb25zKXtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5lbmFibGVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndXBsb2FkaW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBzM1VyaSA9ICdodHRwczovLycgKyBidWNrZXQgKyAnLnMzLmFtYXpvbmF3cy5jb20vJztcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gb3B0cy5mb2xkZXIgKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpICsgJy0nICsgUzNVcGxvYWRlci5yYW5kb21TdHJpbmcoMTYpICsgXCIuXCIgKyBleHQ7XG4gICAgICAgICAgICAgICAgUzNVcGxvYWRlci51cGxvYWQoc2NvcGUsXG4gICAgICAgICAgICAgICAgICAgIHMzVXJpLFxuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuYWNsLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGUudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgczNPcHRpb25zLmtleSxcbiAgICAgICAgICAgICAgICAgICAgczNPcHRpb25zLnBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgczNPcHRpb25zLnNpZ25hdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlXG4gICAgICAgICAgICAgICAgICApLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWaWV3VmFsdWUoczNVcmkgKyBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5maWxlbmFtZSA9IG5nTW9kZWwuJHZpZXdWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5lbmFibGVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3VwbG9hZGluZycsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzdWNjZWVkZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5maWxlbmFtZSA9IG5nTW9kZWwuJHZpZXdWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5lbmFibGVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3VwbG9hZGluZycsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzdWNjZWVkZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2NoYW5nZScsIGZ1bmN0aW9uIChuVmFsKSB7XG4gICAgICAgICAgICAgIGlmIChvcHRzLnN1Ym1pdE9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHVwbG9hZEZpbGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5kb1VwbG9hZCkpIHtcbiAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLmRvVXBsb2FkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkgdXBsb2FkRmlsZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKGVsbSwgYXR0cnMpIHtcbiAgICAgICAgdmFyIHRoZW1lID0gYXR0cnMudGhlbWUgfHwgbmdTM0NvbmZpZy50aGVtZTtcbiAgICAgICAgcmV0dXJuICd0aGVtZS8nICsgdGhlbWUgKyAnLmh0bWwnO1xuICAgICAgfVxuICAgIH07XG4gIH1dKTtcbiJdfQ==;
angular.module('ngS3upload').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('theme/bootstrap2.html',
    "<div class=\"upload-wrap\">\n" +
    "  <button class=\"btn btn-primary\" type=\"button\"><span ng-if=\"!filename\">Choose file</span><span ng-if=\"filename\">Replace file</span></button>\n" +
    "  <a ng-href=\"{{ filename  }}\" target=\"_blank\" class=\"\" ng-if=\"filename\" > Stored file </a>\n" +
    "  <div class=\"progress progress-striped\" ng-class=\"{active: uploading}\" ng-show=\"attempt\" style=\"margin-top: 10px\">\n" +
    "    <div class=\"bar\" style=\"width: {{ progress }}%;\" ng-class=\"barClass()\"></div>\n" +
    "    </div>\n" +
    "  <input type=\"file\" style=\"display: none\"/>\n" +
    "</div>"
  );


  $templateCache.put('theme/bootstrap3.html',
    "<div class=\"upload-wrap\">\n" +
    "  <style scoped>\n" +
    "    #s3-drop-target{\n" +
    "      height: 100px;\n" +
    "      width: 100%;\n" +
    "      margin-bottom: 10px;\n" +
    "      display: flex !important;\n" +
    "      flex-direction: column;\n" +
    "      justify-content: center;\n" +
    "      align-items: center;\n" +
    "      border-radius: 8px;\n" +
    "      border: 3px dashed #999;\n" +
    "      color: #999;\n" +
    "      font-size: 24px;\n" +
    "      font-weight: bold;\n" +
    "      text-transform: capitalize;\n" +
    "      background-color: rgb(238, 238, 238);\n" +
    "    }\n" +
    "\n" +
    "    #s3-drop-target.hover{\n" +
    "      border: 3px dashed #777;\n" +
    "      color: #777;\n" +
    "      background-color: rgb(225, 225, 225);\n" +
    "    }\n" +
    "\n" +
    "  </style>\n" +
    "  <button class=\"btn btn-primary\" type=\"button\" style=\"margin-bottom: 10px\" id=\"s3-button-target\">\n" +
    "    <span>Select File</span>\n" +
    "  </button>\n" +
    "\n" +
    "  <div id=\"s3-drop-target\"> drop file here</div>\n" +
    "  <div class=\"progress\" >\n" +
    "    <div class=\"progress-bar progress-bar-striped\" ng-class=\"{active: uploading}\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{ progress }}%;\" ng-class=\"barClass()\">\n" +
    "      <span class=\"sr-only\">{{progress}}% Complete</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <input type=\"file\" style=\"display: none\" id=\"s3-file-target\"/>\n" +
    "</div>\n"
  );

}]);
