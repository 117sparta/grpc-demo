import * as grpc from 'grpc';
import { ConnectClient } from '../proto-api/connect_grpc_pb';

const backendAddr =

function constructClient<T>(Client: {
  new (
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  ): T;
}): T {
  return new Client(backendAddr, grpc.credentials.createSsl());
}

