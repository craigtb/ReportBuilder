(function() {
    'use strict';

    app.controller('reportViewerCtrl', reportViewerCtrl);

    function reportViewerCtrl(ReportService){
        var reportViewer = this;
        reportViewer.report = ReportService.getReport()
    }
})();