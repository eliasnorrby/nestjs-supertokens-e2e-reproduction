import { Injectable } from '@nestjs/common';
import { AppInfo } from 'supertokens-node/types';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Dashboard from 'supertokens-node/recipe/dashboard';

type Config = {
  appInfo: AppInfo;
  connectionURI: string;
  apiKey?: string;
};

const config: Config = {
  connectionURI: 'http://localhost:3567',
  appInfo: {
    appName: 'Repro',
    apiDomain: 'http://localhost:3000',
    websiteDomain: 'http://localhost:8000',
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
};

@Injectable()
export class SupertokensService {
  constructor() {
    supertokens.init({
      appInfo: config.appInfo,
      supertokens: {
        connectionURI: config.connectionURI,
        apiKey: config.apiKey,
      },
      recipeList: [EmailPassword.init(), Session.init(), Dashboard.init()],
    });
  }
}
