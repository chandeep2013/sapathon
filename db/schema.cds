namespace sap.com.sapathon;

entity CO2{
  key ID   : Integer;
  sapServer    :  String(100);
  usage :  String(20);
  databaseServer : String(10);
  tcode : String(10);
  programName : String(10);
  activeUsersOfTheProgram : String(100);
  noOfTimesThePgmRunForTheDay : String(10);
  noOfDaysThePgmRunForTheYear : String(10);
  executionDateAndTime : String(100);
  currentRunningTimeinCPUSeconds: String(100);
  energyConsumptioninMWH: String(100);
  co2EmissioninMG: String(100);
}

entity Energy {
 key ID   : Integer;
  sapServer    :  String(100);
  usage :  String(20);
  databaseServer : String(10);
  tcode : String(10);
  programName : String(10);
  activeUsersOfTheProgram : String(100);
  noOfTimesThePgmRunForTheDay : String(10);
  noOfDaysThePgmRunForTheYear : String(10);
  executionDateAndTime : String(100);
  currentRunningTimeinCPUSeconds: String(100);
  energyConsumptioninMWH: String(100);
  co2EmissioninMG: String(100);
 }
