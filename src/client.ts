import { credentials } from "@grpc/grpc-js";
import { TasksClient } from "./proto/tasks_grpc_pb";
import { TaskRequest, Task } from './proto/tasks_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

const client = new TasksClient('localhost:3001', credentials.createInsecure());

const request = new TaskRequest();

const emptyArg = new google_protobuf_empty_pb.Empty();

const rpcTimer = 'Message received from gRPC server in: ';

console.time(rpcTimer);
client.getTasks(emptyArg, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.info(response.toObject());
  }
})

console.timeEnd(rpcTimer);
