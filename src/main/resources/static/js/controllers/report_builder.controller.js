(function() {
    'use strict';

    app.controller('reportBuilderCtrl', reportBuilderCtrl);
    
    function reportBuilderCtrl($http, ReportService){
        var reportBuilder = this;
        reportBuilder.rules = []
        reportBuilder.currentItem = {}
        reportBuilder.currentItem.rule = {}
        reportBuilder.currentRule = 0
        reportBuilder.companyName = ""
        reportBuilder.reportItems = []
        reportBuilder.myDate = new Date();
        reportBuilder.isOpen = false;
        reportBuilder.showReport = false;
        reportBuilder.report = {companyName: null, date: null, introduction: null, reportItems: [], closing: null};

        $http.get('/getAllRules')
            .then(function(data) {
                    reportBuilder.rules = data.data

            },function(err) {
                console.error("Error ", err);
            });

        reportBuilder.addItem = function(){

            var rule = _.findIndex(reportBuilder.rules, ['id', parseInt(reportBuilder.currentItem.currentRule)]);
            reportBuilder.currentItem.rule = reportBuilder.rules[rule]
            reportBuilder.reportItems.push(reportBuilder.currentItem)
            reportBuilder.currentItem = {}
        }

        reportBuilder.generateReport = function() {
            reportBuilder.showReport = !reportBuilder.showReport;
            reportBuilder.report.companyName = reportBuilder.companyName;
            reportBuilder.report.date = reportBuilder.myDate;
            reportBuilder.report.introduction = reportBuilder.introduction;
            reportBuilder.report.closing = reportBuilder.closing;
            reportBuilder.report.reportItems = reportBuilder.reportItems;
            ReportService.setReport(reportBuilder.report)
            // reportBuilder.report = ReportService.getReport()

            location.assign('/#!/reportViewer')

        }
    }
})();