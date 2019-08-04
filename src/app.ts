
import * as arkivex from "@dataplatformsolutions/arkivex";

let arkid : string = "ADD YOUR arkid here";
let jwt : string = "ADD YOUR JWT here";

let client : arkivex.ArkivexClient = new arkivex.ArkivexClient("https://app.arkivex.com");
client.setArkId(arkid);
client.setJwt(jwt);

// do work here
// ...


