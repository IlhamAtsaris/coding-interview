const dataset = require("./data.json");

function itemMeetingRoom() {
  console.log("\n" + "Find items in the Meeting Room:");
  dataset.filter((data) => {
    if (data.placement["name"] === "Meeting Room") {
      console.log(data.name);
    }
  });
}

itemMeetingRoom();

function electronicDevice() {
  console.log("\n" + "Find all electronic devices:");
  dataset.filter((data) => {
    if (data.type === "electronic") {
      console.log(data.name);
    }
  });
}

electronicDevice();

function furniture() {
  console.log("\n" + "Find all the furniture : ");
  dataset.filter((data) => {
    if (data.type === "furniture") {
      console.log(data.name);
    }
  });
}

furniture();

function brownColor() {
  console.log("\n" + "Find all the furniture : ");
  const tags = dataset.filter;
  console.log(tags)
}

brownColor();
