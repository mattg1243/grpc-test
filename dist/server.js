"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const tasks_pb_1 = require("./proto/tasks_pb");
const tasks_grpc_pb_1 = require("./proto/tasks_grpc_pb");
// implements GetTask rpc method
const getTask = (call, callback) => {
    const response = new tasks_pb_1.Task();
    response.setId(12345);
    response.setName('autogen task');
    callback(null, response);
};
const main = () => {
    const server = new grpc_js_1.Server();
    server.addService(tasks_grpc_pb_1.TasksService, { getTask });
    server.bindAsync('0.0.0.0:3001', grpc_js_1.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('gRPC Task service is running on port 3001...');
    });
};
