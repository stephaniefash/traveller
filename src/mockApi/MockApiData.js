import Data from "./preferenceDb.json";

export default class MockApiData {
  getDates = () => {
    return Data.dates;
  };

  getNoOfRooms = () => {
    return Data.rooms;
  };

  getNoOfAdults = () => {
    return Data.adults;
  };

  getNoOfChildren = () => {
    return Data.child;
  };
}
