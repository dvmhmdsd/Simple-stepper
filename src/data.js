export const data = {
  steps: {
    stepsWithCancelled: [
      { label: "Request Created", info: "09 Dec,10 AM", name: "created" },
      { label: "Assigning", name: "assigned", info: "09 Dec,10 AM" },
      { label: "Start", name: "started", info: "09 Dec,10 AM" },
      { label: "Cancelled", name: "cancelled", info: "09 Dec,10 AM" },
    ],
    stepsWithClosed: [
      { label: "Request Created", info: "09 Dec,10 AM", name: "created" },
      { label: "Assigning", name: "assigned", info: "09 Dec,10 AM" },
      { label: "Start", name: "started", info: "09 Dec,10 AM" },
      { label: "Closed", name: "closed", info: "09 Dec,10 AM" },
    ],
    stepsWithAssigned: [
      { label: "Request Created", info: "09 Dec,10 AM", name: "created" },
      { label: "Assigning", name: "assigned", info: "09 Dec,10 AM" },
      { label: "Start", name: "started" },
      { label: "Closed", name: "closed" },
    ],
    stepsWithStarted: [
      { label: "Request Created", info: "09 Dec,10 AM", name: "created" },
      { label: "Assigning", name: "assigned", info: "09 Dec,10 AM" },
      { label: "Start", name: "started", info: "09 Dec,10 AM" },
      { label: "Closed", name: "closed" },
    ],
    stepsWithCreated: [
      { label: "Request Created", info: "09 Dec,10 AM", name: "created" },
      { label: "Assigning", name: "assigned" },
      { label: "Start", name: "started" },
      { label: "Closed", name: "closed" },
    ],
  },
  status: {
    statusWithCancelled: {
      title: "Request cancelled",
      body: "Request has been cancelled",
      shortName: "cancelled",
    },
    statusWithClosed: {
      title: "Request Completed",
      body: "Request has been finished",
      shortName: "closed",
    },
    statusWithAssigned: {
      title: "Professional Assigned",
      body: "Professional has been assigned, need to start from professional side",
      shortName: "assigned",
    },

    statusWithCreated: {
      title: "Request created",
      body: "Request has been created",
      shortName: "created",
    },
    statusWithStarted: {
      title: "Request Started",
      body: "Request has been started",
      shortName: "started",
    },
  },
};
