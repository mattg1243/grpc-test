// package: tasks
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Task extends jspb.Message { 
    getId(): number;
    setId(value: number): Task;
    getName(): string;
    setName(value: string): Task;
    getComplete(): boolean;
    setComplete(value: boolean): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        id: number,
        name: string,
        complete: boolean,
    }
}

export class TaskRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): TaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TaskRequest): TaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskRequest;
    static deserializeBinaryFromReader(message: TaskRequest, reader: jspb.BinaryReader): TaskRequest;
}

export namespace TaskRequest {
    export type AsObject = {
        name: string,
    }
}
