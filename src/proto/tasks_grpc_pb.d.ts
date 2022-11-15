// package: tasks
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as tasks_pb from "./tasks_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ITasksService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTask: ITasksService_IGetTask;
    getTasks: ITasksService_IGetTasks;
    createTask: ITasksService_ICreateTask;
    deleteTask: ITasksService_IDeleteTask;
}

interface ITasksService_IGetTask extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, tasks_pb.Task> {
    path: "/tasks.Tasks/GetTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}
interface ITasksService_IGetTasks extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, tasks_pb.Task> {
    path: "/tasks.Tasks/GetTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}
interface ITasksService_ICreateTask extends grpc.MethodDefinition<tasks_pb.Task, google_protobuf_empty_pb.Empty> {
    path: "/tasks.Tasks/CreateTask";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.Task>;
    requestDeserialize: grpc.deserialize<tasks_pb.Task>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITasksService_IDeleteTask extends grpc.MethodDefinition<tasks_pb.TaskRequest, google_protobuf_empty_pb.Empty> {
    path: "/tasks.Tasks/DeleteTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.TaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.TaskRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const TasksService: ITasksService;

export interface ITasksServer extends grpc.UntypedServiceImplementation {
    getTask: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, tasks_pb.Task>;
    getTasks: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, tasks_pb.Task>;
    createTask: grpc.handleClientStreamingCall<tasks_pb.Task, google_protobuf_empty_pb.Empty>;
    deleteTask: grpc.handleUnaryCall<tasks_pb.TaskRequest, google_protobuf_empty_pb.Empty>;
}

export interface ITasksClient {
    getTask(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    getTask(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    getTask(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    getTasks(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    getTasks(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    getTasks(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    createTask(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<tasks_pb.Task>;
    createTask(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<tasks_pb.Task>;
    createTask(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<tasks_pb.Task>;
    createTask(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<tasks_pb.Task>;
    deleteTask(request: tasks_pb.TaskRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTask(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTask(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class TasksClient extends grpc.Client implements ITasksClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTask(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public getTask(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public getTask(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public getTasks(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public getTasks(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public getTasks(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public createTask(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<tasks_pb.Task>;
    public createTask(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<tasks_pb.Task>;
    public createTask(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<tasks_pb.Task>;
    public createTask(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<tasks_pb.Task>;
    public deleteTask(request: tasks_pb.TaskRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTask(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTask(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
