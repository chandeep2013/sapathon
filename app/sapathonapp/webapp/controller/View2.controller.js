sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/controls/Popover"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,ODataModel,JSONModel,Popover) {
        "use strict";

        return Controller.extend("com.sap.sapathonapp.controller.View2", {
            onInit: function () {
               
            },
            navButtonPress:function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("View1");
            }
            
        });
    });
