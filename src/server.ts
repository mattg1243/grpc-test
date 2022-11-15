import protoLoader from '@grpc/proto-loader';
import {
  Server, 
  ServerCredentials,
  ServerUnaryCall,
  sendUnaryData
} from '@grpc/grpc-js'

import { Task, TaskRequest } from './proto/tasks_pb';
import { TasksService } from './proto/tasks_grpc_pb';

// implements GetTask rpc method
const getTask = (call: ServerUnaryCall<TaskRequest, Task>, callback: sendUnaryData<Task>) => {
  const response = new Task();
  response.setId(12345);
  response.setName('autogen task');
  callback(null, response);
}

const getTasks = (call: ServerUnaryCall<TaskRequest, Task>, callback: sendUnaryData<Task>) => {
  const response = new Task();
  response.setId(12345);
  response.setName('autogen task');
  callback(null, response);
}

const main = () => {
  const server = new Server();
  server.addService(TasksService, {getTask, getTasks})
  server.bindAsync('localhost:3001', ServerCredentials.createInsecure(), () => {
    server.start();
  })
  console.log('gRPC Task service is running on port 3001...')
}

main();