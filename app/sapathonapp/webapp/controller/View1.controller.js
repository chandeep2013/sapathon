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

        return Controller.extend("com.sap.sapathonapp.controller.View1", {
            onInit: function () {
                var that= this;
                var oVizFrame1 = this.getView().byId("idVizFrame1");
			    var oPopOver1 = this.getView().byId("idPopOver1");
			    oPopOver1.connect(oVizFrame1.getVizUid());
                oPopOver1.setActionItems([{
                    type: 'action',
                    text: 'View Details',
                    press: function() {
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                        oRouter.navTo("View2");
                    }
                }]);
                var oVizFrame2 = this.getView().byId("idVizFrame2");
			    var oPopOver2 = this.getView().byId("idPopOver2");
			    oPopOver2.connect(oVizFrame2.getVizUid());
                oPopOver2.setActionItems([{
                    type: 'action',
                    text: 'View Details',
                    press: function() {
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                        oRouter.navTo("View2");
                    }
                }]);
            },
            onPressCO2Tile:function(){
                this.getView().byId("idBox1").setVisible(true);
                this.getView().byId("idBox2").setVisible(false);
            },
            onPressEnergyTile:function(){
                this.getView().byId("idBox1").setVisible(false);
                this.getView().byId("idBox2").setVisible(true);
            }
            
        });
    });
