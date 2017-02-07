app.factory("ReportService", function() {
    var report = {};

    return {
        getReport: function() {
            return report;
        },
        setReport: function(providedReport) {
            report = providedReport;
        }
    };
});