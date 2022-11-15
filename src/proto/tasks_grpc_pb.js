// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tasks_pb = require('./tasks_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_Task(arg) {
  if (!(arg instanceof tasks_pb.Task)) {
    throw new Error('Expected argument of type tasks.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_Task(buffer_arg) {
  return tasks_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_TaskRequest(arg) {
  if (!(arg instanceof tasks_pb.TaskRequest)) {
    throw new Error('Expected argument of type tasks.TaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_TaskRequest(buffer_arg) {
  return tasks_pb.TaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TasksService = exports.TasksService = {
  getTask: {
    path: '/tasks.Tasks/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_tasks_Task,
    responseDeserialize: deserialize_tasks_Task,
  },
  getTasks: {
    path: '/tasks.Tasks/GetTasks',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_tasks_Task,
    responseDeserialize: deserialize_tasks_Task,
  },
  createTask: {
    path: '/tasks.Tasks/CreateTask',
    requestStream: true,
    responseStream: false,
    requestType: tasks_pb.Task,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_tasks_Task,
    requestDeserialize: deserialize_tasks_Task,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteTask: {
    path: '/tasks.Tasks/DeleteTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.TaskRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_tasks_TaskRequest,
    requestDeserialize: deserialize_tasks_TaskRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.TasksClient = grpc.makeGenericClientConstructor(TasksService);
