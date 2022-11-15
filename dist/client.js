"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const tasks_grpc_pb_1 = require("./proto/tasks_grpc_pb");
const tasks_pb_1 = require("./proto/tasks_pb");
const client = new tasks_grpc_pb_1.TasksClient('http://localhost:3001', grpc_js_1.credentials.createInsecure());
const request = new tasks_pb_1.TaskRequest();
client.getTasks(null, (err, response) => {
    if (err) {
        console.error(err);
    }
    else {
        console.info(response.toObject());
    }
});
