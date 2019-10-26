// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiArticle from '../../../app/controller/api/article';
import ExportApiCategory from '../../../app/controller/api/category';
import ExportApiUpload from '../../../app/controller/api/upload';
import ExportApiUser from '../../../app/controller/api/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      article: ExportApiArticle;
      category: ExportApiCategory;
      upload: ExportApiUpload;
      user: ExportApiUser;
    }
  }
}
