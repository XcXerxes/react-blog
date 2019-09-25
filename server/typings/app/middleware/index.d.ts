// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthToken from '../../../app/middleware/authToken';

declare module 'egg' {
  interface IMiddleware {
    authToken: typeof ExportAuthToken;
  }
}
